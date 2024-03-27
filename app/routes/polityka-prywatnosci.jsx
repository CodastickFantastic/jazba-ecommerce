import { Link } from "@remix-run/react"
import styles from "~/styles/pages/legal.module.css"

import { json } from "@shopify/remix-oxygen"
import { seoPolicy } from "~/seo/seoPolicy"

export async function loader({ request }) {
    const seo = seoPolicy({
        title: 'Polityka Prywatności',
        description: 'Poznaj naszą Politykę Prywatności - Jazba',
        url: request.url
    })
    return json({ seo })
}

export default function PolitykaZwrotów() {
    return (
        <div className={`${styles.legal} smallContainer`}>
            <h1>Polityka Prywatności Sklepu Jazba</h1>

            <h2>Drogi Użytkowniku!</h2>
            <p>Dbamy o Twoją prywatność i chcemy, abyś w czasie korzystania z naszych usług czuł się komfortowo. Dlatego też poniżej prezentujemy Ci najważniejsze informacje o zasadach przetwarzania przez nas Twoich danych osobowych oraz plikach cookies, które są wykorzystywane przez nasz Sklep. Informacje te zostały przygotowane z uwzględnieniem RODO, czyli ogólnego rozporządzenia o ochronie danych.</p>

            <h2>Administrator Danych Osobowych</h2>
            <p>AGATA ROZENEK, przedsiębiorca prowadzący działalność gospodarczą pod firmą Agata Rozenek, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP 1132815981, nr REGON 522023534, ul. Graniczna 15A, 05-077 Warszawa.<br /> <br />Jeśli chcesz skontaktować się z nami w związku z przetwarzaniem przez nas Twoich danych osobowych, napisz do nas na adres e-mail: biuro@jazba.pl.</p>

            <h2>Twoje Uprawnienia</h2>
            <p>Przysługuje Ci prawo żądania:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>dostępu do Twoich danych osobowych, w tym uzyskania kopii Twoich danych (art. 15 RODO lub - jeśli ma to zastosowanie - art. 13 ust. 1 lit. f RODO),</li>
                <li>ich sprostowania (art. 16 RODO),</li>
                <li>usunięcia (art. 17 RODO),</li>
                <li>ograniczenia przetwarzania (art. 18 RODO),</li>
                <li>przeniesienia danych do innego administratora (art. 20 RODO).</li>
            </ul>
            <br />
            <p>A także prawo:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania Twoich danych:
                    <ul style={{ listStyleType: "disc" }}>
                        <li>z przyczyn związanych z Twoją szczególną sytuacją – wobec przetwarzania dotyczących Ciebie danych osobowych, opartego na art. 6 ust. 1 lit. f RODO (tj. na realizowanych przez nas prawnie uzasadnionych interesach), w tym profilowania (art. 21 ust. 1 RODO);</li>
                        <li>jeżeli dane osobowe są przetwarzane na potrzeby marketingu bezpośredniego, w tym profilowania, w zakresie, w jakim przetwarzanie jest związane z takim marketingiem bezpośrednim (art. 21 ust. 2 RODO).</li>
                    </ul>
                </li>
            </ul>
            <br /><p>Skontaktuj się z nami, jeśli chcesz skorzystać ze swoich praw. Sprzeciw w odniesieniu do wykorzystywania przez nas plików cookies (o których przeczytasz poniżej) możesz wyrazić zwłaszcza za pomocą odpowiednich ustawień przeglądarki.<br /><br />Jeśli uznasz, że Twoje dane są przetwarzane niezgodnie z prawem, możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.</p>

            <h2>DANE OSOBOWE I PRYWATNOŚĆ</h2>
            <p>Poniżej znajdziesz szczegółowe informacje na temat przetwarzania Twoich danych w zależności od podejmowanych przez Ciebie działań.</p>
            <br />
            <p><strong>1. Złożenie zamówienia w Sklepie - cz. 1</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>realizacja Twojego zamówienia</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>umowa sprzedaży (art. 6 ust. 1 lit. b RODO)</td>
                    <td>obowiązek prawny, związany z rachunkowością, zobowiązujący nas do przetwarzania Twoich danych osobowych (art. 6 ust. 1 lit. c RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>przez okres obowiązywania wyżej wymienionej umowy</td>
                    <td>do momentu wygaśnięcia ciążącego na nas obowiązku prawnego, związanego z rachunkowością</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas
                        (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziesz mieć możliwości złożenia zamówienia</td>
                </tr>
            </table>
            <br />
            <p><strong>2. Złożenie zamówienia w Sklepie - cz. 2</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>polepszenie jakości naszych usług dzięki opiniom wystawianym przez Użytkowników za pośrednictwem serwisu do badania satysfakcji</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nasz prawnie uzasadniony interes, polegający na przetwarzaniu Twoich danych w celu prowadzenia badań Twojej satysfakcji z naszych usług (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr>
                    <td colSpan={2}>jeśli nie wyrazisz swojej opinii - przez czas wynoszący 30 dni od dokonania przez Ciebie zakupu lub do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania; jeśli natomiast wyrazisz swoją opinię - do momentu jej usunięcia lub do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania*</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas
                        (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie uwzględnimy Twojej opinii dotyczącej naszych usług w pracach nad ich dalszym rozwojem</td>
                </tr>
            </table>
            <br />
            <p><strong>3. Założenie konta w Sklepie</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>realizacja umowy o świadczenie usługi prowadzenia konta w Sklepie</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr>
                    <td colSpan={2}>umowa o świadczenie usług (art. 6 ust. 1 lit. b RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr>
                    <td colSpan={2}>przez okres obowiązywania wyżej wymienionej umowy</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas
                        (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziesz mieć możliwości założenia konta i korzystania z jego funkcji, takich jak przeglądanie historii zamówień czy sprawdzenie statusu zamówienia</td>
                </tr>
            </table>
            <br />
            <p><strong>4. Nawiązanie z nami kontaktu (np. w celu zadania pytania)</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>obsługa Twoich zapytań lub zgłoszeń</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>umowa lub działania podejmowane na Twoje żądanie, zmierzające do jej zawarcia (art. 6 ust. 1 lit. b RODO) – w przypadku gdy Twoje zapytanie lub zgłoszenie dotyczy umowy, której jesteśmy lub możemy być stroną</td>
                    <td>nasz prawnie uzasadniony interes, polegający na przetwarzaniu Twoich danych w celu prowadzenia z Tobą komunikacji (art. 6 ust. 1 lit. f RODO) – jeżeli Twoje zapytanie lub zgłoszenie nie ma związku z umową</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>przez czas trwania wiążącej nas umowy lub – jeśli umowa nie zostanie zawarta - do upływu okresu dochodzenia roszczeń – zobacz ostatnią tabelę tej sekcji*</td>
                    <td>do upływu okresu dochodzenia roszczeń – zobacz ostatnią tabelę tej sekcji - lub do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania*</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas
                        (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziemy mieli możliwości udzielenia odpowiedzi na Twoje zapytanie lub zgłoszenie</td>
                </tr>
            </table>
            <p>* w zależności od tego, które ma zastosowanie w danym przypadku</p>
            <br />
            <p><strong>5. Ustawienia przeglądarki lub inne zbliżone działanie zezwalające na prowadzenie działań marketingowych</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>marketing bezpośredni, polegający na wyświetlaniu spersonalizowanych reklam (więcej na ten temat przeczytasz w sekcji „Profilowanie” i „Pliki cookies” Polityki prywatności)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nasz prawnie uzasadniony interes, polegający na przetwarzaniu danych w podanym wyżej celu (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr>
                    <td colSpan={2}>do momentu wygaśnięcia ważności lub usunięcia przez Ciebie plików cookies, wykorzystywanych do celów marketingowych*</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziesz otrzymywać sugestii produktów lub usług, którymi możesz być zainteresowany</td>
                </tr>
            </table>
            <p>* w zależności od tego, które ma zastosowanie w danym przypadku</p>
            <br />
            <p><strong>6. Ustawienia przeglądarki lub inne zbliżone działanie zezwalające na prowadzenie działań analitycznych</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>analiza sposobu korzystania i poruszania się przez Ciebie po stronie internetowej Sklepu, celem polepszenia jej funkcjonalności(więcej na ten temat przeczytasz w sekcji „Działania analityczne” i „Pliki cookies” Polityki prywatności)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nasz prawnie uzasadniony interes, polegający na przetwarzaniu danych w podanym wyżej celu (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr>
                    <td colSpan={2}>do momentu wygaśnięcia ważności lub usunięcia przez Ciebie plików cookies, wykorzystywanych do celów analitycznych*</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie uwzględnimy sposobu korzystania i poruszania się przez Ciebie po stronie internetowej Sklepu w pracach nad jej rozwojem</td>
                </tr>
            </table>
            <p>* w zależności od tego, które ma zastosowanie w danym przypadku</p>
            <br />
            <p><strong>7. Wyrażenie przez Ciebie zgody na otrzymywanie od nas treści marketingowych (np. informacji o ofertach specjalnych)</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>wysyłka informacji marketingowych, zwłaszcza ofert specjalnych</td>
                    <td>analiza efektywności wysłanych przez nas wiadomości, celem ustalenia ogólnych zasad dotyczących skutecznej wysyłki wiadomości w naszej działalności (więcej na ten temat przeczytasz w sekcji „Działania analityczne” Polityki prywatności)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>Twoja zgoda na nasze działania marketingowe (art. 6 ust. 1 lit. a RODO)</td>
                    <td>nasz prawnie uzasadniony interes, polegający na przetwarzaniu danych w podanym wyżej celu (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>do momentu wycofania przez Ciebie zgody – pamiętaj, w każdej chwili możesz wycofać zgodę. Przetwarzanie danych do momentu cofnięcia przez Ciebie zgody pozostaje zgodne z prawem.</td>
                    <td>do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziesz otrzymywać naszych materiałów marketingowych, w tym informacji o naszych ofertach specjalnych</td>
                </tr>
            </table>
            <br />
            <p><strong>8. Zapisanie się na newsletter</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>wysyłanie newslettera</td>
                    <td>analiza efektywności wysłanych przez nas treści, celem ustalenia ogólnych zasad dotyczących skutecznej wysyłki wiadomości w naszej działalności (więcej na ten temat przeczytasz w sekcji „Działania analityczne” Polityki prywatności)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>umowa o świadczenie usługi wysyłki newslettera (art. 6 ust. 1 lit. b RODO)</td>
                    <td>nasz prawnie uzasadniony interes, polegający na przetwarzaniu danych w podanym wyżej celu (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr className={styles.col2}>
                    <td>do momentu, w którym wypiszesz się z naszego newslettera</td>
                    <td>do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nie będziesz mieć możliwości otrzymywania informacji dotyczących Sklepu i naszych usług</td>
                </tr>
            </table>
            <br />
            <p><strong>9. Podjęcie działania lub zaniechanie mogące powodować powstanie roszczeń związanych ze Sklepem lub naszymi usługami</strong></p>
            <table>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>W jakim celu?</td>
                </tr>
                <tr>
                    <td colSpan={2}>ustalenie, dochodzenie lub obrona ewentualnych roszczeń, związanych z zawartą umową lub świadczonymi usługami</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Na jakiej podstawie?</td>
                </tr>
                <tr>
                    <td colSpan={2}>nasz prawnie uzasadniony interes, polegający na przetwarzaniu danych osobowych we wskazanym powyżej celu (art. 6 ust. 1 lit. f RODO)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Jak długo?</td>
                </tr>
                <tr>
                    <td colSpan={2}>do upływu okresu przedawnienia roszczeń lub do momentu, w którym uwzględnimy Twój sprzeciw wobec przetwarzania*</td>
                </tr>
                <tr>
                    <td colSpan={2}>ponadto, Twoje dane będą przetwarzane do upływu okresu, w którym możliwe jest dochodzenie roszczeń – przez Ciebie lub przez nas (więcej informacji na ten temat znajdziesz w ostatniej tabeli tej sekcji)</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{ background: "#D9D9D9" }}>Co się stanie, jeśli nie podasz danych?</td>
                </tr>
                <tr>
                    <td colSpan={2}>brak możliwości ustalenia, dochodzenia lub obrony roszczeń</td>
                </tr>
            </table>
            <p>* w zależności od tego, które ma zastosowanie w danym przypadku</p>
            <br />
            <h2>Profilowanie</h2>
            <p>W ramach Sklepu dokonujemy profilowania – w odniesieniu do Ciebie będzie to miało miejsce, jeśli zezwolisz na takie działania. Profilowanie to polega na automatycznej ocenie, jakimi produktami lub usługami możesz być zainteresowany, wykorzystując do tego informacje o wyświetlanych przez Ciebie treściach. Dzięki temu, reklamy produktów lub usług wyświetlane w ramach usług internetowych, z których korzystasz, będą bardziej dostosowane do Ciebie i Twoich potrzeb.<br /><br />Profilowanie, którego dokonujemy, nie skutkuje podejmowaniem decyzji wywołujących wobec Ciebie skutki prawne lub wpływających na Ciebie w podobnie istotny sposób.</p>
            <h2>Działania Analityczne</h2>
            <p>W ramach strony internetowej Sklepu prowadzimy działania analityczne, mające na celu zwiększenie jej intuicyjności i przystępności – w odniesieniu do Ciebie będzie to miało miejsce, jeśli zezwolisz na takie działania. W ramach analizy będziemy brać pod uwagę sposób, w jaki poruszasz się po Sklepie – a więc np. to, ile czasu spędzasz na danej podstronie, czy w które miejsca w Sklepie klikasz. Dzięki temu podczas prac nad rozwojem Sklepu będziemy mogli zoptymalizować jego układ, wygląd oraz zamieszczane w nim treści, tak aby polepszyć jego funkcjonalność.<br /><br />Ponadto, jeśli wyrazisz wolę otrzymywania od nas wiadomości marketingowych lub newslettera, możemy dokonywać analizy efektywności przeprowadzonej przez nas wysyłki. Przykładowo, możemy sprawdzić, czy i w jaki sposób wpłynęła ona na aktywność w naszym Sklepie. Takie działania pomogą nam ustalić ogólne zasady dotyczące wysyłki tego typu wiadomości w naszej działalności - np. w zakresie optymalnych godzin wysyłki czy sposobu formułowania skutecznych treści.</p>
            <h2>Bezpieczeństwo Danych</h2>
            <p>Przetwarzając Twoje dane osobowe stosujemy środki organizacyjne i techniczne zgodne z właściwymi przepisami prawa, w tym stosujemy szyfrowanie połączenia za pomocą certyfikatu SSL/TLS.</p>
            <h2>Pliki Cookies</h2>
            <p>Nasz Sklep, jak większość witryn internetowych, korzysta z tzw. plików cookies (ciasteczek). Pliki te:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>są zapisywane w pamięci Twojego urządzenia (komputera, telefonu, itd.);</li>
                <li>nie powodują zmian w ustawieniach Twojego urządzenia.</li>
            </ul>
            <br />
            <p>W tym Sklepie ciasteczka wykorzystywane są w celach:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>zapamiętywania Twojej sesji</li>
                <li>statystycznych</li>
                <li>marketingowych</li>
                <li>udostępniania funkcji Sklepu</li>
            </ul>
            <br />
            <p>Aby dowiedzieć się, jak zarządzać plikami cookies, w tym jak wyłączyć ich obsługę w Twojej przeglądarce, możesz skorzystać z pliku pomocy Twojej przeglądarki. Z informacjami na ten temat możesz zapoznać się wciskając klawisz F1 w przeglądarce. Ponadto odpowiednie wskazówki znajdziesz na następujących podstronach, w zależności od przeglądarki, której używasz:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>Google Chrome</li>
                <li>Opera</li>
                <li>Safari</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
            </ul>
            <br />
            <p>Poniżej znajdziesz informacje na temat funkcji przetwarzanych przez nas plików cookie oraz ich okresie ważności.</p>
            <br />
            <table>
                <thead>
                    <tr style={{ background: "#D9D9D9" }}>
                        <td>Nazwa Pliku Cookie</td>
                        <td>Okres Ważności</td>
                        <td>Opis</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CookieScriptConsent</td>
                        <td>1 miesiąc</td>
                        <td>Ten plik cookie jest generalnie dostarczany przez Shopify i jest używany w połączeniu z częścią zakupową.</td>
                    </tr>
                    <tr>
                        <td>_orig_referrer</td>
                        <td>14 dni</td>
                        <td>Ten plik cookie jest używany przez usługę Cookie-Script.com do zapamiętywania preferencji dotyczących zgody użytkownika na pliki cookie. Jest to konieczne, aby baner cookie Cookie-Script.com działał poprawnie.</td>
                    </tr>
                    <tr>
                        <td>__cf_bm</td>
                        <td>30 minut</td>
                        <td>Ten plik cookie służy do rozróżniania ludzi i botów. Jest to korzystne dla strony internetowej, ponieważ umożliwia tworzenie ważnych raportów na temat korzystania z jej witryny internetowej.</td>
                    </tr>
                    <tr>
                        <td>cart_currency</td>
                        <td>14 dni</td>
                        <td>Ten plik cookie służy do rozpoznawania kraju pochodzenia użytkownika i podawania prawidłowej waluty transakcji.</td>
                    </tr>
                    <tr>
                        <td>secure_customer_sig</td>
                        <td>1 rok</td>
                        <td>Ten plik cookie jest generalnie dostarczany przez Shopify i jest używany w połączeniu z logowaniem klienta.</td>
                    </tr>
                    <tr>
                        <td>session</td>
                        <td>sesja</td>
                        <td>Pliki cookie sesji wygasają po wylogowaniu się lub zamknięciu przeglądarki. Są przechowywane tylko tymczasowo i po opuszczeniu strony ulegają zniszczeniu. Są również znane jako tymczasowe pliki cookie, nietrwałe pliki cookie lub tymczasowe pliki cookie.</td>
                    </tr>
                    <tr>
                        <td>_ga</td>
                        <td>1 rok i 1 miesiąc</td>
                        <td>Ta nazwa pliku cookie jest powiązana z Google Universal Analytics - co stanowi istotną aktualizację powszechnie używanej usługi analitycznej Google. Ten plik cookie służy do rozróżniania unikalnych użytkowników poprzez przypisanie losowo wygenerowanej liczby jako identyfikatora klienta. Jest on uwzględniony w każdym żądaniu strony w witrynie i służy do obliczania danych dotyczących odwiedzających, sesji i kampanii na potrzeby raportów analitycznych witryn.</td>
                    </tr>
                    <tr>
                        <td>_ga_9DDDZQ83F9</td>
                        <td>1rok i 1 miesiąc</td>
                        <td>Ten plik cookie jest używany przez Google Analytics do utrzymywania stanu sesji.</td>
                    </tr>
                    <tr>
                        <td>_landing_page</td>
                        <td>14 dni</td>
                        <td>Ten plik cookie służy do śledzenia, raportowania i analizowania na stronach docelowych.</td>
                    </tr>
                    <tr>
                        <td>_shopify_s</td>
                        <td>30 minut</td>
                        <td>Ten plik cookie jest powiązany z pakietem analitycznym Shopify.</td>
                    </tr>
                    <tr>
                        <td>_shopify_y</td>
                        <td>1 rok</td>
                        <td>Ten plik cookie jest powiązany z pakietem analitycznym Shopify.</td>
                    </tr>
                    <tr>
                        <td>_tracking_consent</td>
                        <td>1 rok</td>
                        <td>Preferencje dotyczące śledzenia.</td>
                    </tr>
                    <tr>
                        <td>_cmp_a</td>
                        <td>1 dzień</td>
                        <td>Służy do zarządzania ustawieniami prywatności klientów.</td>
                    </tr>
                    <tr>
                        <td>localization</td>
                        <td>1 rok</td>
                        <td>Te pliki cookie są ustawiane na stronach z widżetem Flickr.</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p>Korzystając z odpowiednich opcji Twojej przeglądarki, w każdej chwili możesz:</p>
            <ul style={{ listStyleType: "disc" }}>
                <li>usunąć pliki cookies,</li>
                <li>blokować wykorzystanie plików cookies w przyszłości.</li>
            </ul>
            <br />
            <p>W takich przypadkach nie będziemy ich już dłużej przetwarzać.</p>
            <h2>Usługi Zewnętrzne / Odbiorcy Danych</h2>
            <p>Korzystamy z usług podmiotów zewnętrznych, które wspierają nas w prowadzeniu działalności. Powierzamy im do przetwarzania Twoje dane – podmioty te przetwarzają dane wyłącznie na nasze udokumentowane polecenie.<br /><br />Poniżej znajdziesz listę odbiorców Twoich danych:</p>
            <br />
            <table>
                <thead>
                    <tr>
                        <td>Działanie</td>
                        <td>Odbiorca Danych</td>
                        <td>Przekazanie Danych Poza Unię Eropejską</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={3}>każde działanie w związku ze Sklepem</td>
                        <td>podmiot zapewniający nam wsparcie techniczne/IT</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>osoby współpracujące z nami na podstawie umów cywilnoprawnych, wspierające naszą bieżącą działalność</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>dostawca oprogramowania do prowadzenia sprzedaży</td>
                        <td>tak – Stany Zjednoczone Ameryki, Wielka Brytania **</td>
                    </tr>
                    <tr>
                        <td>przebywanie na stronie Sklepu z ustawieniami zezwalającymi na prowadzenie działań analitycznych</td>
                        <td>podmiot umożliwiający działania analityczne na stronie</td>
                        <td>tak – Stany Zjednoczone Ameryki, Wielka Brytania **</td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>złożenie zamówienia w Sklepie</td>
                        <td>dostawca płatności</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>podmiot dostarczający do Ciebie produkt</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>dostawca standardowego oprogramowania biurowego (w tym skrzynki poczty elektronicznej)</td>
                        <td>tak – Stany Zjednoczone Ameryki, Wielka Brytania **</td>
                    </tr>
                    <tr>
                        <td>biuro rachunkowe</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>skorzystanie przez Ciebie z usług dostarczanych nam w związku ze Sklepem przez portale społecznościowe</td>
                        <td>portale społecznościowe</td>
                        <td>tak – Stany Zjednoczone Ameryki, Wielka Brytania **</td>
                    </tr>
                    <tr>
                        <td>wzięcie udziału w badaniu satysfakcji z naszych usług lub produktów</td>
                        <td>podmioty umożliwiające umieszczanie opinii o Sklepie lub produktach i ich porównywanie</td>
                        <td>nie ma miejsca</td>
                    </tr>
                    <tr>
                        <td>nawiązanie z nami kontaktu (np. zadanie pytania)</td>
                        <td>dostawca standardowego oprogramowania biurowego (w tym skrzynki poczty elektronicznej)</td>
                        <td>tak – Stany Zjednoczone Ameryki, Wielka Brytania **</td>
                    </tr>
                </tbody>
            </table>
            <br /><p>A ponadto:<br /><br />odpowiednie organy publiczne w zakresie, w jakim jesteśmy zobowiązani do udostępnienia im danych.</p>
            <h2>Przekazywanie Danych Osobowych Do Państwa Spoza Unii Europejskiej</h2>
            <p>** W związku z powyższym, Twoje dane osobowe mogą być przetwarzane również przez podmioty spoza Unii Europejskiej. Właściwy poziom ochrony Twoich danych, w tym poprzez stosowanie odpowiednich zabezpieczeń, zapewnia:</p>
            <br />
            <ul style={{ listStyleType: "disc" }}>
                <li>uczestnictwo tych podmiotów w tzw. Data Privacy Framework, a więc programie ustanowionym decyzją wykonawczą Komisji Europejskiej jako zbiór zasad gwarantujących odpowiednią ochronę Twojej prywatności - w przypadku podmiotów ze Stanów Zjednoczonych Ameryki</li>
                <li>decyzja wykonawcza Komisji z dnia 28 czerwca 2021 roku, na mocy rozporządzenia (EU) 2016/679 Parlamentu Europejskiego i Rady, w sprawie odpowiedniej ochrony danych osobowych w Zjednoczonym Królestwie</li>
            </ul>
            <br /><p>Niniejszy dokument został wygenerowany za pomocą Kreatora Legal Geek dnia 09.03.2024</p>
        </div >
    )
}

