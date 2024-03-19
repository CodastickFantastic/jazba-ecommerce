export const CATEGORY_QUERY = `#graphql
    query CollectionDetails(
        $handle: String!
        $first: Int
        $last: Int
        $startCursor: String
        $endCursor: String
        ){
        collection(handle: $handle){
            title
            descriptionHtml
            handle
            metafield(key: "jsonCollection", namespace: "custom"){
                value
            }
            image{
                altText
                url
                width
                height
            }
            seo{
                title
                description
            }
            products(
                first: $first
                last: $last
                before: $startCursor
                after: $endCursor
            ){
                nodes{
                    id
                    title
                    handle
                    variants(first: 1){
                        nodes{
                            id
                            image{
                                url
                                altText
                            }
                            price{
                                amount
                                currencyCode
                            }
                            compareAtPrice{
                                amount
                                currencyCode
                            }
                        }
                    }
                }
                pageInfo{
                    hasPreviousPage
                    hasNextPage
                    startCursor
                    endCursor
                }
            }
        }
    }
`