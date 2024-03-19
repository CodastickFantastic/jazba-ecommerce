export function seoPolicy({ title, description, url }) {

    return {
        title: title,
        titleTemplate: '%s | Ważne Dokumenty Jazba',
        description: description,
        url,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: url,
        },

    };
}