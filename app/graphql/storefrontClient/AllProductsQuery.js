export const ALL_PRODUCTS_QUERY = `#graphql
    query AllProducts(
        $first: Int
        $last: Int
        $startCursor: String
        $endCursor: String
        ){
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
`