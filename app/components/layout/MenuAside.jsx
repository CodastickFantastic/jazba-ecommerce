import { NavLink } from "@remix-run/react";
import { Image } from "@shopify/hydrogen-react"
import styles from "~/styles/components/layout/menuAside.module.css";

import closeIcon from "~/../public/icons/beige/close.png";
import poloIcon from "~/../public/icons/black/koszulka-polo-ikona.png";
import deliveryIcon from "~/../public/icons/beige/dostawa-ikona.png";
import blogIcon from "~/../public/icons/beige/gazeta-ikona.png";
import helpIcon from "~/../public/icons/beige/pomoc-ikona.png";
import galleryIcon from "~/../public/icons/beige/galeria-ikona.png";
import userIcon from "~/../public/icons/beige/konto-ikona.png";
import koszulkaIcon from "~/../public/icons/black/koszulka-ikona.png";
import hoodieIcon from "~/../public/icons/black/hoodie-ikona.png";
import czapkaIcon from "~/../public/icons/black/czapka-ikona.png";
import skarpetkiIcon from "~/../public/icons/black/skarpetki-ikona.png";
import kuponIcon from "~/../public/icons/black/kupon-ikona.png";
import zwierzetaIcon from "~/../public/icons/black/zwierzeta-ikona.png";
import ubraniaIcon from "~/../public/icons/black/ubrania-ikona.png";

import aligator from "~/../public/decorations/aligator-half.webp";
import { useEffect, useState } from "react";

export function MenuAside({ isLoggedIn }) {
    const [userStatus, setUserStatus] = useState(false);

    function checkIfUserIsLoggedIn() {
        isLoggedIn
            .then((answer) => {
                setUserStatus(answer)
            })
    }

    useEffect(() => {
        checkIfUserIsLoggedIn()
    }, [])


    return (
        <div aria-modal className={`${styles.menuAside} overlay`} id="menu-aside" role="dialog">
            <button
                className={styles.closeOutside}
                onClick={() => {
                    history.go(-1);
                    window.location.hash = '';
                }}
            />
            <aside className={styles.menu}>
                <header>
                    <h3>Co <span className="beige">Cię</span> do nas dziś <span className="beige">sprowadza</span>?</h3>
                    <CloseAside />
                </header>
                <main>
                    <nav className={styles.categories}>
                        <DummyTile image={koszulkaIcon} title="T-shirt" alt="Ikona koszulki" />
                        <CategoryTile image={poloIcon} title="Polo" url="/kategorie/koszulki-polo" alt="Ikona koszulki polo" />
                        <CategoryTile image={hoodieIcon} title="Bluzy" url="/kategorie/bluzy" alt="Ikona bluzy" />
                        <DummyTile image={czapkaIcon} title="Czapki" alt="Ikona czapki" />
                        <DummyTile image={skarpetkiIcon} title="Skarpetki" alt="Ikona skarpetek" />
                        <DummyTile image={kuponIcon} title="Bony" alt="Ikona bonu podarunkowego" />
                    </nav>
                    <nav className={styles.allProdSection}>
                        <BigCategoryTile image={ubraniaIcon} title="Ubrania" url="/produkty" alt="Ikona ubrań" />
                        <BigCategoryTile image={zwierzetaIcon} title="Wzory" url="/wzory" alt="Ikona wzorów zwierzat" />
                    </nav>
                    <div className={styles.baner}>
                        <Image src="https://cdn.shopify.com/s/files/1/0728/3513/7804/files/index-hero.webp?v=1707575300" alt="Jazba logo white" width={320} />
                    </div>
                    <nav className={styles.links}>
                        <LinkPage image={blogIcon} title="Blog" url="/blog" />
                        <LinkPage image={helpIcon} title="Pomoc" url="/pomoc" />
                        {/* <LinkPage image={deliveryIcon} title="Dostawa" url="/dostawa" /> */}
                        {/* <LinkPage image={galleryIcon} title="Lookbook" url="/lookbook" /> */}
                        {userStatus ?
                            <LinkPage image={userIcon} title="Moje Konto" url="/account" />
                            :
                            <LinkPage image={userIcon} title="Zaloguj się" url="/account" />
                        }

                    </nav>
                </main>
                <footer>
                    <Image src={aligator} alt="Wizualizacja Haftu Aligator - Dali Gator" width={112} />
                </footer>
            </aside>
        </div >
    );
}

// Components
function CloseAside() {
    return (
        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
        <a className={styles.close} href="#" onChange={() => history.go(-1)}>
            <Image src={closeIcon} alt="Zamknij menu" width={40} height={40} />
        </a>
    );
}

function CategoryTile({ image, title, url, alt }) {
    return (
        <NavLink className={styles.categoryTile} to={url} prefetch="intent" onClick={() => forceCloseAside()}>
            <div className={styles.imageHolder}>
                <Image src={image} alt={alt} width={46} height={46} />
            </div>
            <p className={styles.categoryTitle}>{title}</p>
        </NavLink>
    )
}

function BigCategoryTile({ url, title, image, alt }) {
    return (
        <NavLink className={styles.allProdsButton} to={url} prefetch="intent" onClick={() => forceCloseAside()}>
            <Image src={image} alt={alt} width={46} height={46}/> {title}
        </NavLink>
    )
}

function DummyTile({ image, title, alt }) {
    return (
        <div className={`${styles.categoryTile} ${styles.dummy}`}>
            <div className={styles.imageHolder}>
                <Image src={image} alt={alt} width={46} height={46} />
            </div>
            <p className={styles.categoryTitle}>{title}</p>
            <p className={styles.badge}>Wkrótce</p>
        </div>
    )
}


function LinkPage({ image, title, url }) {
    return (
        <NavLink className={styles.link} to={url} prefetch="intent" onClick={() => forceCloseAside()}>
            <Image className={styles.icon} src={image} alt={`ikona ${title}`} width={32} height={32} />
            <p className={styles.linkTitle}>{title}</p>
        </NavLink>
    )
}

// Helpers Functions
function forceCloseAside(event) {
    event.preventDefault();
    window.location.href = event.currentTarget.href;
}