/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as CustomerAccountAPI from '@shopify/hydrogen/customer-account-api-types';

export type GetCustomerQueryVariables = CustomerAccountAPI.Exact<{
  [key: string]: never;
}>;

export type GetCustomerQuery = {
  customer: Pick<
    CustomerAccountAPI.Customer,
    'id' | 'firstName' | 'lastName'
  > & {
    emailAddress?: CustomerAccountAPI.Maybe<
      Pick<
        CustomerAccountAPI.CustomerEmailAddress,
        'emailAddress' | 'marketingState'
      >
    >;
    phoneNumber?: CustomerAccountAPI.Maybe<
      Pick<
        CustomerAccountAPI.CustomerPhoneNumber,
        'phoneNumber' | 'marketingState'
      >
    >;
  };
};

export type CustomerUpdateMutationVariables = CustomerAccountAPI.Exact<{
  customer: CustomerAccountAPI.CustomerUpdateInput;
}>;

export type CustomerUpdateMutation = {
  customerUpdate?: CustomerAccountAPI.Maybe<{
    userErrors: Array<
      Pick<
        CustomerAccountAPI.UserErrorsCustomerUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

interface GeneratedQueryTypes {
  '#graphql\n     query getCustomer {\n       customer {\n         id\n         firstName\n         lastName\n         emailAddress{\n           emailAddress\n           marketingState\n         }\n         phoneNumber {\n           phoneNumber\n           marketingState\n         }\n       }\n     }\n': {
    return: GetCustomerQuery;
    variables: GetCustomerQueryVariables;
  };
}

interface GeneratedMutationTypes {
  '#graphql\nmutation customerUpdate($customer: CustomerUpdateInput!) {\n  customerUpdate(input: $customer) {\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n': {
    return: CustomerUpdateMutation;
    variables: CustomerUpdateMutationVariables;
  };
}

declare module '@shopify/hydrogen' {
  interface CustomerAccountQueries extends GeneratedQueryTypes {}
  interface CustomerAccountMutations extends GeneratedMutationTypes {}
}
