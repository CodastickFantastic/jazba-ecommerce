import { Link } from "@remix-run/react"
import { Image } from "@shopify/hydrogen"
import styles from "~/styles/pages/blog.module.css"

import testImg from "~/../public/blog/test.jpg"


export default function Blog() {
    return (
        <div className={`${styles.blog} smallContainer`}>
            <h1>Jazba <span className="beige">Blog</span></h1>
            <section className={styles.articles}>
                <Article
                    title="Poznaj marke Jazba - Kilka slow o nas"
                    description="Miło nam że do nas wpadłeś. Jeśli jeszcze nas nie znasz to niniejszy artykuł przedstawi Ci po krótce naszą markę. Dowiesz się w nim co oznacza słowo Jazba oraz poznasz bliżej naszą markę."
                    img={testImg}
                    imgAlt="Kuba trzymający kufe ca cycki"
                    url="/blog/poznaj-marke-jazba-kilka-slow-o-nas"
                    side="left"
                />
                <Article
                    title="Poznaj marke Jazba - Kilka slow o nas"
                    description="Miło nam że do nas wpadłeś. Jeśli jeszcze nas nie znasz to niniejszy artykuł przedstawi Ci po krótce naszą markę. Dowiesz się w nim co oznacza słowo Jazba oraz poznasz bliżej naszą markę."
                    img={testImg}
                    imgAlt="Kuba trzymający kufe ca cycki"
                    url="/blog/poznaj-marke-jazba-kilka-slow-o-nas"
                    side="right"
                />
                <Article
                    title="Poznaj marke Jazba - Kilka slow o nas"
                    description="Miło nam że do nas wpadłeś. Jeśli jeszcze nas nie znasz to niniejszy artykuł przedstawi Ci po krótce naszą markę. Dowiesz się w nim co oznacza słowo Jazba oraz poznasz bliżej naszą markę."
                    img={testImg}
                    imgAlt="Kuba trzymający kufe ca cycki"
                    url="/blog/poznaj-marke-jazba-kilka-slow-o-nas"
                    side="left"
                />
                <Article
                    title="Poznaj marke Jazba - Kilka slow o nas"
                    description="Miło nam że do nas wpadłeś. Jeśli jeszcze nas nie znasz to niniejszy artykuł przedstawi Ci po krótce naszą markę. Dowiesz się w nim co oznacza słowo Jazba oraz poznasz bliżej naszą markę."
                    img={testImg}
                    imgAlt="Kuba trzymający kufe ca cycki"
                    url="/blog/poznaj-marke-jazba-kilka-slow-o-nas"
                    side="right"
                />
            </section>
        </div>
    )
}

export function Article({ title, description, img, imgAlt, url, side }) {
    return (
        <article className={`${styles.blogArticle} ${styles[side]}`}>
            <div className={styles.image}>
                <Image src={img} alt={imgAlt} width={500} height={600} />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={url}>Czytaj dalej →</Link>
            </div>
        </article>
    )
}