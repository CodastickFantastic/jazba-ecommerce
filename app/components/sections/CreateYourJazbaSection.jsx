import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from '~/styles/components/sections/createYourJazba.module.css'

export default function CreateYourJazbaSection() {
    const formRef = useRef();
    const [formStatus, setFormStatus] = useState("idle");

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus("submitting")

        emailjs
            .sendForm('service_a141akw', 'template_rv9gokt', formRef.current, { publicKey: 'UBVqqN4ugrmtnDsTT', })
            .then(
                () => {
                    setFormStatus("submited")
                    console.log("Succes")
                },
                (error) => {
                    setFormStatus("idle")
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div className={`${styles.createYourJazbaSection} smallContainer`}>
            <div className={styles.content}>
                <h2>Nie widzisz wzoru dla siebie?</h2>
                <p className={styles.underHeader}>Wyślij nam informacje na temat Jazby, która by do Ciebie pasowała.<br /><br />Stwórzmy razem coś niesamowitego!</p >
            </div >
            <form onSubmit={sendEmail} ref={formRef}>
                <textarea
                    disabled={formStatus === "submited"}
                    className={styles.input}
                    name="idea"
                    placeholder="Jeśli chcesz aktywnie uczestniczyć w procesie tworzenia wzoru, nie zapomnij zostawić namiarów na siebie!" />
                {formStatus !== "submited" && <button type='submit' disabled={formStatus === "submitting"} className={styles.button}>{formStatus === "submitting" ? "Wysyłanie..." : "CHCĘ TAKĄ JAZBE"}</button>}
                {formStatus === "submited" && <button type='submit' disabled className={`${styles.button} ${styles.success}`}>Wiadomość wysłana poprawnie</button>}

            </form>

        </div >
    )
}