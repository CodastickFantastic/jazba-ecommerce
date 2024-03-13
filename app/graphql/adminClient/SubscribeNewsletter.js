export const SUBSCRIBE_NEWSLETTER = `#graphql 
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input){
      customer{
        email
      }
      userErrors {
        field
        message
      }
    }
  }`