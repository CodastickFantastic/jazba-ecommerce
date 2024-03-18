import { useLoaderData, useLocation, Link, useSearchParams, useNavigation } from "@remix-run/react"
import { Image, Money } from "@shopify/hydrogen-react"
import { CartForm } from "@shopify/hydrogen"
import { json } from "@shopify/remix-oxygen"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

import styles from "~/styles/pages/product.module.css"
import closeImg from "~/../public/icons/beige/close.png"

import { PRODUCT_QUERY } from "~/graphql/storefrontClient/ProductQuery"
import seoProduct from "~/seo/seoProduct"

// export function meta({ data }) {
//     return [
//         { title: data.product.seo.title },
//         { descritpion: data.product.seo.description },
//         { keywords: data.product.tags.join(",") },
//     ]
// }

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

    const seo = seoProduct({ product, url: request.url, selectedVariant })

    return json({
        product,
        selectedVariant,
        shop,
        seo
    })
}

export default function ProduktPage() {
    const { shop, product, selectedVariant } = useLoaderData()
    const [showImg, setShowImg] = useState(false)
    const [moreDetials, setMoreDetails] = useState("description")
    const productDescriptionJSON = JSON.parse(product.metafield.value)
    const [showSnedEmail, setShowSendEmail] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    function toggleImg(img) {
        window.scrollTo(0, 0)
        showImg ? setShowImg(false) : setShowImg(img)
    }

    // console.log(productDescriptionJSON)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm('service_a141akw', 'template_r3lragd', formRef.current, { publicKey: 'UBVqqN4ugrmtnDsTT', })
            .then(
                () => {
                    setIsSubmitting("Wysłano");
                },
                (error) => {
                    setIsSubmitting(false);
                    console.log('FAILED...', error.text);
                },
            );
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
                    <ProductOptions options={product.options} />
                    <Money
                        data={product.priceRange.maxVariantPrice}
                        className={styles.price}
                    />
                </div>
                <div className={styles.row}>
                    {selectedVariant?.quantityAvailable < 3 && selectedVariant?.quantityAvailable > 0 && (
                        <div className={styles.warning}>
                            <p className={styles.warningHeader}>Uwaga! (Dostepne: {selectedVariant?.quantityAvailable} {selectedVariant?.quantityAvailable === 1 ? "sztuka" : "sztuki"})</p>
                            <p>Niski poziom danego rozmiaru na magazynie.</p>
                            <p>Zamówienie ilości większej niż dostepna w sprzedazy może wydłużyć czas potrzebny na dostawę.</p>
                            <Link to="/dostawa">Dowiedz się dlaczego<span className={styles.arrow} /></Link>
                        </div>
                    )}
                    {selectedVariant?.quantityAvailable <= 0 && (
                        <div className={styles.warning}>
                            <p className={styles.warningHeader}>Uwaga!</p>
                            <p>Brak towaru na magyznie!</p>
                            <p>Dalej możesz go zamówić ale dostawa może być wydłużona!</p>
                            <Link to="/dostawa">Dowiedz się dlaczego<span className={styles.arrow} /></Link>
                        </div>
                    )}
                    {selectedVariant ? (
                        <>
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
                                            className={`${styles.addToCart}`}
                                        >
                                            Dodaj do koszyka
                                        </button>
                                    </>
                                )}
                            </CartForm>
                            {selectedVariant.quantityAvailable <= 3 && (
                                <div className={styles.infoAboutAvailable}>
                                    {!showSnedEmail &&
                                        <button
                                            className={`${styles.informMeAboutAvailability} ${styles.empty}`}
                                            onClick={() => setShowSendEmail(true)}
                                        >Poinformuj mnie o dostępności</button>
                                    }
                                    {showSnedEmail && isSubmitting !== "Wysłano" &&
                                        <form ref={formRef} onSubmit={sendEmail}>
                                            <input type="invisible" name="product" defaultValue={"Produkt:" + product.title + " Rozmiar: " + selectedVariant.selectedOptions[0].value} style={{ display: "none" }} />
                                            <input type="email" placeholder="Twój email" name="email" />
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                            >{isSubmitting ? "Wysyłanie..." : "Wyślij"}
                                            </button>
                                        </form>
                                    }
                                    {
                                        isSubmitting === "Wysłano" &&
                                        <p className={styles.success}>Otrzymaliśmy twoją prośbę<br />Poinformujęmy Cię jak tylko produkt będzie dostępny</p>
                                    }
                                </div>
                            )}
                        </>

                    ) :
                        <p className={`${styles.chooseSize}`}>
                            Wybierz Rozmiar
                        </p>
                    }
                </div>
                <div className={styles.column}>
                    <Link to="#szczegóły" className={styles.showSizeTable} onClick={() => setMoreDetails("size")}>
                        <div className={`${styles.icon} ${styles.size}`} />
                        <p className={styles.label}>Tabela Wymiarów</p>
                    </Link>
                    <Link to={productDescriptionJSON.collectionURL} className={styles.showSizeTable} >
                        <div className={`${styles.icon} ${styles.collection}`} />
                        <p className={styles.label}>Pokaż całą kolekcję</p>
                    </Link>
                </div>
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
                <div id="szczegóły" className={styles.showMoreDetails}>
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
                        <Image src={productDescriptionJSON.sizeTable.img} alt={`Tabela Wymiary - ${product.title}`} width={300} />
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
        </div >
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

function ProductOptions({ options }) {
    const { pathname, search } = useLocation()
    const [currentSearchParams] = useSearchParams()
    const navigation = useNavigation()

    const searchParams = navigation.location
        ? new URLSearchParams(navigation.location.search)
        : currentSearchParams

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