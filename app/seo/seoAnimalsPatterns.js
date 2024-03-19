export default function seoAnimalsPatterns({ collection, url }) {
    return {
        title: collection.title,
        titleTemplate: '%s | Wzory',
        description: collection.seo.description,
        media: {
            type: 'image',
            url: collection?.image?.url,
            height: collection?.image?.height,
            width: collection?.image?.width,
            altText: collection?.image?.altText,
        },
        jsonLd: collectionJsonLd({ collection, url }),
    }
}

function collectionJsonLd({ url, collection }) {
    const siteUrl = new URL(url);
    const itemListElement = collection.products.nodes.map((product, index) => {
        return {
            '@type': 'ListItem',
            position: index + 1,
            url: `/produkty/${product.handle}`,
        };
    });

    return [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Strona Główna',
                    item: `${siteUrl.host}/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: collection.title,
                },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: collection?.seo?.title ?? collection?.title ?? '',
            description: collection?.seo?.description,
            image: collection?.image?.url,
            url: `/wzory/${collection.handle}`,
            mainEntity: {
                '@type': 'ItemList',
                itemListElement,
            },
        },
    ];
}