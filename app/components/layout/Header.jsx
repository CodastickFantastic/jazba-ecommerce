import { Await, NavLink } from '@remix-run/react';
import { Suspense } from 'react';
import { Image } from "@shopify/hydrogen-react"


import styles from '~/styles/components/layout/header.module.css'
import hamburgerMenu from '~/icons/white/menu.png'
import shoppingBag from '~/icons/white/shopping-bag.png'




export function Header({ header, isLoggedIn, cart }) {
    const { shop, menu } = header;
    return (
        <header className={styles.header}>
            <NavLink prefetch="intent" to="/">
                <Image
                    src="https://cdn.shopify.com/s/files/1/0728/3513/7804/files/jazba-logo-white.webp?v=1707578829"
                    alt="Jazba logo"
                    width={200}
                />
            </NavLink>
            <div className={styles.navIcons}>
                <CartToggle cart={cart} />
                <a className={styles.toggleMenu} href="#mobile-menu-aside">
                    <Image
                        src={hamburgerMenu}
                        alt='Ikona menu'
                        width={52}
                        height={52}
                    />
                </a>
            </div>
            {/* <HeaderMenu
                menu={menu}
                viewport="desktop"
                primaryDomainUrl={header.shop.primaryDomain.url}
            />
            <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} /> */}
        </header>
    );
}


function CartToggle({ cart }) {
    return (
        <Suspense fallback={<CartBadge count={0} />}>
            <Await resolve={cart}>
                {(cart) => {
                    if (!cart) return <CartBadge count={0} />;
                    return <CartBadge count={cart.totalQuantity || 0} />;
                }}
            </Await>
        </Suspense>
    );
}

function CartBadge({ count }) {
    return (
        <a href="#cart-aside">
            <Image
                src={shoppingBag}
                alt='Ikona koszyka'
                width={48}
                height={48}
            />
            {count}
        </a>
    );
}