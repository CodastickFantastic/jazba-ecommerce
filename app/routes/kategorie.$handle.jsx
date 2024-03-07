import { useLoaderData } from "@remix-run/react"
import { getPaginationVariables } from "@shopify/hydrogen";
import { json } from "@shopify/remix-oxygen"
import HeaderWithImgSection from "~/components/sections/HeaderWIthImgSection";
import ProductGridSection from "~/components/sections/ProductGridSection";

export function meta({ data }) {
    return [
        { title: data.collection.seo.title },
        { descritpion: data.collection.seo.description },
        { keywords: "koszulka polo, koszulka, t-shirt, czapka, czapka bucket, czapka z daszkiem, bluza" },
    ]
}

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

    //Handle 404s
    if (!collection) {
        throw new Response(null, { status: 404 })
    }
    return json({ collection })
}

export default function Wzory() {
    const { collection } = useLoaderData()

    return (
        <>
            <HeaderWithImgSection h1={collection.title} description={collection.descriptionHtml} img={collection.image} />
            <ProductGridSection collection={collection} />
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