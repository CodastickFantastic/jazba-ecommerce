import { useLoaderData } from "@remix-run/react"
import { getPaginationVariables } from "@shopify/hydrogen";
import { json } from "@shopify/remix-oxygen"
import HeaderWithImgSection from "~/components/sections/HeaderWIthImgSection";
import ProductGridSection from "~/components/sections/ProductGridSection";
import CategoryLongDescription from "~/components/sections/CategoryLongDescription";

import seoCategory from "~/seo/seoCategory";

export async function loader({ params, context, request }) {
    const paginationVariables = getPaginationVariables(request, {
        pageBy: 15,
    })
    const { handle } = params
    const { collection } = await context.storefront.query(COLLECTION_QUERY, {
        variables: {
            ...paginationVariables,
            handle,
        },
    });

    const seo = seoCategory({
        title: collection.title,
        description: collection.seo.description,
    })

    //Handle 404s
    if (!collection) {
        throw new Response(null, { status: 404 })
    }
    return json({ collection, seo })
}

export default function Wzory() {
    const { collection } = useLoaderData()
    const collectionDescriptionJson = JSON.parse(collection.metafield.value)

    return (
        <>
            <HeaderWithImgSection h1={collection.title} description={collectionDescriptionJson.shortDescription} img={collection.image} />
            <ProductGridSection collection={collection} />
            <CategoryLongDescription h2={collectionDescriptionJson.h2} description={collectionDescriptionJson.longDescription} />
        </>
    )
}

const COLLECTION_QUERY = `#graphql
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