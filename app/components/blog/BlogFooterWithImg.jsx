import { Image } from "@shopify/hydrogen"
import styles from '~/styles/components/blogComponents.module.css'

export default function BlogFooterWithImg({
    id,
    title,
    description,
    img,
    imgAlt
}) {
    return (
        <footer id={id} className={`${styles.blogSection} ${styles.blogFooterWithImg}`}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <Image src={img} alt={imgAlt} width={1200} />
        </footer>
    )
}
