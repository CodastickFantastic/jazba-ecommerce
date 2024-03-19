export default function seoBlog({ url }) {
    return {
        title: "Blog",
        description: "Blog Jazba. Ciekawe artykuły o nowościach, które warto zobaczyć.",
        url,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: "Blog",
            description: "Blog Jazba. Ciekawe artykuły o nowościach, które warto zobaczyć.",
            url,
        },
    };
}