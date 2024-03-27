import styles from '~/styles/components/blogComponents.module.css'

export default function BlogTextSection({
    id,
    title,
    description
}) {
    return (
        <section id={id} className={`${styles.blogSection} ${styles.blogCenteredSection}`}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </section>
    )
}