import { useActionData, useLoaderData } from "@remix-run/react"
import { json } from "@shopify/remix-oxygen"
import { Link } from "@remix-run/react"

import HeroSection from "~/components/sections/HeroSection"
import CountToPremiere from "~/components/widgets/CountToPremiere"
import LatestProductsSection from "~/components/sections/LatestProductsSection"

import { HOME_ANIMALS_COLLECTION } from "../graphql/storefrontClient/HomeAnimalsCollection"
import { SUBSCRIBE_NEWSLETTER } from "../graphql/adminClient/SubscribeNewsletter"

import styles from "~/styles/pages/index.module.css"
import NewsletterSection from "~/components/sections/NewsletterSection"
import CreateYourJazbaSection from "~/components/sections/CreateYourJazbaSection"


export function meta() {
  return [
    { title: "Jazba - Wyjątkowe hafty" },
    { descritpion: "Wyróżnij się z tłumu dzięki wyjątkowym haftom." },
    { keywords: "jazba, e-commerce, shopify, hydrogen" },
  ]
}

export async function loader({ context }) {
  return await context.storefront.query(HOME_ANIMALS_COLLECTION)
}

export default function Index() {
  const collections = useLoaderData()
  // Convert object to array of objects
  const collectionsArray = Object.values(collections)
  const actionData = useActionData()

  return (
    <>
      <HeroSection />

      <Link to="/blog/co-oznacza-slowo-jazba" className={`${styles.toBlog} bigContainer`}>
        <h2>Poznaj <span className="beige">Projekt</span> Jazba</h2>
        <span className={styles.arrow} />
      </Link>

      <div className={`${styles.row} smoothScroll`}>
        <section className={styles.premiere}>
          <CountToPremiere />
        </section>
        <div className={styles.latest}>
          {collections && <LatestProductsSection products={collectionsArray} />}
        </div>
      </div>
      <div style={{ marginTop: "36px" }}>
        <CreateYourJazbaSection />
      </div>
      <div style={{ marginTop: "60px" }}>
        <NewsletterSection error={actionData?.error} success={actionData?.success} />
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


  const { data, errors } = await context.adminClient.request(SUBSCRIBE_NEWSLETTER, {
    variables: {
      input: {
        email: email,
        emailMarketingConsent: {
          consentUpdatedAt: new Date(),
          marketingOptInLevel: "SINGLE_OPT_IN",
          marketingState: 'SUBSCRIBED'
        },
        note: "Konto utworzone przy zapisywaniu do Newslettera przechowujące tylko informacje o mailu subskrybenta oraz stanie subskrybcji"
      }
    }
  })

  if (data.customerCreate.userErrors[0]) {
    return json({ error: data.customerCreate.userErrors[0].message })
  }

  return json({ success: "Zapisano do newslettera" })
}
