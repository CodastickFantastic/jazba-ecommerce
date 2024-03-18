export default function seoProduct({ product, url, selectedVariant }) {
    const description = product?.seo?.description

    console.log("test")
    console.log(selectedVariant?.image)

    return {
        title: product?.seo?.title ?? product?.title,
        description,
        media: selectedVariant?.image,
    };
}

