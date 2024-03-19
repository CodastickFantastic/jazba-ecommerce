export default function seoProduct({ product, url, selectedVariant }) {
    return {
        title: product?.seo?.title ?? product?.title,
        description: product?.seo?.description,
        media: selectedVariant?.image ?? product?.images.edges[0]?.node.url,
        jsonLd: productJsonLd({ product, selectedVariant, url }),
    };
}

function productJsonLd({ product, selectedVariant, url }) {
    const origin = new URL(url).origin;
    const variants = product?.options[0].values

    const offers = (variants || []).map((variant) => {
        const variantUrl = new URL(url);
        const availability = 'https://schema.org/InStock'

        return {
            '@type': 'Offer',
            availability,
            price: parseFloat(product.priceRange.maxVariantPrice.amount),
            priceCurrency: product.priceRange.maxVariantPrice.currencyCode,
            url: variantUrl.toString().split('?')[0] + "?Rozmiar=" + variant,
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
                    name: 'Wszystkie Produkty',
                    item: `${origin}`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: product.title,
                },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            brand: {
                '@type': 'Brand',
                name: "Jazba",
            },
            description: product?.seo?.description,
            image: [selectedVariant?.image?.url ?? product?.images.edges[0]?.node.url],
            name: product.title,
            offers,
            url,
        },
    ];
}