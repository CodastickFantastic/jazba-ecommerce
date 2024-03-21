import styles from "~/styles/components/sections/headerWithText.module.css"

export default function HeaderWithTextSection({ h1, description }) {
    const titleSplit = h1.split(" ")
    const titleFirst = titleSplit[0]
    const titleSecond = titleSplit[1]
    const titleRest = titleSplit.slice(2).join(" ")

    return (
        <section className={`${styles.HeaderWithText} smallContainer`}>
            <h1>{titleFirst} <span className="beige">{titleSecond}</span> {titleRest}</h1>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        </section>
    )
}