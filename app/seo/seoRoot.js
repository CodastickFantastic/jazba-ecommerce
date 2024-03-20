const seoRoot = {
    title: "Jazba",
    titleTemplate: '%s | Jazba',
    description: "Poznaj Jazbe, nową Polską markę na rynku odzieżowym. Sprawdź nasze wyjątkowe produkty i znajdz coś dla siebie. Zakochaj się w Haftach!",
    handle: '@jazba',
    url: "https://jazba.pl",
    robots: {
        noIndex: false,
        noFollow: false,
    },
    jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: "Jazba",
        logo: "https://jazba.pl/logo/jazba-logo-black.png",
        sameAs: [
            'https://twitter.com/jazba',
            'https://facebook.com/jazba',
            'https://instagram.com/jazba',
            'https://youtube.com/jazba',
            'https://tiktok.com/@jazba',
        ],
        url: "https://jazba.pl",
    }
}

export default seoRoot
