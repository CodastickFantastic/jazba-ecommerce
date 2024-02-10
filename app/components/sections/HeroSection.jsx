import styles from "~/styles/components/sections/heroSection.module.css"
import { Image } from "@shopify/hydrogen-react"

export default function HeroSection() {
    return (
        <section className={styles.HeroSection}>
            <Image
                src="https://cdn.shopify.com/s/files/1/0728/3513/7804/files/index-hero.webp"
                width={1920}
            />
        </section>
    )
}