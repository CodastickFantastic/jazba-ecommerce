import { Image } from "@shopify/hydrogen-react"
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

import styles from "~/styles/components/layout/footer.module.css"
import logo from "~/../public/logo/jazba-logo-white.webp"
import ig from "~/../public/icons/white/ig.png"
import fb from "~/../public/icons/white/fb.png"
import tt from "~/../public/icons/white/tt.png"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        <div className={styles.linkSection}>
          <p className={styles.linkSectionTitle}>Informacje</p>
          <Link to="/platnosci">Płatności</Link>
          <Link to="/dostawa">Dostawa</Link>
          <Link to="/reklamacje">Reklamacje</Link>
          <Link to="/zwroty">Zwroty</Link>
        </div>
        <div className={styles.linkSection}>
          <p className={styles.linkSectionTitle}>Ważne Linki</p>
          <Link to="/dsa-warunki-korzystania-ze-strony-internetowej">Warunki DSA</Link>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link to="/regulamin">Regulamin</Link>
          <Link to="/regulamin-konta">Regulamin Konta</Link>
          <Link to="/regulamin-newsletter">Regulamin Newsletter</Link>
        </div>
        <div className={styles.linkSection}>
          <p className={styles.linkSectionTitle}>Kontakt</p>
          <Link to="mailto:biuro@jazba.pl">biuro@jazba.pl</Link>
        </div>
      </section>
      <section className={styles.bottom}>
        <Image src={logo} alt="Logo Jazba białe" width={110} />
        <p className={styles.disclamer}>WSZYSTKIE PRAWA ZASTRZEŻONE | © 2023 JAZBA</p>
        <div className={styles.socials}>
          <Link to="/"><Image src={fb} alt="Ikona facebook" width={32} height={32} /></Link>
          <Link to="/"><Image src={ig} alt="Ikona instagram" width={32} height={32} /></Link>
          <Link to="/"><Image src={tt} alt="Ikona tiktok" width={32} height={32} /></Link>
        </div>
      </section>
    </footer>
  );
}


