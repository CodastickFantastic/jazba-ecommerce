import { useLoaderData } from "@remix-run/react"
import { json } from "@shopify/remix-oxygen"

export function meta() {
    return [
        { title: "Wszystkie Wzory - Jazba" },
        { descritpion: "Poznaj całą kolekcję wzorów Jazba i wybierz swojego kompana" },
        { keywords: "jazba, e-commerce, shopify, hydrogen" },
    ]
}

export async function loader({ params, context }) {
    const { handle } = params
    const { collection } = await context.storefront.query(COLLECTION_QUERY, { variables: { handle } });

    //Handle 404s
    if (!collection) {
        throw new Response(null, { status: 404 })
    }
    return json({ collection })
}

export default function Wzory() {
    const { collection } = useLoaderData()

    console.log(collection)

    return (
        <h1>WITAM W MOJEJ KUCHNIE HEHEHEHEH</h1>
    )
}

const COLLECTION_QUERY = `#graphql
    query Collection($handle: String!){
        collection(handle: $handle){
            title
            description
            handle
        }
    }
`