import HeroSection from "~/components/sections/HeroSection"

import styles from "~/styles/pages/index.module.css"

export function meta() {
    return [
        { title: "Jazba" },
        { descritpion: "Wyróżnij się z tłumu dzięki wyjątkowym haftom." },
        { keywords: "jazba, e-commerce, shopify, hydrogen" },
    ]
}

export default function Index() {
    return (
        <>
            <HeroSection />
        </>
    )
} 