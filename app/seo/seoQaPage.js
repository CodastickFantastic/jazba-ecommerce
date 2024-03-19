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
        },
    };
}