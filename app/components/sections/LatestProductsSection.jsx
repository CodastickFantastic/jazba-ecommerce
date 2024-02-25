import { Link } from "@remix-run/react"
import { Image } from "@shopify/hydrogen-react"
import styles from "~/styles/components/sections/latestProducts.module.css"

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
                        >
                            <Image src={product.image.url} alt={`${product.title} wizualizacja haftu`} width={180} />
                            <p className={styles.collectionTileTitle}>{product.title}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}