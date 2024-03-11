export const CUSTOMER_EMAIL_UPDATE_MUTATION = `#graphql
mutation customerEmailMarketingSubscribe($email: String!, $mailing: String!) {
    customerEmailMarketingSubscribe($email: $email, $mailing: $mailing) {
    emailAddress{
      emailAddress: $email
      marketingState: $mailing
    }
    userErrors {
      code
      field
      message
    }
  }
}
`;