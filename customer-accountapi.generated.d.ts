/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as CustomerAccountAPI from '@shopify/hydrogen/customer-account-api-types';

export type OrderMoneyFragment = Pick<
  CustomerAccountAPI.MoneyV2,
  'amount' | 'currencyCode'
>;

export type DiscountApplicationFragment = {
  value:
    | ({__typename: 'MoneyV2'} & Pick<
        CustomerAccountAPI.MoneyV2,
        'amount' | 'currencyCode'
      >)
    | ({__typename: 'PricingPercentageValue'} & Pick<
        CustomerAccountAPI.PricingPercentageValue,
        'percentage'
      >);
};

export type OrderLineItemFullFragment = Pick<
  CustomerAccountAPI.LineItem,
  'id' | 'title' | 'quantity' | 'variantTitle'
> & {
  price?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  discountAllocations: Array<{
    allocatedAmount: Pick<
      CustomerAccountAPI.MoneyV2,
      'amount' | 'currencyCode'
    >;
    discountApplication: {
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            CustomerAccountAPI.PricingPercentageValue,
            'percentage'
          >);
    };
  }>;
  totalDiscount: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  image?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.Image,
      'altText' | 'height' | 'url' | 'id' | 'width'
    >
  >;
};

export type OrderFragment = Pick<
  CustomerAccountAPI.Order,
  'id' | 'name' | 'statusPageUrl' | 'processedAt'
> & {
  fulfillments: {nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>};
  totalTax?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
  subtotal?: CustomerAccountAPI.Maybe<
    Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  shippingAddress?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.CustomerAddress,
      'name' | 'formatted' | 'formattedArea'
    >
  >;
  discountApplications: {
    nodes: Array<{
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            CustomerAccountAPI.PricingPercentageValue,
            'percentage'
          >);
    }>;
  };
  lineItems: {
    nodes: Array<
      Pick<
        CustomerAccountAPI.LineItem,
        'id' | 'title' | 'quantity' | 'variantTitle'
      > & {
        price?: CustomerAccountAPI.Maybe<
          Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        discountAllocations: Array<{
          allocatedAmount: Pick<
            CustomerAccountAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          discountApplication: {
            value:
              | ({__typename: 'MoneyV2'} & Pick<
                  CustomerAccountAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >)
              | ({__typename: 'PricingPercentageValue'} & Pick<
                  CustomerAccountAPI.PricingPercentageValue,
                  'percentage'
                >);
          };
        }>;
        totalDiscount: Pick<
          CustomerAccountAPI.MoneyV2,
          'amount' | 'currencyCode'
        >;
        image?: CustomerAccountAPI.Maybe<
          Pick<
            CustomerAccountAPI.Image,
            'altText' | 'height' | 'url' | 'id' | 'width'
          >
        >;
      }
    >;
  };
};

export type OrderQueryVariables = CustomerAccountAPI.Exact<{
  orderId: CustomerAccountAPI.Scalars['ID']['input'];
}>;

export type OrderQuery = {
  order?: CustomerAccountAPI.Maybe<
    Pick<
      CustomerAccountAPI.Order,
      'id' | 'name' | 'statusPageUrl' | 'processedAt'
    > & {
      fulfillments: {
        nodes: Array<Pick<CustomerAccountAPI.Fulfillment, 'status'>>;
      };
      totalTax?: CustomerAccountAPI.Maybe<
        Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      totalPrice: Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>;
      subtotal?: CustomerAccountAPI.Maybe<
        Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      shippingAddress?: CustomerAccountAPI.Maybe<
        Pick<
          CustomerAccountAPI.CustomerAddress,
          'name' | 'formatted' | 'formattedArea'
        >
      >;
      discountApplications: {
        nodes: Array<{
          value:
            | ({__typename: 'MoneyV2'} & Pick<
                CustomerAccountAPI.MoneyV2,
                'amount' | 'currencyCode'
              >)
            | ({__typename: 'PricingPercentageValue'} & Pick<
                CustomerAccountAPI.PricingPercentageValue,
                'percentage'
              >);
        }>;
      };
      lineItems: {
        nodes: Array<
          Pick<
            CustomerAccountAPI.LineItem,
            'id' | 'title' | 'quantity' | 'variantTitle'
          > & {
            price?: CustomerAccountAPI.Maybe<
              Pick<CustomerAccountAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            discountAllocations: Array<{
              allocatedAmount: Pick<
                CustomerAccountAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              discountApplication: {
                value:
                  | ({__typename: 'MoneyV2'} & Pick<
                      CustomerAccountAPI.MoneyV2,
                      'amount' | 'currencyCode'
                    >)
                  | ({__typename: 'PricingPercentageValue'} & Pick<
                      CustomerAccountAPI.PricingPercentageValue,
                      'percentage'
                    >);
              };
            }>;
            totalDiscount: Pick<
              CustomerAccountAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
            image?: CustomerAccountAPI.Maybe<
              Pick<
                CustomerAccountAPI.Image,
                'altText' | 'height' | 'url' | 'id' | 'width'
              >
            >;
          }
        >;
      };
    }
  >;
};

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
  '#graphql\n  fragment OrderMoney on MoneyV2 {\n    amount\n    currencyCode\n  }\n  fragment DiscountApplication on DiscountApplication {\n    value {\n      __typename\n      ... on MoneyV2 {\n        ...OrderMoney\n      }\n      ... on PricingPercentageValue {\n        percentage\n      }\n    }\n  }\n  fragment OrderLineItemFull on LineItem {\n    id\n    title\n    quantity\n    price {\n      ...OrderMoney\n    }\n    discountAllocations {\n      allocatedAmount {\n        ...OrderMoney\n      }\n      discountApplication {\n        ...DiscountApplication\n      }\n    }\n    totalDiscount {\n      ...OrderMoney\n    }\n    image {\n      altText\n      height\n      url\n      id\n      width\n    }\n    variantTitle\n  }\n  fragment Order on Order {\n    id\n    name\n    statusPageUrl\n    processedAt\n    fulfillments(first: 1) {\n      nodes {\n        status\n      }\n    }\n    totalTax {\n      ...OrderMoney\n    }\n    totalPrice {\n      ...OrderMoney\n    }\n    subtotal {\n      ...OrderMoney\n    }\n    shippingAddress {\n      name\n      formatted(withName: true)\n      formattedArea\n    }\n    discountApplications(first: 100) {\n      nodes {\n        ...DiscountApplication\n      }\n    }\n    lineItems(first: 100) {\n      nodes {\n        ...OrderLineItemFull\n      }\n    }\n  }\n  query Order($orderId: ID!) {\n    order(id: $orderId) {\n      ... on Order {\n        ...Order\n      }\n    }\n  }\n': {
    return: OrderQuery;
    variables: OrderQueryVariables;
  };
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
