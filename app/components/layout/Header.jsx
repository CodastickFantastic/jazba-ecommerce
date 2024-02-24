import { Await, NavLink, useLocation } from '@remix-run/react';
import { Suspense } from 'react';
import { Image } from "@shopify/hydrogen-react"

import styles from '~/styles/components/layout/header.module.css'
import logo from '~/../public/logo/jazba-logo-white.webp'

export function Header({ cart }) {
    const location = useLocation();

    return (
        <header
            className={styles.header}
            style={{
                backgroundColor: location.pathname === '/' ? 'transparent' : 'black',
                position: location.pathname === '/' ? 'absolute' : 'relative',
            }}>
            <div className={styles.container}>
                <MenuToggle />
                <NavLink prefetch="intent" to="/" className={styles.logoMobile}>
                    <Image
                        src={logo}
                        alt="Jazba logo białe"
                        width={100}
                        className={styles.logo}
                    />
                </NavLink>
                <CartToggle cart={cart} />
            </div>
        </header>
    );
}

function MenuToggle() {
    return (
        <a className={styles.toggleMenu} href="#menu-aside">
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
            <div className={styles.shoppingBagIcon}></div>
            <span className={styles.cartCounter}>{count}</span>
        </a>
    );
}