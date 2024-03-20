import styles from '~/styles/components/sections/productGridSection.module.css'
import ProductCard from '~/components/microComponents/ProductCard'
import { Pagination } from '@shopify/hydrogen'

export default function ProductGridSection({ collection, onlyProducts = false }) {
    return (
        <section className={`${styles.ProductGrid} smallContainer`}>
            <Pagination connection={onlyProducts ? collection : collection.products}>
                {({ nodes, NextLink, PreviousLink, isLoading }) => (
                    <>
                        <div className={styles.buttonHolder}>
                            <PreviousLink className={styles.button}>
                                {isLoading ? 'Loading...' : <span>↑ Pokaż poprzednie produkty</span>}
                            </PreviousLink>
                        </div>
                        <div className={styles.products}>
                            {
                                nodes.map((product) => {
                                    return <ProductCard key={product.id} product={product} />
                                })
                            }
                        </div>
                        <div className={styles.buttonHolder}>
                            <NextLink className={styles.button}>
                                {isLoading ? 'Loading...' : <span>Pokaż więcej produktów</span>}
                            </NextLink>
                        </div>
                    </>
                )}
            </Pagination>
        </section>
    )
}