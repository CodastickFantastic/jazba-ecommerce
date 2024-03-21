import styles from "~/styles/components/sections/heroSection.module.css"
import { Image } from "@shopify/hydrogen-react"
import hero from "~/../public/dummy_data/hero.png"

export default function HeroSection() {
    return (
        <section className={styles.HeroSection}>
            <Image
                src={hero}
                width={1920}
                alt="Dummy Data"
            />
        </section>
    )
}