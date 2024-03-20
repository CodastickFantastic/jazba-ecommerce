import { Image } from "@shopify/hydrogen"
import styles from "~/styles/components/sections/headerWithImg.module.css"

export default function HeaderWithImgSection({ h1, description, img, collection = true }) {
    const titleSplit = h1.split(" ")
    const titleFirst = titleSplit[0]
    const titleSecond = titleSplit[1]
    const titleRest = titleSplit.slice(2).join(" ")

    return (
        <section className={`${styles.HeaderWithImg} smallContainer`}>
            <div className={styles.left}>
                <h1>{titleFirst} <span className="beige">{titleSecond}</span> {titleRest} {collection && "- Kolekcja"}</h1>
                <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className={styles.right}>
                <Image src={img.url} alt={h1 + " - Haft"} width={200} />
            </div>
        </section>
    )
}