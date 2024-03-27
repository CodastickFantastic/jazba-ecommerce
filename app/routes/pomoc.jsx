import SingleFaq from '~/components/microComponents/SingleFaq'
import styles from '~/styles/pages/faq.module.css'

import { json } from '@shopify/remix-oxygen'
import seoQaPage from '~/seo/seoQaPage'

import { useLoaderData } from '@remix-run/react'

import { Link } from "@remix-run/react"

export async function loader({ request }) {
    const seo = seoQaPage({
        title: 'Pomoc',
        description: 'Strona poświęcona pomocy i zawierająca najczęsciej zadawane pytania. Informacje na temat zwrotów, reklamacji, płatności i dostaw.',
        url: request.url
    })

    const requestParamsOpen = request.url.split('?')[1]?.split("=")[1]

    return json({ seo, requestParamsOpen })
}

export default function Pomoc() {
    const { requestParamsOpen } = useLoaderData()

    return (
        <div className={`${styles.faq} smallContainer`}>
            <h1>Pomoc</h1>
            <SingleFaq question="Zwroty" answer={zwroty} open={requestParamsOpen === "zwroty" ? true : false} />
            <SingleFaq question="Reklamacje" answer={reklamacje} open={requestParamsOpen === "reklamacje" ? true : false} />
            <SingleFaq question="Płatności" answer={platnosci} open={requestParamsOpen === "platnosci" ? true : false} />
            <SingleFaq question="Dlaczego dostawa może być wydłużona?" answer={dlaczegoDostawaWydluzona} open={requestParamsOpen === "wydluzona_dostawa" ? true : false} />
            <SingleFaq question="Ile trwa dostawa?" answer={ileTrwaDostawa} />
            <SingleFaq question="Ile kosztuje dostawa?" answer={ileKosztujeDostawa} />
            <SingleFaq question="Gdzie jest moja paczka?" answer={gdzieJestMojaPaczka} />
            <SingleFaq question="Masz zastrzeżenie co do paczki?" answer={maszZastrzelenieCoDoPaczki} />
            <SingleFaq question="Jak zamówić paczkę za granicę?" answer={jakZamowicPaczkeZaGranice} />
        </div>
    )
}

const dlaczegoDostawaWydluzona = 'Jesteśmy nową firmą i w myśl polityki zero waste nie magazynujemy się aktualnie pod sam "korek".</br>Dostawa może być wydłużona w wypadku, gdy nie mamy danego towaru na magazynie.<br/><br/>Oznacza to, że produkt który planujesz zakupić jest w trakcie haftowania wzoru.<br/><br/>Bez obaw, Twoja paczka na pewno do Ciebie niezwłocznie dotrze po uzupełnieniu zapasów, proces ten zazwyczaj nie zajmie dłużej niż 3 tygodnie w skrajnych przypadkach.<br/>Dziękujemy za wyrozumiałość.'
const ileTrwaDostawa = "<strong>Przygotowanie zamówienia:</strong> 1-2 dni robocze<br/><strong>Czas dostawy:</strong> 1 dzień roboczy<br/><br/>Przygotowanie zamówienia do wysyłki nie powinno nam zająć dłużej niż 2 dni robocze.Jest to optymalny czas na zaksięgowanie płatności oraz skompletowanie zamówienia.<br/>Jak tylko Twoja paczka zostanie nadana, poinformujemy Cię o tym mailowo oraz otrzymasz numer przesyłki do śledzenia paczki.<br/>Dostawa może być wydłużona w przypadku braku towaru na magazynie."
const ileKosztujeDostawa = "Cena dostawy: 0,99 zł<br/>Cena za przesyłkę: 0,99 zł"
const gdzieJestMojaPaczka = "Po otrzymaniu zamówienia i zaksięgowaniu wpłaty niezwłocznie przechodzimy do realizacji zamówienia.<br/>Pakujemy Twoją przesyłkę i przekazujemy ją do firmy kurierskiej. Jak tylko przesyłka opuści nasz magazyn zostaniesz o tym poinformowany mailowo wraz z linkiem do śledzenia przesyłki."
const maszZastrzelenieCoDoPaczki = "Nasze produkty sa pakowane w sygnowane naszym logo kartony dostawcze. Każdy karton jest zaplombowany naklejką z naszym logo.<br/>Jeśli masz podejrzenie co do otrzymanej paczki sprawdź zawartośc przy kurierze i spisz odpowiedni protokół, który otrzymasz od kuriera."
const jakZamowicPaczkeZaGranice = "Przed dokonaniem zamówienia skontaktuj się z nami mailowo, a dokonamy odpowiedniej wyceny."
const zwroty = 'Na zwrot masz 14 dni od odebrania przesyłki. Zwrotom podlegają rzeczy bez śladów użytkowania z metką.<br/><strong>1.Spakuj i wypełnij formularz</strong><br/>Jeśli chcesz zwrócić nasz produkt <a href="/pdf/formularz_odstapienia_od_umowy.pdf" target="_blank">pobierz nasz formularz zwrotu</a>, wypełnij i włóż do paczki wraz ze zwracanym produktem. Formularz znajduje się na końcu Regluaminu.<br/><strong>2. Nadaj paczkę</strong><br/>Następnie nadaj paczkę  u wybranego przez Ciebie przewoźnika na adres:<br/><strong>Ul. Graniczna 15A, 05-077 Warszawa</strong><br/>Po odebraniu paczki kurier doręczy przesyłkę bezpośrednio do naszego magazynu, o czym zostaniesz poinformowany mailowo.<br/><strong>3. Poczekaj na zwrot środków</strong></br> Zwrot środków nastąpi w ciągu 14 dni roboczych od daty dostarczenia paczki na nasz magazyn, o czym również zostaniesz poinformowany mailowo.<br/><a href="/regulamin#prawo-odstapienia-od-umowy" target="_blank">Poznaj szczegóły &rarr;</a>'
const reklamacje = '<strong>1. Skontaktuj się z nami i odeślij towar</strong><br/>W przypadku reklamacji koniecznie bedzie odesłanie towaru. W tym celu skontaktuj się z nami mailowo w celu uzyskania instrukcji do bezpłatnego nadania.<br/><strong>2. Poczekaj na decyzję i zwrot środków</strong><br/>Po pozytywnym rozpatrzeniu reklamacji zwrot środków nastąpi w ciągu 14 dni roboczych od daty doręczenia przesyłki. Zostaniesz poinformawany o tym mailowo.<br/><a href="/regulamin#reklamacje" target="_blank">Poznaj szczegóły &rarr;</a>'
const platnosci = '<strong>Za pobraniem</strong><br/>Jeśli chcesz zapłacić przy odbiorze możesz wybrać ten sposób płatności. Upewnij się, że wszystkie podane przez Ciebie informacje są prawidłowe by kurier mógł prawidłowo dostarczyć dla Ciebie przesyłkę. Szczególną uwagę zwróc na adres oraz numer telefonu.<br/><strong>Przelewy24</strong><br/>Zapłać szybko i bezpiecznie wybierając opcje Przelewy 24. To popularna metoda płatności, która umożliwia w prosty i szybki sposób opłacić Twoje zamówienie.<br/><a href="/regulamin#platnosci" target="_blank">Poznaj szczegóły &rarr;</a>'