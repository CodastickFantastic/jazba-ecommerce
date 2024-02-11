import { Await } from '@remix-run/react';
import { Suspense } from 'react';
import { Aside } from '~/components/Aside';
import { Footer } from '~/components/Footer';
import { CartMain } from '~/components/Cart';



import { Header } from "~/components/layout/Header";
import { MenuAside } from './MenuAside';



/**
 * @param {LayoutProps}
 */
export function Layout({ cart, children = null, footer, header, isLoggedIn }) {
  return (
    <>
      <CartAside cart={cart} />
      <MenuAside />
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      <main>{children}</main>
      <Suspense>
        <Await resolve={footer}>
          {(footer) => <Footer menu={footer?.menu} shop={header?.shop} />}
        </Await>
      </Suspense>
    </>
  );
}

/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({ cart }) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}




