import styles from "~/styles/components/layout/cartAside.module.css"

import closeIcon from "~/../public/icons/beige/close.png";


import { CartForm, Image, Money } from '@shopify/hydrogen';
import { Link } from '@remix-run/react';
import { useVariantUrl } from '~/lib/variants';



export default function CartAside({ cart }) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart?.discountCodes?.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div aria-modal className={`${styles.cartAside} overlay`} id='cart-aside' role='dialog'>
      <button
        className={styles.closeOutside}
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside className={styles.cart}>
        <header>
          <h3>Twój <span className="beige">Koszyk</span></h3>
          <CloseAside />
        </header>
        <main className={className}>
          <CartEmpty hidden={linesCount} />
          <CartDetails cart={cart} />
        </main>
      </aside>
    </div>
  )
}

function CartDetails({ layout, cart }) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className={styles.cartDetails}>
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <div className={styles.fullPriceLabel}>
            Wartość koszyka {cart?.cost?.subtotalAmount?.amount ? (
              <span className={styles.fullPrice}>
                <Money data={cart?.cost?.subtotalAmount} />
              </span>
            ) : (
              '-'
            )}</div>
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({ lines }) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines" className={styles.cartProducts}>
      <ul>
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} />
        ))}
      </ul>
    </div>
  );
}

function CartLineItem({ line }) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions).replace('/products/', '/produkt/');

  return (
    <li key={id} className={styles.product}>
      {image && (
        <Image
          alt={title}
          data={image}
          width={100}
          loading="lazy"
          className={styles.image}
        />
      )}

      <div className={styles.details}>
        <Link
          prefetch="intent"
          to={lineItemUrl}
          onClick={() => window.location.href = lineItemUrl}
          className={styles.title}
        >
          <p>
            <strong>{product.title}</strong>
          </p>
        </Link>
        <CartLineQuantity line={line} />
        <div className={styles.row}>
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.name} className={styles.option}>{option.name}: <strong>{option.value}</strong></li>
            ))}
          </ul>
          <CartLinePrice line={line} as="span" />
        </div>
      </div>
    </li >
  );
}

function CartLinePrice({ line, priceType = 'regular', ...passthroughProps }) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div className={styles.price}>
      <Money {...passthroughProps} data={moneyV2} />
    </div>
  );
}

function CartLineQuantity({ line }) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className={styles.quantitySection}>
      <div className={styles.buttons}>
        <CartLineUpdateButton lines={[{ id: lineId, quantity: prevQuantity }]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            name="decrease-quantity"
            value={prevQuantity}
          >
            <span>&#8722; </span>
          </button>
        </CartLineUpdateButton>
        <CartLineRemoveButton lineIds={[lineId]} />
        <CartLineUpdateButton lines={[{ id: lineId, quantity: nextQuantity }]}>
          <button
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
          >
            <span>&#43;</span>
          </button>
        </CartLineUpdateButton>
      </div>
      <p className={styles.quantity}>Ilośc: {quantity}</p>
    </div>
  );
}

function CartLineUpdateButton({ children, lines }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{ lines }}
    >
      {children}
    </CartForm>
  );
}

function CartLineRemoveButton({ lineIds }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{ lineIds }}
    >
      <button type="submit" className={styles.delete}>Usuń</button>
    </CartForm>
  );
}

export function CartSummary({ children = null }) {
  return (
    <div aria-labelledby="cart-summary" className={styles.cartSummary}>
      <h4>Podsumowanie Płatności</h4>
      {children}
    </div>
  );
}

function CartDiscounts({ discountCodes }) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({ code }) => code) || [];

  return (
    <div className={styles.discountSection}>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div className={styles.activeDisounts}>
          <dt>Aktywne Rabaty</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Usuń kody</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div className={styles.addDiscount}>
          <input type="text" name="discountCode" placeholder="Posiadasz kod rabatowy?" />
          <button type="submit">&#43;</button>
        </div>
      </UpdateDiscountForm>
      {discountCodes?.filter((discount) => !discount.applicable).map((discount) => (
        <p className={styles.warning}>Powyższy kod jest niepoprawny</p>
      ))}
    </div>
  );
}

function UpdateDiscountForm({ discountCodes, children }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl) return null;

  return (
    <a href={checkoutUrl} target="_self" className={styles.checkoutBtn}>
      <button>Zamawiam!</button>
    </a>
  );
}

export function CartEmpty({ hidden = false }) {
  return (
    <div hidden={hidden} className={`${!hidden && styles.cartEmpty}`}>
      <p>
        Nie masz jeszcze produktów w koszyku<br />
        Dodaj wpierw produkt do koszyka
      </p>
      <br />
      {/* <Link
        to="/collections"
        onClick={() => {
          if (layout === 'aside') {
            window.location.href = '/collections';
          }
        }}
      >
        Continue shopping →
      </Link> */}
    </div>
  );
}

function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a className={styles.close} href="#" onChange={() => history.go(-1)}>
      <Image src={closeIcon} alt="Zamknij menu" width={40} height={40} />
    </a>
  );
}














