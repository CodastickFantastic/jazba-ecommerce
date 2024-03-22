import { Image } from "@shopify/hydrogen-react"
import { json } from "@shopify/remix-oxygen"
import { useLoaderData, Link } from "@remix-run/react"

import HeaderWithTextSection from "~/components/sections/HeaderWithTextSection";
import { HOME_ANIMALS_COLLECTION } from "~/graphql/storefrontClient/HomeAnimalsCollection";

import styles from "~/styles/pages/wzory.module.css"

import koala from "~/../public/animals/cool-lala.webp"
import dodo from "~/../public/animals/dodo-mariachi.webp"
import fafa from "~/../public/animals/g-fafa.png"


export async function loader({ context }) {
    const collections = await context.storefront.query(HOME_ANIMALS_COLLECTION)
    // const seo = seoHome

    return json({ collections })
}


export default function WzoryPage() {
    const { collections } = useLoaderData()
    const collectionsArray = Object.values(collections)

    return (
        <>
            <HeaderWithTextSection h1="Wzory" description="Poznaj wszystkie oferowane przez nas wzory haftów." />
            <div className={`${styles.wzory} smallContainer`}>
                {collectionsArray && collectionsArray.map((wzor) => {
                    console.log(wzor)
                    return <WzorLink key={wzor.id} wzor={wzor} />
                })}
                <Wzor img={koala} imgAlt="Haft Koali - Cool Lala" title="Cool Lala" />
                <Wzor img={dodo} imgAlt="Haft Dodo - Dodo Mariachi" title="Dodo Mariachi" />
                <Wzor img={fafa} imgAlt="Haft Żyrafy - Fa Fa" title="G. FaFa" />
            </div >
        </>
    )
}

function Wzor({ title, img, imgAlt }) {
    return (
        <div className={styles.wzor}>
            <span className={styles.badge}>Wkrótce</span>
            <Image src={img} alt={imgAlt} width={180} />
            <p>{title}</p>
        </div>
    )
}

function WzorLink({ wzor }) {
    return (
        <Link
            className={styles.wzor}
            to={`/wzory/${wzor.handle}`}
            key={wzor.id}
            aria-disabled
        >
            <Image src={wzor.image.url} alt={`${wzor.title} wizualizacja haftu`} width={180} />
            <p>{wzor.title}</p>
        </Link>
    )
}