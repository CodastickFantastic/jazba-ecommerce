import { Form } from '@remix-run/react'
import styles from '~/styles/components/sections/createYourJazba.module.css'

export default function CreateYourJazbaSection() {
    return (
        <div className={`${styles.createYourJazbaSection} smallContainer`}>
            <div className={styles.content}>
                <h2>Nie widzisz wzoru dla siebie?</h2>
                <p className={styles.underHeader}>Wyślij nam informacje na temat Jazby, która by do Ciebie pasowała.<br /><br />Stwórzmy razem coś niesamowitego!</p >
            </div >
            <Form>
                <textarea className={styles.input} placeholder="Jeśli chcesz aktywnie uczestniczyć w procesie tworzenia wzoru, nie zapomnij zostawić namiarów na siebie!" />
                <button className={styles.button}>CHCĘ TAKĄ JAZBE</button>
            </Form>

        </div >
    )
}