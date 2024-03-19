import SingleFaq from '~/components/microComponents/SingleFaq'
import styles from '~/styles/pages/faq.module.css'

import { json } from '@shopify/remix-oxygen'
import seoQaPage from '~/seo/seoQaPage'

export async function loader({ request }) {

    const seo = seoQaPage({
        title: 'Pomoc',
        description: 'Pomoc - Jazba',
        url: request.url
    })
    return json({ seo })
}

export default function Pomoc() {

    return (
        <div className={`${styles.faq} smallContainer`}>
            <h1>Pomoc</h1>
            <SingleFaq question="Dlaczego dostawa może być wydłużona?" answer={dlaczegoDostawaWydluzona} />
            <SingleFaq question="Ile trwa dostawa?" answer={ileTrwaDostawa} />
            <SingleFaq question="Ile kosztuje dostawa?" answer={ileKosztujeDostawa} />
            <SingleFaq question="Gdzie jest moja paczka?" answer={gdzieJestMojaPaczka} />
            <SingleFaq question="Masz zastrzelenie co do paczki?" answer={maszZastrzelenieCoDoPaczki} />
            <SingleFaq question="Jak zamówić paczkę za granicę?" answer={jakZamowicPaczkeZaGranice} />
        </div>
    )
}

const dlaczegoDostawaWydluzona = 'Jestesmy nową firmą i w myśl polityki zero waste nie magazynujemy się aktualnie pod sam "korek".</br>Dostawa może być wydłużona w wypadku którym nie mamy danego towaru na magazynie.<br/><br/>Oznacza to, że produkt który planujesz zakupić jest w trakcie haftowania wzoru.<br/><br/>Bez obaw, Twoja paczka na pewno do Ciebie niezwłocznie dotrze po uzupełnieniu zapasów, proces ten zazwyczaj nie zajmie dłużej niż 3 tygodnie w skrajnych przypadkach.<br/>Dziękujemy za wyrozumiałość.'
const ileTrwaDostawa = "<strong>Przygotowanie zamówienia:</strong> 1-2 dni robocze<br/><strong>Czas dostawy:</strong> 1 dzień roboczy<br/><br/>Przygotowanie zamówienia do wysyłki nie powinno nam zająć dłużej niż 2 dni robocze.Jest to optymalny czas na zaksięgowanie płatności oraz skompletowanie zamówienia.<br/>Jak tylko Twoja paczka zostanie nadana, poinformujemy Cię o tym mailowo oraz otrzymasz numer przesyłki do śledzenia paczki.<br/>Dostawa może być wydłużona w przypadku braku towaru na magazynie."
const ileKosztujeDostawa = "Cena dostawy: 0,99 zł<br/>Cena za przesyłkę: 0,99 zł"
const gdzieJestMojaPaczka = "Po otrzymaniu zamówienia i zaksięgowaniu wpłaty niezwłocznie przechodzimy do realizacji zamówienia.<br/>Pakujemy Twoją przesyłkę i przekazujemy ją do firmy kurierskiej. Jak tylko przesyłka opuści nasz magazyn zostaniesz o tym poinformowany mailowo wraz z linkiem do śledzenia przesyłki."
const maszZastrzelenieCoDoPaczki = "Nasze produkty sa pakowane w sygnowane naszym logo kartony dostawcze. Każdy karton jest zaplombowany naklejką z naszym logo.<br/>Jeśli masz podejrzenie co do otrzymanej paczki sprawdź zawartośc przy kurierze i spisz odpowiedni protokół, który otrzymasz od kuriera."
const jakZamowicPaczkeZaGranice = "Przed dokonaniem zamówienia skontaktuj się z nami mailowo a dokonamy odpowiedniej wyceny."


