import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';

// import { CUSTOMER_QUERY } from '~/graphql/customer-account/CustomerQuery';
import { CUSTOMER_UPDATE_MUTATION } from '~/graphql/customer-account/CustomerUpdateMutation';
import { CUSTOMER_ORDER_QUERY } from '~/graphql/customer-account/CustomerOrderQuery';

import styles from '~/styles/pages/userAccount.module.css';

export async function loader({ context }) {
    let response = {
        customer: {},
        order: {}
    };

    async function getUserData() {
        const { data, errors } = await context.customerAccount.query(`#graphql
        query getCustomer {
          customer {
            id
            firstName
            lastName
            emailAddress{
              emailAddress
              marketingState
            }
            phoneNumber {
              phoneNumber
              marketingState
            }
          }
        }
      `);


        if (errors?.length || !data?.customer) {
            throw new Error('Customer not found');
            // return json({ customer: errors })
        }

        response.customer = data?.customer
    }

    await getUserData();


    async function getOrdersData() {
        const { data, errors } = await context.customerAccount.query(
            CUSTOMER_ORDER_QUERY,
        )

        if (errors?.length || !data?.customer) {
            // throw new Error('Customer not found');
            console.log("ERROR:", errors[0].message)
            response.order = errors
        }

        response.order = data?.customer
    }

    await getOrdersData();







    // let { data, errors } = await context.customerAccount.query(
    //     CUSTOMER_ORDER_QUERY,
    // )

    return json(
        { customer: response.customer, order: response.order },
        {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Set-Cookie': await context.session.commit(),
            },
        },
    );
}

export async function action({ request, context, params }) {
    const formData = await request.formData();

    if (!(await context.customerAccount.isLoggedIn())) {
        throw await doLogout(context);
    }

    try {
        const response = {
            data: { customer: null, email: null, sms: null },
            errors: { customer: null, email: null, sms: null },
        }

        const name = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('emailAddress');
        const phone = formData.get('phoneNumber');
        const mailing = formData.get('mailing') === "true" ? "SUBSCRIBED" : "NOT_SUBSCRIBED";
        const smsing = formData.get('smsing') === "true" ? "SUBSCRIBED" : "NOT_SUBSCRIBED";

        if (!name) throw new Error('Imie jest wymagane');
        if (!lastName) throw new Error('Nazwisko jest wymagane');
        if (!email) throw new Error('Email jest wymagany');
        if (!phone) throw new Error('Numer telefonu jest wymagany');

        console.log(mailing, smsing)


        const customer = {
            firstName: name,
            lastName,
        };



        const phoneNumber = {
            phoneNumber: phone,
            marketingState: smsing
        }




        let { data, errors } = await context.customerAccount.mutate(CUSTOMER_UPDATE_MUTATION, { variables: { customer } })


        response.data.customer = data
        response.errors.customer = errors

        return json({ response: response });

    } catch (e) {
        return json({ formError: e.message });
    }

    // console.log(formData)



}

export default function () {
    const { customer, order } = useLoaderData();
    const actionData = useActionData();



    console.log(customer)
    console.log("ORDER:", order)
    // console.log(actionData)

    return customer ? (
        <div className={`${styles.userAccount} smallContainer`}>
            <h1> Moje Konto</h1>
            <div className={styles.row}>
                <div className={styles.userDetails}>
                    <Form method='post'>
                        <label htmlFor="firstName">Imie</label>
                        <input type="text" name="firstName" id="firstName" defaultValue={customer.firstName} />
                        <label htmlFor="lastName">Nazwisko</label>
                        <input type="text" name="lastName" id='lastName' defaultValue={customer.lastName} />
                        <label htmlFor="emailAddress">Adres Email</label>
                        <input type="email" name="emailAddress" id="emailAddress" defaultValue={customer.emailAddress.emailAddress} />
                        <label htmlFor="phoneNumber">Numer telefonu</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" defaultValue={customer.phoneNumber.phoneNumber} />
                        <label htmlFor='mailing'>
                            <input
                                type="checkbox"
                                name="mailing"
                                id="mailing"
                                defaultChecked={customer.emailAddress.marketingState === 'SUBSCRIBED' ? true : false}
                                defaultValue={customer.emailAddress.marketingState === 'SUBSCRIBED' ? true : false} />
                            <p>Wyrażam zgodę na marketing mailowy</p>
                        </label>
                        <label htmlFor='smsing'>
                            <input
                                type="checkbox"
                                name="smsing"
                                id="smsing"
                                defaultChecked={customer.phoneNumber.marketingState === 'SUBSCRIBED' ? true : false}
                                defaultValue={customer.phoneNumber.marketingState === 'SUBSCRIBED' ? true : false} />
                            <p>Wyrażam zgodę na marketing SMS</p>
                        </label>
                        <button type="submit">Zapisz Dane</button>
                        {actionData?.formError && <p>{actionData.formError}</p>}

                    </Form>
                </div>
                <div className={styles.options}>
                    <Form method="post" action="/account/logout">
                        <button>Logout</button>
                    </Form>
                </div>
            </div>
        </div>
    ) : null;
}