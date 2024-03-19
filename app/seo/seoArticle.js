export default function seoArticle({ title, description, url, imgUrl, imgHeight, imgWidth, imgAltText, articleBody, publishedDate }) {
    return {
        title: title,
        description: description,
        titleTemplate: '%s | Blog Jazba',
        url,
        media: {
            type: 'image',
            url: imgUrl,
            height: imgHeight,
            width: imgWidth,
            altText: imgAltText,
        },
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            alternativeHeadline: title,
            articleBody: articleBody,
            datePublished: publishedDate,
            description: description,
            headline: title,
            image: imgUrl,
            url,
        },
    };
}