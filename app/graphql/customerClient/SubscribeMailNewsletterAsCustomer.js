export const SUBSCRIBE_MAIL_NEWSLETTER_AS_CUSTOMER = `#graphql
mutation {
    customerEmailMarketingSubscribe{
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