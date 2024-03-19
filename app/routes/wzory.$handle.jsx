import { useLoaderData } from "@remix-run/react"
import { getPaginationVariables } from "@shopify/hydrogen";
import { json } from "@shopify/remix-oxygen"
import HeaderWithImgSection from "~/components/sections/HeaderWIthImgSection";
import ProductGridSection from "~/components/sections/ProductGridSection";
import CategoryLongDescription from "~/components/sections/CategoryLongDescription";
import { CATEGORY_QUERY } from "~/graphql/storefrontClient/CategoryQuery";

import seoAnimalsPatterns from "~/seo/seoAnimalsPatterns";
export async function loader({ params, context, request }) {
    const paginationVariables = getPaginationVariables(request, {
        pageBy: 15,
    })
    const { handle } = params
    const { collection } = await context.storefront.query(CATEGORY_QUERY, {
        variables: {
            ...paginationVariables,
            handle,
        },
    });

    const seo = seoAnimalsPatterns({ collection, url: request.url });

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