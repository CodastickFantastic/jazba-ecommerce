import { Link } from "@remix-run/react"
import { Image } from "@shopify/hydrogen"
import styles from "~/styles/components/microComponents/productCard.module.css"

export default function ProductCard({ product }) {
    return (
        <Link to={`/produkty/${product.handle}`} className={styles.ProductCard}>
            <Image src={product.variants.nodes[0].image.url} alt={product.title} width={200} />
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>{product.variants.nodes[0].price.amount}{product.variants.nodes[0].price.currencyCode}</p>
        </Link>
    )
}