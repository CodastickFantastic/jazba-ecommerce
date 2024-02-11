import { Await, NavLink } from '@remix-run/react';
import { Suspense } from 'react';
import { Image } from "@shopify/hydrogen-react"


import styles from '~/styles/components/layout/header.module.css'




export function Header({ cart }) {
    return (
        <header className={styles.header}>
            <NavLink prefetch="intent" to="/" className={styles.logoDesktop}>
                <Image
                    src="https://cdn.shopify.com/s/files/1/0728/3513/7804/files/jazba-logo-white.webp?v=1707578829"
                    alt="Jazba logo white"
                    width={100}
                />
            </NavLink>
            <div className={styles.navIcons}>
                <MenuToggle />
                <NavLink prefetch="intent" to="/" className={styles.logoMobile}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0728/3513/7804/files/jazba-logo-black.webp?v=1707590751"
                        alt="Jazba logo black"
                        width={100}
                    />
                </NavLink>
                <CartToggle cart={cart} />
            </div>
        </header>
    );
}

function MenuToggle() {
    return (
        <a className={styles.toggleMenu} href="#mobile-menu-aside">
            <div className={styles.hamburegrMenuIcon} />
        </a>
    )
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
        <a href="#cart-aside" className={styles.cart}>
            <div className={styles.shoppingBagIcon} />
            <span className={styles.cartCounter}>{count}</span>
        </a>
    );
}