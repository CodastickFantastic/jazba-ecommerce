import { Link } from "@remix-run/react"
import styles from '~/styles/components/blogComponents.module.css'

export default function BlogContents(items) {

    return (
        <section className={`${styles.blogSection} ${styles.blogContents}`}>
            <h2>Spis Treści</h2>
            <ol>
                {items.items.map((item, index) => (
                    <li key={index}><Link to={item.link}>{item.title}</Link></li>
                ))}
            </ol>
        </section>
    )
}