import styles from "~/styles/components/sections/newsletter.module.css"
import { Form, useNavigation } from "@remix-run/react";

export default function NewsletterSection({ error, success }) {
    const navigation = useNavigation();

    return (
        <section id="newsletter" className={styles.newsletter}>
            <h2>Dołącz do <span className="beige">Jazba</span> Gang</h2>
            <p className={styles.paragraph}>Zapisz się do <span className="beige">Newslettera</span></p>
            <Form className={styles.newsletterForm} method="post" action="?index">
                {error && <p className={styles.error}>Error: {error}</p>}
                {success && <p className={styles.success}>{success}</p>}
                <input type="email" placeholder="Wpisz swój email" name="email" required />
                <button type="submit" disabled={navigation.state !== "idle"}>{navigation.state !== "idle" ? "Wysyłanie..." : "Zapisz mnie"}</button>
            </Form>
        </section>
    )
}