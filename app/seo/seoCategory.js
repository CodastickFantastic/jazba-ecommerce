export default function seoCategory({ title, description, keywords }) {
    return {
        title: title,
        titleTemplate: '%s | Jazba',
        description: description,
        keywords: keywords,
    }
}