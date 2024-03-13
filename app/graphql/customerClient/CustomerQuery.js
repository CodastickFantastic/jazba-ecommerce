export const CUSTOMER_QUERY = `#graphql
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
`;