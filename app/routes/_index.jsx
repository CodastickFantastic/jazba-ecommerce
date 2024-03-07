import { useLoaderData } from "@remix-run/react"
import { json } from "@shopify/remix-oxygen"

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

export const action = async ({ request, context }) => {
  const formData = await request.formData()
  const email = formData.get('email')



  if (!email) {
    return { subscribeError: 'Please provide an email address.' }
  }

  if (email) {
    console.log("email", email)
    sendEmail(context, formData)
  }




  return json({ success: true })

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
    metafield(key: "likes", namespace: "custom") {
      value
    }
  }
}`