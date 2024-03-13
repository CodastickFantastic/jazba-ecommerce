export const UNSUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER = `#graphql
mutation {
    customerEmailMarketingUnsubscribe{
        emailAddress{
            emailAddress
            marketingState
        }
        userErrors {
            field
            message
        }
    }
}`;