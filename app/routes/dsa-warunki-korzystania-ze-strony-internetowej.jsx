import { Link } from "@remix-run/react"
import styles from "~/styles/pages/legal.module.css"

import { json } from "@shopify/remix-oxygen"
import { seoPolicy } from "~/seo/seoPolicy"


export async function loader({ request }) {
    const seo = seoPolicy({
        title: 'Warunki Korzystania Ze Strony Internetowej (DSA)',
        description: 'Poznaj nasze Warunki Korzystania Ze Strony Internetowej (DSA) - Jazba.',
        url: request.url
    })
    return json({ seo })
}

export default function PolitykaZwrotów() {
    return (
        <div className={`${styles.legal} smallContainer`}>
            <h1>Warunki Korzystania Ze Strony Internetowej (DSA)</h1>

            <div className={styles.contents}>
                <p>Spis treści:</p>
                <ol>
                    <li><Link to="#uslugodawca">Usługodawca</Link></li>
                    <li><Link to="#punkt-kontaktowy">Punkt Kontaktowy</Link></li>
                    <li><Link to="#jezyk-komunikacji">Język Komunikacji</Link></li>
                    <li><Link to="#rozpatrywanie-skarg-i-reklamacji">Rozpatrywanie Skarg i Reklamacji</Link></li>
                    <li><Link to="#warunki-techniczne">Warunki Techniczne</Link></li>
                    <li><Link to="#prywatnosc-i-dane-osobowe">Prywatność i Dane Osobowe</Link></li>
                    <li><Link to="#inne-regulaminy-i-polityki">Inne Regulaminy i Polityki</Link></li>
                </ol>
            </div>

            <div id="uslugodawca" className={styles.akapit}>
                <h2>1. Usługodawca</h2>
                <p>Sklep internetowy Jazba Fashion, dostępny pod adresem www.jazba.pl jest prowadzony przez:<br /><br />AGATA ROZENEK, przedsiębiorca prowadzący działalność gospodarczą pod firmą Agata Rozenek, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP 1132815981, nr REGON 522023534, ul. Graniczna 15A, 05-077 Warszawa</p>
            </div>

            <div id="punkt-kontaktowy" className={styles.akapit}>
                <h2>2. Punkt Kontaktowy</h2>
                <p>W celu kontaktowania się z nami możesz skorzystać z następujących form komunikacji elektronicznej:</p><br />
                <ul style={{ listStyleType: "disc" }}>
                    <li>poczta elektroniczna: biuro@jazba.pl</li>
                    <li>formularz kontaktowy dostępny pod adresem: <Link to="/">https://jazba.com.pl</Link></li>
                </ul>
            </div>

            <div id="jezyk-komunikacji" className={styles.akapit}>
                <h2>3. Język Komunikacji</h2>
                <p>Możesz skontaktować się z nami w języku polskim.</p>
            </div>

            <div id="rozpatrywanie-skarg-i-reklamacji" className={styles.akapit}>
                <h2>4. Rozpatrywanie Skarg i Reklamacji</h2>
                <p>Reklamacje i skargi dotyczące korzystania ze strony internetowej mogą być składane za pośrednictwem Punktu Kontaktowego, którego dane wskazane są na początku niniejszych warunków.<br /><br />Rozpatrujemy reklamacje i skargi w ciągu 14 dni od ich otrzymania.<br /><br />Szczegółowe procedury reklamacyjne określone zostały w pozostałych regulaminach. Odnośniki do regulaminów znajdują się na końcu tych warunków, w sekcji: "Inne regulaminy i polityki".</p>
            </div>

            <div id="warunki-techniczne" className={styles.akapit}>
                <h2>5. Warunki Techniczne</h2>
                <p>Dla prawidłowego korzystania ze strony internetowej konieczne jest spełnienie następujących warunków technicznych:</p><br />
                <ul style={{ listStyle: "disc" }}>
                    <li>aktywne konto e-mail</li>
                    <li>urządzenie z dostępem do Internetu,</li>
                    <li>przeglądarka internetowa obsługująca JavaScript i pliki cookies.</li>
                </ul>
            </div>

            <div id="prywatnosc-i-dane-osobowe" className={styles.akapit}>
                <h2>6. Prywatność i Dane Osobowe</h2>
                <p>Zasady przetwarzania danych osobowych i wykorzystywania plików cookies wskazane są w polityce prywatności dostępnej pod adresem: <Link to="/polityka-prywatnosci">https://jazba.pl/polityka-prywatnosci</Link></p>
            </div>

            <div id="inne-regulaminy-i-polityki" className={styles.akapit}>
                <h2>7. Inne Regulaminy i Polityki</h2>
                <p>Do korzystania z naszej strony internetowej i dostępnych w jej ramach usług zastosowanie mają również:</p><br />
                <ul style={{ listStyle: "disc" }}>
                    <li>Regulamin sklepu - <Link to="/regulamin">https://jazba.pl/regulamin</Link></li>
                    <li>Regulamin konta - <Link to="/regulamin-konta">https://jazba.pl/regulamin-konta</Link></li>
                    <li>Regulamin newslettera - <Link to="/regulamin-newsletter">https://jazba.pl/regulamin-newsletter</Link></li>
                </ul>
                <br /><p>Te Warunki stanowią suplement do wskazanych wyżej dokumentów.</p>
            </div>

            <br /><p>Niniejszy dokument został wygenerowany za pomocą Kreatora Legal Geek dnia 09.03.2024</p>

        </div >
    )
}

