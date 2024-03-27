import { Image } from '@shopify/hydrogen'
import styles from '~/styles/components/blogComponents.module.css'

export default function BlogColWithImgRight({
    id,
    title,
    description,
    img,
    imgAlt,
    leftColWidth,
    righColWidth,
}) {
    return (
        <section id={id} className={`${styles.blogSection} ${styles.blogColWithImgRight}`}>
            <div className={`${styles["col" + leftColWidth]}`}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className={styles["col" + righColWidth]}>
                <Image src={img} alt={imgAlt} width={1200} />
            </div>
        </section>
    )
}