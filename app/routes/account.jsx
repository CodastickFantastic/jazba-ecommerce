import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';
import { Image } from "@shopify/hydrogen-react";

import { CUSTOMER_ORDER_QUERY } from '~/graphql/adminClient/CustomerOrderQuery';
import { SUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER } from "~/graphql/customerClient/SubscribeMailNewsletterAsCustomer";
import { UNSUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER } from "~/graphql/customerClient/UnsubscribeMailNewsletterAsCustomer";

import styles from '~/styles/pages/userAccount.module.css';

export async function loader({ context }) {
    let response = {
        customer: {},
        orders: {}
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
        }

        response.customer = data?.customer
    }

    async function getOrdersData() {
        const { data, errors } = await context.adminClient.request(
            CUSTOMER_ORDER_QUERY,
            {
                variables: {
                    id: response.customer.id
                }
            }
        )

        if (errors?.length || !data?.customer) {
            // throw new Error('Orders Error');
            console.log("Error1", errors)
            console.log("Error1-Continue", errors.graphQLErrors[0])
        }

        response.orders = data?.customer
    }


    await getUserData();
    await getOrdersData();

    return json(
        { customer: response.customer, orders: response.orders },
        {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Set-Cookie': await context.session.commit(),
            },
        },
    );
}

export async function action({ context, request }) {
    const formData = await request.formData();
    const isSubscribe = formData.get("isSubscribe")

    if (isSubscribe === "UNSUBSCRIBED") {
        const { data, errors } = await context.customerAccount.mutate(SUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER)
    } else {
        const { data, errors } = await context.customerAccount.mutate(UNSUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER)
    }

    return null;
}

export default function () {
    const { customer, orders } = useLoaderData();
    const navigate = useNavigation();

    const newsletterSwitch = customer.emailAddress.marketingState === "SUBSCRIBED" ? true : false

    function setStatus(status) {
        let switchStatus;

        switch (status) {
            case "FULFILLED":
                switchStatus = "Wysłane";
                break;
            case "ON_HOLD":
                switchStatus = "Produkcja";
                break;
            default:
                switchStatus = "Oczekuje Potwierdzenia";
                break;
        }

        return switchStatus
    }


    console.log(customer)
    console.log(orders)



    return customer ? (
        <div className={`${styles.userAccount} smallContainer`}>
            <h1> Moje Konto</h1>
            <section className={styles.customerSection}>
                <p><strong>Zalogowany:</strong> {customer.emailAddress.emailAddress}</p>
                <div className={styles.options}>
                    <Form method='post'>
                        <input type="hidden" name="isSubscribe" value={customer.emailAddress.marketingState} />
                        <input type="hidden" name="email" value={customer.emailAddress.emailAddress} />
                        <button
                            className={`${styles.newsletter} ${!newsletterSwitch && styles.newsletterActive}`}
                            disabled={navigate.state !== 'idle'}
                        >
                            {newsletterSwitch ? "Anuluj Newsletter Email" : "Aktywuj Newsletter Email"}
                        </button>
                    </Form>
                    <Form method="post" action="/account/logout">
                        <button className={styles.logout}>Wyloguj</button>
                    </Form>
                </div>
            </section>
            <section className={styles.orders}>
                <h2>Moje Zamówienia</h2>
                {orders.orders.edges.length > 0 ? (
                    <>
                        {orders.orders.edges.map((order, index) =>
                            <div className={styles.orderTile} key={order.node.id}>
                                <div className={styles.header}>
                                    <p className={styles.orderNumber}>Zamówienie nr.{index + 1}</p>
                                    <p className={`${styles.status} ${styles[order.node.displayFulfillmentStatus]}`}>{setStatus(order.node.displayFulfillmentStatus)}</p>
                                </div>
                                <div className={styles.mainInfo}>
                                    <div className={styles.labelWithText}>
                                        <p><strong>ID Zamówienia</strong></p>
                                        <p>{order.node.id.split("/")[order.node.id.split("/").length - 1]}</p>
                                    </div>
                                    <div className={styles.labelWithText}>
                                        <p><strong>Numer Zamówienia</strong></p>
                                        <p>{order.node.name}</p>
                                    </div>
                                    <div className={styles.labelWithText}>
                                        <p><strong>Data Utworzenia</strong></p>
                                        <p>{new Date(order.node.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className={styles.labelWithText}>
                                        <p><strong>Dostawa do</strong></p>
                                        <p>{`${order.node.displayAddress.city}, ${order.node.displayAddress.country}`}</p>
                                    </div>
                                    <div className={styles.labelWithText}>
                                        <p><strong>Kurier</strong></p>
                                        <p>{order.node.shippingLine.title}</p>
                                    </div>
                                    <div className={styles.labelWithText}>
                                        <p><strong>Suma</strong></p>
                                        <p>{order.node.currentSubtotalPriceSet.presentmentMoney.amount} {order.node.currentSubtotalPriceSet.presentmentMoney.currencyCode}</p>
                                    </div>
                                </div>
                                <div className={styles.showMore}>
                                    <div className={styles.products}>
                                        {order.node.lineItems.edges.map((product, index) => {
                                            return (
                                                <div className={styles.product} key={product.node.id}>
                                                    <Image className={styles.prodImage} src={product.node.image.url} alt="test" width={100} height={100} />
                                                    <div className={styles.productLabel}>
                                                        <p className={styles.label}>Produkt No.</p>
                                                        <p className={styles.description}>{index + 1}</p>
                                                    </div>
                                                    <div className={`${styles.productLabel} ${styles.fixedWidth}`}>
                                                        <p className={styles.label}>Wybrany Produkt</p>
                                                        <p className={styles.description}>{product.node.name.split("-")[0] + " - " + product.node.name.split("-")[1]}</p>
                                                    </div>
                                                    <div className={styles.productLabel}>
                                                        <p className={styles.label}>Rozmiar</p>
                                                        <p className={styles.description}>{product.node.name.split("-")[2]}</p>
                                                    </div>
                                                    <div className={styles.productLabel}>
                                                        <p className={styles.label}>Ilość</p>
                                                        <p className={styles.description}>{product.node.quantity}</p>
                                                    </div>
                                                    <div className={styles.productLabel}>
                                                        <p className={styles.label}>Cena (szt.)</p>
                                                        <p className={styles.description}>{product.node.discountedUnitPriceSet.presentmentMoney.amount + " " + product.node.discountedUnitPriceSet.presentmentMoney.currencyCode}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <label className={styles.showMoreLabel}>
                                        <input type="checkbox" name="showMore" className={styles.showProducts} />
                                        <p>Pokaż więcej</p>
                                    </label>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p style={{ textAlign: 'center' }}>Nie złożono jeszcze żadnego zamówienia</p>
                )}
            </section>

        </div >
    ) : null;
}
