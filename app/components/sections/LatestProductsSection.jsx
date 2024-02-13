import { Link } from "@remix-run/react"
import { Image } from "@shopify/hydrogen-react"
import styles from "~/styles/components/sections/latestProducts.module.css"

export default function LatestProductsSection({ products }) {

    console.log(products)

    return (
        <section className={styles.latestProducts}>
            <h2>Ostatnio <span className="beige">Dodane</span></h2>
            <div className={styles.collections}>
                {products && products.map((product) => {
                    return (
                        <Link
                            className={styles.collectionTile}
                            to={`/wzory/${product.handle}`}
                            key={product.id}
                        >
                            <Image src={product.image.url} alt={product.image.altText} width={180} />
                            <p className={styles.collectionTileTitle}>{product.title}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}