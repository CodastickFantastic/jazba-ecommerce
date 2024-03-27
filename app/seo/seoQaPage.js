export default function seoQaPage({ title, description, url }) {
    return {
        description: description,
        title: title,
        titleTemplate: '%s | Helpdesk Jazba',
        url,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'QAPage',
            name: title,
            description: description,
            url: url,
            mainEntity: {
                '@type': 'ItemList',
                name: 'Helpdesk Jazba',
                itemListElement: [
                    {
                        "@context": "https://schema.org",
                        '@type': 'Question',
                        name: 'Jak dokonać zwrotu?',
                        acceptedAnswer: {
                            "@type": 'Answer',
                            text: 'Na zwrot masz 14 dni od odebrania przesyłki. Zwrotom podlegają rzeczy bez śladów użytkowania z metką. 1.Spakuj i wypełnij formularz Jeśli chcesz zwrócić nasz produkt pobierz nasz formularz zwrotu, wypełnij i włóż do paczki wraz ze zwracanym produktem. Formularz znajduje się na końcu Regluaminu. 2. Nadaj paczkę Następnie nadaj paczkę u wybranego przez Ciebie przewoźnika na adres: Ul. Graniczna 15A, 05-077 Warszawa Po odebraniu paczki kurier doręczy przesyłkę bezpośrednio do naszego magazynu, o czym zostaniesz poinformowany mailowo. 3. Poczekaj na zwrot środków Zwrot środków nastąpi w ciągu 14 dni roboczych od daty dostarczenia paczki na nasz magazyn, o czym również zostaniesz poinformowany mailowo.'
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        '@type': 'Question',
                        name: 'Jak dokonać reklamacji?',
                        acceptedAnswer: {
                            "@type": 'Answer',
                            text: '1. Skontaktuj się z nami i odeślij towar. W przypadku reklamacji koniecznie bedzie odesłanie towaru. W tym celu skontaktuj się z nami mailowo w celu uzyskania instrukcji do bezpłatnego nadania. 2. Poczekaj na decyzję i zwrot środków. Po pozytywnym rozpatrzeniu reklamacji zwrot środków nastąpi w ciągu 14 dni roboczych od daty doręczenia przesyłki. Zostaniesz poinformawany o tym mailowo.'
                        }
                    },
                ]
            },
        },
    };
}