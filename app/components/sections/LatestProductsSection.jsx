import { Link } from "@remix-run/react"
import { Image } from "@shopify/hydrogen-react"
import styles from "~/styles/components/sections/latestProducts.module.css"

import newIcon from "~/../public/icons/beige/new.png"
import koala from "~/../public/animals/cool-lala.webp"
import dodo from "~/../public/animals/dodo-mariachi.webp"
import fafa from "~/../public/animals/g-fafa.png"

export default function LatestProductsSection({ products }) {

    return (
        <section className={styles.latestProducts}>
            <h2>Nasze <span className="beige">Wzory</span></h2>
            <div className={styles.collections}>
                {products && products.map((product) => {
                    return (
                        <Link
                            className={styles.collectionTile}
                            to={`/wzory/${product.handle}`}
                            key={product.id}
                            aria-disabled
                        >
                            <Image src={product.image.url} alt={`${product.title} wizualizacja haftu`} width={180} />
                            <p className={styles.collectionTileTitle}>{product.title}</p>
                        </Link>
                    )
                })}
                <div className={styles.collectionTile}>
                    <p className={styles.badge}>Wkrótce</p>
                    <Image src={koala} alt="Haft Koali - Cool Lala" width={180} />
                    <p>Cool Lala</p>
                </div>
                <div className={styles.collectionTile}>
                    <p className={styles.badge}>Wkrótce</p>
                    <Image src={dodo} alt="Haft Dodo - Dodo Mariachi" width={180} />
                    <p>Dodo Mariachi</p>
                </div>
                <div className={styles.collectionTile}>
                    <p className={styles.badge}>Wkrótce</p>
                    <Image src={fafa} alt="Haft Żyrafy - G. Fafa" width={180} />
                    <p>G. Fafa</p>
                </div>
                <div className={`${styles.collectionTile} ${styles.new}`}>
                    <Image src={newIcon} alt="Ikona z napisem 'nowość'" width={180} />
                    <p>Wkrótce więcej wzorów</p>
                </div>
            </div>
        </section>
    )
}