import { useLoaderData } from "@remix-run/react"

import HeroSection from "~/components/sections/HeroSection"
import CountToPremiere from "~/components/widgets/CountToPremiere"
import LatestProductsSection from "~/components/sections/LatestProductsSection"

import styles from "~/styles/pages/index.module.css"

export function meta() {
    return [
        { title: "Jazba" },
        { descritpion: "Wyróżnij się z tłumu dzięki wyjątkowym haftom." },
        { keywords: "jazba, e-commerce, shopify, hydrogen" },
    ]
}

export async function loader({ context }) {
    return await context.storefront.query(COLLECTIONS_QUERY)
}

export default function Index() {
    const { collections } = useLoaderData()

    return (
        <>
            <HeroSection />
            <div className={`${styles.row} smoothScroll`}>
                <section className={styles.premiere}>
                    <CountToPremiere />
                </section>
                <div className={styles.latest}>
                    {collections && <LatestProductsSection products={collections.nodes} />}
                </div>
            </div>


        </>
    )
}

const COLLECTIONS_QUERY = `#graphql
    query LatestCollections {
        collections(first: 250) {
        nodes {
            id
            title
            handle
            image{
                altText
                width
                height
                url
            }
        }
    }
}`