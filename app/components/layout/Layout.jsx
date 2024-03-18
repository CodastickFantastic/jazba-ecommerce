import { Await } from '@remix-run/react';
import { Suspense } from 'react';
import { Header } from "~/components/layout/Header";
import { MenuAside } from '~/components/layout/MenuAside';
import CartAside from '~/components/layout/CartAside';
import { Footer } from "~/components/layout/Footer"

export function Layout({ cart, children = null, isLoggedIn }) {

  return (
    <>
      <ShopCart cart={cart} />
      <MenuAside isLoggedIn={isLoggedIn} />
      <Header cart={cart} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function ShopCart({ cart, isLoggedIn }) {
  return (
    <Suspense>
      <Await resolve={cart}>
        {(cart) => {
          return <CartAside cart={cart} isLoggedIn={isLoggedIn} />;
        }}
      </Await>
    </Suspense>
  )
}