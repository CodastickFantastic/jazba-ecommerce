import { useLoaderData, useLocation, Link, useSearchParams, useNavigation } from "@remix-run/react"
import { Image, Money, ShopPayButton } from "@shopify/hydrogen-react"
import { CartForm } from "@shopify/hydrogen"
import { json } from "@shopify/remix-oxygen"
import { useRef, useState } from "react"

import styles from "~/styles/pages/product.module.css"
import closeImg from "~/../public/icons/beige/close.png"

export function meta({ data }) {
    return [
        { title: data.product.seo.title },
        { descritpion: data.product.seo.description },
        { keywords: data.product.tags.join(",") },
    ]
}

export async function loader({ params, context, request }) {
    const { handle } = params
    const searchParams = new URL(request.url).searchParams;
    const selectedOptions = []

    searchParams.forEach((value, name) => {
        selectedOptions.push({ name, value })
    })


    const { shop, product } = await context.storefront.query(PRODUCT_QUERY, {
        variables: {
            handle: handle,
            selectedOptions: selectedOptions
        }
    })

    if (!product?.id) {
        throw new Response(null, { status: 404 });
    }

    const selectedVariant = product.selectedVariant ?? product?.variants?.nodes[0]

    return json({
        product,
        selectedVariant,
        shop
    })
}

export default function ProduktPage() {
    const { shop, product, selectedVariant } = useLoaderData()
    const [showImg, setShowImg] = useState(false)
    const [moreDetials, setMoreDetails] = useState("description")

    const productDescriptionJSON = JSON.parse(product.metafield.value)
    function toggleImg(img) {
        window.scrollTo(0, 0)
        showImg ? setShowImg(false) : setShowImg(img)
    }

    return (
        <div className={`${styles.ProductPage} bigContainer`}>
            {showImg && <ImageFull src={showImg} close={toggleImg} />}

            <div className={styles.imageSlider}>
                <div className={styles.track}>
                    {product.images.edges.map(({ node }) => {
                        return (
                            <div className={styles.imageHolder} key={node.id}>
                                <Image src={node.url} alt={node.altText} width={600} onClick={() => toggleImg(node.url)} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.productInfo}>
                <h1>{product.title}</h1>
                <div className={styles.row}>
                    <ProductOptions options={product.options} selectedVariant={selectedVariant} />
                    <Money
                        data={selectedVariant.price}
                        className={styles.price}
                    />
                </div>
                <div className={styles.row}>
                    {!selectedVariant?.availableForSale && (
                        <div className={styles.warning}>
                            <p>Brak danego rozmiaru na magazynie.</p>
                            <p>Dostawa może być wydłużona czasowo.</p>
                            <Link to="/dostawa">Dowiedz się dlaczego<span className={styles.arrow} /></Link>
                        </div>
                    )}
                    <CartForm
                        route="/cart"
                        inputs={{
                            lines: [
                                {
                                    merchandiseId: selectedVariant.id,
                                }
                            ]
                        }}
                        action={CartForm.ACTIONS.LinesAdd}
                    >
                        {(fetcher) => (
                            <>
                                <button
                                    type="submit"
                                    onClick={() => {
                                        window.location.href = window.location.href + "#cart-aside"
                                    }}
                                    disabled={
                                        !selectedVariant.availableForSale ??
                                        fetcher.state !== "idle"
                                    }
                                    className={`${styles.addToCart}`}
                                >
                                    {selectedVariant?.availableForSale
                                        ? "Dodaj do koszyka"
                                        : "Niedostępne"}
                                </button>
                            </>
                        )}
                    </CartForm>
                </div>
                <a href="#wymiary" className={styles.showSizeTable}>
                    <div className={styles.icon} />
                    <p className={styles.label}>Tabela Wymiarów</p>
                </a>
                <p className={styles.shortDescription} dangerouslySetInnerHTML={{ __html: productDescriptionJSON.shortDescription }}></p>
                <h2>Dlaczego <span className="beige">Jazba</span>?</h2>
                <div className={styles.bulletPoints}>
                    <div className={styles.bullet}>
                        <div className={styles.icon} />
                        <p className={styles.label}>Polska marka</p>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon} />
                        <p className={styles.label}>Darmowa dostawa od 250 zł</p>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon} />
                        <p className={styles.label}>Zwrot do 14 dni</p>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon} />
                        <p className={styles.label}>Unikalne Wzory</p>
                    </div>
                </div>
                <div className={styles.showMoreDetails}>
                    <button
                        className={styles.longDescriptionBtn}
                        style={{ color: moreDetials === "description" ? "var(--color-beige)" : "black" }}
                        onClick={() => setMoreDetails("description")}>Opis</button>
                    <button
                        className={styles.aboutProductBtn}
                        style={{ color: moreDetials === "info" ? "var(--color-beige)" : "black" }}
                        onClick={() => setMoreDetails("info")}>Informacje</button>
                    <button
                        className={styles.sizesBtn}
                        style={{ color: moreDetials === "size" ? "var(--color-beige)" : "black" }}
                        onClick={() => setMoreDetails("size")}>Wymiary</button>
                </div>
                <div className={styles.fillWithData}>
                    <p className={styles.longDescription} dangerouslySetInnerHTML={{ __html: productDescriptionJSON.longDescription }} style={{ display: moreDetials === "description" ? "block" : "none" }} />
                    <div className={styles.aboutProduct} style={{ display: moreDetials === "info" ? "block" : "none" }}>
                        <p className="info"><span className={styles.label}>Kolor</span> {productDescriptionJSON.information.color}</p>
                        <p className="info"><span className={styles.label}>Materiał</span> {productDescriptionJSON.information.material}</p>
                        <p className="info"><span className={styles.label}>Temp. Prania</span> {productDescriptionJSON.information.temp}°C</p>
                        <p className="info"><span className={styles.label}>Wysokość Modela</span> {productDescriptionJSON.information.modelHeight} cm</p>
                        <p className="info"><span className={styles.label}>Rozmiar Modela</span> {productDescriptionJSON.information.modelSize}</p>
                    </div>
                    <div className={styles.sizeTable} style={{ display: moreDetials === "size" ? "block" : "none" }}>
                        <Image src={productDescriptionJSON.sizeTable.img} alt={`Tabela Wymiary - ${product.title}`} />
                        <table>
                            <thead>
                                <tr>
                                    <th>Tabela Rozmiarów</th>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>L</th>
                                    <th>XL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Szerokość w klatce</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.S.width}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.M.width}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.L.width}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.XL.width}</td>
                                </tr>
                                <tr>
                                    <td>Długość</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.S.height}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.M.height}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.L.height}</td>
                                    <td>{productDescriptionJSON.sizeTable.availableSize.XL.height}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ImageFull({ src, close }) {
    let windowWidth = window.innerWidth

    return (
        <div className={`${styles.imageFull} blockScroll`}>
            <div className={styles.dim} />
            <Image src={src} width={windowWidth} className={styles.image} />
            <Image src={closeImg} width={52} height={52} className={styles.close} onClick={close} />
        </div>
    )
}

function ProductOptions({ options, selectedVariant }) {
    const { pathname, search } = useLocation()
    const [currentSearchParams] = useSearchParams()
    const navigation = useNavigation()

    const paramsWithDefaults = (() => {
        const defaultParams = new URLSearchParams(currentSearchParams)

        if (!selectedVariant) {
            return defaultParams
        }

        for (const { name, value } of selectedVariant.selectedOptions) {
            if (!currentSearchParams.has(name)) {
                defaultParams.set(name, value)
            }
        }

        return defaultParams
    })();

    const searchParams = navigation.location
        ? new URLSearchParams(navigation.location.search)
        : paramsWithDefaults

    return (
        <div className={styles.optionsSection}>
            {options.map((option) => {
                if (!option.values.length) {
                    return
                }

                const currentOptionValue = searchParams.get(option.name)

                return (
                    <div key={option.name} className={styles.optionHolder}>
                        {/* <p>{option.name}</p> */}
                        <div className={styles.availableOptions}>
                            {option.values.map((value) => {
                                const linkParams = new URLSearchParams(search)
                                const isSelected = value === currentOptionValue
                                linkParams.set(option.name, value)

                                return (
                                    <Link
                                        key={value}
                                        to={`${pathname}?${linkParams.toString()}`}
                                        preventScrollReset
                                        replace
                                        className={styles.option}
                                        style={{
                                            background: isSelected ? "var(--color-beige)" : "transparent",
                                            color: isSelected ? "white" : "black",
                                            borderColor: isSelected ? "var(--color-beige)" : "black",
                                        }}
                                    >
                                        {value}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const PRODUCT_QUERY = `#graphql
    query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
        shop{
            primaryDomain{
                url
            }
        }
        product(handle: $handle){
            id
            tags
            title
            handle
            descriptionHtml
            metafield(key: "jsonProduct", namespace: "custom"){
                value
            }
            seo{
                title
                description
            }
            featuredImage{
                id
                url
                altText
            }
            images(first: 4){
                edges{
                    node{
                        id
                        url
                        altText
                    }
                }
            }
            options{
                name,
                values
            }
            selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
                id
                availableForSale
                selectedOptions {
                  name
                  value
                }
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                sku
                title
                unitPrice {
                  amount
                  currencyCode
                }
                product {
                  title
                  handle
                }
              }
              variants(first: 1) {
                nodes {
                  id
                  title
                  availableForSale
                  price {
                    currencyCode
                    amount
                  }
                  compareAtPrice {
                    currencyCode
                    amount
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
            }
        }
    }    
`