export default function seoPage({ title, description, url }) {
    return {
        description: description,
        title: title,
        titleTemplate: '%s | Jazba',
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