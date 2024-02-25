import { useLoaderData } from "@remix-run/react"

import HeroSection from "~/components/sections/HeroSection"
import CountToPremiere from "~/components/widgets/CountToPremiere"
import LatestProductsSection from "~/components/sections/LatestProductsSection"

import styles from "~/styles/pages/index.module.css"

export function meta() {
    return [
        { title: "Jazba - Wyjątkowe hafty" },
        { descritpion: "Wyróżnij się z tłumu dzięki wyjątkowym haftom." },
        { keywords: "jazba, e-commerce, shopify, hydrogen" },
    ]
}

export async function loader({ context }) {
    return await context.storefront.query(COLLECTIONS_QUERY)
}

export default function Index() {
    const collections = useLoaderData()
    // Convert object to array of objects
    const collectionsArray = Object.values(collections)

    return (
        <>
            <HeroSection />
            <div className={`${styles.row} smoothScroll`}>
                <section className={styles.premiere}>
                    <CountToPremiere />
                </section>
                <div className={styles.latest}>
                    {collections && <LatestProductsSection products={collectionsArray} />}
                </div>
            </div>
        </>
    )
}

const COLLECTIONS_QUERY = `#graphql
query CollectionsToShowOnHome {
	al_rancher: collection(handle: "al-rancher") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
  
	dali_gator: collection(handle: "dali-gator") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
  
	dali_gator_2: collection(handle: "ali-gator-2") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
  
	dali_gator_3: collection(handle: "ali-gator-3") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
  
	dali_gator_4: collection(handle: "dali-gator-4") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
  
	dali_gator_5: collection(handle: "dali-gator-5") {
    id
		title
    handle
    image{
    	altText
      url
    }
  }
}`