const seoRoot = {
    title: "Jazba",
    titleTemplate: '%s | Jazba',
    description: "Poznaj Jazbe, nową Polską markę na rynku odzieżowym. Sprawdź nasze wyjątkowe produkty i znajdz coś dla siebie. Zakochaj się w Haftach!",
    handle: '@JazbaFashion',
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
            'https://twitter.com/JazbaFashion',
            'https://facebook.com/JazbaHaft',
            'https://instagram.com/jazba_fashion',
            'https://www.youtube.com/@JazbaFashion',
            'https://tiktok.com/@jazba_fashion',
        ],
        url: "https://jazba.pl",
    }
}

export default seoRoot
