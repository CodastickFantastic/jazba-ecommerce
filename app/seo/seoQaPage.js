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
                        '@type': 'ItemListElement',
                        name: 'Jak dokonać zwrotu?',
                    },
                    {
                        '@type': 'ItemListElement',
                        name: 'Jak dokonać reklamacji?',
                    },
                ]
            },
        },
    };
}