export default function seoAllProducts({ title, description, products, url }) {
    return {
        title: title,
        titleTemplate: '%s | Kategorie',
        description: description,
        // media: {
        //     type: 'image',
        //     url: collection?.image?.url,
        //     height: collection?.image?.height,
        //     width: collection?.image?.width,
        //     altText: collection?.image?.altText,
        // },
        jsonLd: collectionJsonLd({ products, url, title, description }),
    }
}

function collectionJsonLd({ url, products, title, description }) {
    const siteUrl = new URL(url);
    const itemListElement = products.nodes.map((product, index) => {
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
                    item: `${siteUrl.host}`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: "Wszystkie Produkty",
                },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: title,
            description: description,
            // image: collection?.image?.url,
            url: `/produkty`,
            mainEntity: {
                '@type': 'ItemList',
                itemListElement,
            },
        },
    ];
}