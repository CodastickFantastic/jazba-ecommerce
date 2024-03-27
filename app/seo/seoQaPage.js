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
                        '@type': 'ListItem',
                        name: 'Zwroty',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Reklamacje',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Płatności',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Dlaczego dostawa może być wydłużona?',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Ile trwa dostawa?',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Ile kosztuje dostawa?',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Gdzie jest moja paczka?',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Masz zastrzeżenie co do paczki?',
                    },
                    {
                        '@type': 'ListItem',
                        name: 'Jak zamówić paczkę za granicę?',
                    },
                ]
            },
        },
    };
}