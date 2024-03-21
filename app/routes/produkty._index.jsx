import { useLoaderData } from "@remix-run/react"
import { getPaginationVariables } from "@shopify/hydrogen";
import { json } from "@shopify/remix-oxygen"
import HeaderWithTextSection from "~/components/sections/HeaderWithTextSection";
import ProductGridSection from "~/components/sections/ProductGridSection";
import CategoryLongDescription from "~/components/sections/CategoryLongDescription";

import { ALL_PRODUCTS_QUERY } from "~/graphql/storefrontClient/AllProductsQuery";
import seoAllProducts from "~/seo/seoAllProducts";

export async function loader({ context, request }) {
    const paginationVariables = getPaginationVariables(request, {
        pageBy: 15,
    })
    // const { handle } = params
    const { products } = await context.storefront.query(ALL_PRODUCTS_QUERY, {
        variables: {
            ...paginationVariables,
        },
    });

    const seo = seoAllProducts({
        title: "Wszystkie Produkty",
        description: "Poznaj wszystkie produkty z kolekcji Jazba. Sprawdź produkty w naszym sklepie i znajdz wzór dla siebie.",
        products: products,
        url: request.url
    })

    // Handle 404s
    if (!products) {
        throw new Response(null, { status: 404 })
    }

    return json({ products, seo })
}

export default function AllProducts() {
    const { products } = useLoaderData()

    return (
        <>
            <HeaderWithTextSection h1="Wszystkie Produkty" description="Poznaj całą gamę produktów oferowanych przez nasz sklep. Znajdz wzór, który najbardziej będzie do Ciebie pasował." />
            <ProductGridSection collection={products} onlyProducts={true} />
        </>
    )
}