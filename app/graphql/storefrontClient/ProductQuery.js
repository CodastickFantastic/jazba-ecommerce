export const PRODUCT_QUERY = `#graphql
    query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
        shop{
            primaryDomain{
                url
            }
        }
        product(handle: $handle){
            id
            tags
            title
            handle
            descriptionHtml
            metafield(key: "jsonProduct", namespace: "custom"){
                value
            }
            priceRange{
                maxVariantPrice{
                    amount
                    currencyCode
                }
            }
            seo{
                title
                description
            }
            featuredImage{
                id
                url
                altText
            }
            images(first: 4){
                edges{
                    node{
                        id
                        url
                        altText
                    }
                }
            }
            options{
                name,
                values
            }
            selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
                id
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                sku
                title
                unitPrice {
                  amount
                  currencyCode
                }
                product {
                  title
                  handle
                }
            }
        }
    }    
`