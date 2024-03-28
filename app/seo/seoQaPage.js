export default function seoQaPage({ title, description, url }) {
    return {
        description: description,
        title: title,
        titleTemplate: '%s | Helpdesk Jazba',
        url,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'FQAPage',
            name: title,
            description: description,
            url: url,
            mainEntity: [
                {
                    "@type": "Question",
                    "name": "Jak dokonać zwrotu produktu?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Na zwrot masz 14 dni od odebrania przesyłki. Zwrotom podlegają rzeczy bez śladów użytkowania z metką. 1.Spakuj i wypełnij formularz - Jeśli chcesz zwrócić nasz produkt pobierz nasz formularz zwrotu, wypełnij i włóż do paczki wraz ze zwracanym produktem. Formularz znajduje się na końcu Regluaminu. 2. Nadanie paczki - Następnie nadaj paczkę u wybranego przez Ciebie przewoźnika na adres: Ul. Graniczna 15A, 05-077 Warszawa.Po odebraniu paczki kurier doręczy przesyłkę bezpośrednio do naszego magazynu, o czym zostaniesz poinformowany mailowo 3. Poczekaj na zwrot środków - Zwrot środków nastąpi w ciągu 14 dni roboczych od daty dostarczenia paczki na nasz magazyn, o czym również zostaniesz poinformowany mailowo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Jak dokonać reklamacji produktu?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. Skontaktuj się z nami i odeślij towar - W przypadku reklamacji koniecznie bedzie odesłanie towaru. W tym celu skontaktuj się z nami mailowo w celu uzyskania instrukcji do bezpłatnego nadania. 2. Poczekaj na decyzję i zwrot środków - Po pozytywnym rozpatrzeniu reklamacji zwrot środków nastąpi w ciągu 14 dni roboczych od daty doręczenia przesyłki. Zostaniesz poinformawany o tym mailowo."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Jakie oferujecie formy płatności?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Za pobraniem - Jeśli chcesz zapłacić przy odbiorze możesz wybrać ten sposób płatności. Upewnij się, że wszystkie podane przez Ciebie informacje są prawidłowe by kurier mógł prawidłowo dostarczyć dla Ciebie przesyłkę. Szczególną uwagę zwróc na adres oraz numer telefonu. Przelewy24 - Zapłać szybko i bezpiecznie wybierając opcje Przelewy 24. To popularna metoda płatności, która umożliwia w prosty i szybki sposób opłacić Twoje zamówienie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Dlaczego dostawa może być wydłużona?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Jesteśmy nową firmą i w myśl polityki zero waste nie magazynujemy się aktualnie pod sam "korek".Dostawa może być wydłużona w wypadku, gdy nie mamy danego towaru na magazynie Oznacza to, że produkt który planujesz zakupić jest w trakcie haftowania wzoru. Bez obaw, Twoja paczka na pewno do Ciebie niezwłocznie dotrze po uzupełnieniu zapasów, proces ten zazwyczaj nie zajmie dłużej niż 3 tygodnie w skrajnych przypadkach. Dziękujemy za wyrozumiałość.'
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ile czasu trwa dostawa?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Przygotowanie zamówienia: 1-2 dni robocze. Czas dostawy: 1 dzień roboczy. Przygotowanie zamówienia do wysyłki nie powinno nam zająć dłużej niż 2 dni robocze.Jest to optymalny czas na zaksięgowanie płatności oraz skompletowanie zamówienia. Jak tylko Twoja paczka zostanie nadana, poinformujemy Cię o tym mailowo oraz otrzymasz numer przesyłki do śledzenia paczki. Dostawa może być wydłużona w przypadku braku towaru na magazynie.'
                    }
                },
                {
                    "@type": "Question",
                    "name": "Gdzie jest moja paczka?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Po otrzymaniu zamówienia i zaksięgowaniu wpłaty niezwłocznie przechodzimy do realizacji zamówienia.Pakujemy Twoją przesyłkę i przekazujemy ją do firmy kurierskiej. Jak tylko przesyłka opuści nasz magazyn zostaniesz o tym poinformowany mailowo wraz z linkiem do śledzenia przesyłki.'
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ile kosztuje dostawa?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Dostawa kosztuję między 15zł a 30zł w zalezności od wybranego przewoźnika.'
                    }
                },
                {
                    "@type": "Question",
                    "name": "Masz zastrzeżenie co do paczki?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Nasze produkty sa pakowane w sygnowane naszym logo kartony dostawcze. Każdy karton jest zaplombowany naklejką z naszym logo.Jeśli masz podejrzenie co do otrzymanej paczki sprawdź zawartośc przy kurierze i spisz odpowiedni protokół, który otrzymasz od kuriera.'
                    }
                },
                {
                    "@type": "Question",
                    "name": "Jak zamówić paczkę za granice?",
                    "answerCount": 1,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": 'Przed dokonaniem zamówienia skontaktuj się z nami mailowo, a dokonamy odpowiedniej wyceny.'
                    }
                },
            ],
        },
    };
}