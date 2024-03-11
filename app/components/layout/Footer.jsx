import { useRef, useState } from "react";
import { Image } from "@shopify/hydrogen-react"
import { Link, useLoaderData } from "@remix-run/react";
import emailjs from '@emailjs/browser';

import styles from "~/styles/components/layout/footer.module.css"
import logo from "~/../public/logo/jazba-logo-white.webp"
import ig from "~/../public/icons/white/ig.png"
import fb from "~/../public/icons/white/fb.png"
import tt from "~/../public/icons/white/tt.png"

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_a141akw', 'template_rv9gokt', form.current, { publicKey: 'UBVqqN4ugrmtnDsTT', })
      .then(
        () => {
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }

  return (
    <footer className={styles.footer}>
      <section id="newsletter" className={styles.newsletter}>
        <h2>Dołącz do <span className="beige">Jazba</span> Gang</h2>
        <p className={styles.paragraph}>Zapisz się do <span className="beige">Newslettera</span></p>
        <form ref={form} onSubmit={sendEmail} className={styles.newsletterForm}>
          <input type="email" placeholder="Wpisz swój email" name="email" />
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Wysyłanie..." : "Zapisz mnie"}</button>
        </form>
      </section>
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


