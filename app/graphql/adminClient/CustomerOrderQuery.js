export const CUSTOMER_ORDER_QUERY = `#graphql
  query CustomerOrders($id: ID!){
    customer(id: $id){
      orders(first: 250, query: "status:any"){
        edges{
          node{
            id
            name
            createdAt
            displayFulfillmentStatus
            currentSubtotalPriceSet{
              presentmentMoney{
                amount
                currencyCode
              }
            }
            displayAddress{
              address1
              city
              country
              zip
            }
            shippingLine{
              title
            }
            lineItems(first: 250){
              edges{
                node{
                  id
                  name
                  quantity
                  variantTitle
                  vendor
                  discountedUnitPriceSet{
                    presentmentMoney{
                      amount
                      currencyCode
                    }
                  }
                  image{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;