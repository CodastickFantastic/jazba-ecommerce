import { Image } from "@shopify/hydrogen"

import styles from "~/styles/pages/blogPosts/poznajMarkeJazba.module.css"

import logo from "~/../public/logo/jazba-logo-black.png"
import testImg from "~/../public/blog/test.jpg"
import { Link } from "@remix-run/react"

export default function BlogPage() {
    return (
        <div className={`${styles.blogPage} smallContainer`}>
            <h1>Poznaj marke <span className="beige">Jazba</span></h1>
            <p><strong style={{ fontSize: "18px" }}>Witajcie <span className="beige">Kochni</span>,</strong><br /><br />Na wstepie chcemy podziękować wam za odwiedzenie naszego sklepu internetowego. Cieszymy się z faktu, że do nas trafiliście. Mamy nadzieję, że nasze produkty przyciągną waszą uwagę i zasłużą na wasz zakup. <br /><br />Jesteśmy małą firmą założoną na początku 2024 roku. Kierujemy się pasją do tworzenia niebagatelnych wzorów i strasznie nie lubimy nudy. Lubimy wyóżnić się z tłumu i w taki oto sposób zrodził się pomysł na stworzenie marki <span className="beige">Jazba</span>, marki która za pomocą niebanalnych haftów pragnie ożywić Twoją kreację, w taki sposób abyś mógł wyrazić siebie bez używania słów.<br /><br />Na dzisiejszy dzień premiery nasz asortyment jest niestety skromny, jednakże planujemy w każdym tygodniu wypsuzczać nowe wzory. Idziemy z duchem czasu, co oznacza że wypuszczane przez nas wzory są w 100% unisex.</p>
            <section className={styles.contents}>
                <h2>Spis Treści</h2>
                <ol>
                    <li><Link to="#co-znaczy-slowo-jazba">Co znaczy słowo Jazba?</Link></li>
                    <li><Link to="#jazba-w-swiecie-mody">Jazba w świecie mody</Link></li>
                    <li><Link to="#sztuka-haftu-polaczenie-elegancji-i-luzu">Sztuka Haftu - Połączenie Elegancji i Luzu</Link></li>
                    <li><Link to="#proces-tworzenia-ubran">Proces tworzenia ubrań</Link></li>
                    <li><Link to="#wyraz-swoja-indywidualnosc">Wyraź swoją indywidualność</Link></li>
                    <li><Link to="#podsumowanie">Podsumwoanie</Link></li>
                </ol>
            </section>
            <section id="co-znaczy-slowo-jazba" className={`${styles.twoColsCentered} ${styles.coZnaczySlowoJazba}`}>
                <div className={styles.col60}>
                    <h2>Co znaczy słowo Jazba?</h2>
                    <p>Jazba to więcej niż zwykły termin. To wyraz oznaczający porzadanie, pasję oraz uczucia w języku Ugundu.</p>
                </div>
                <div className={styles.col40}>
                    <Image src={logo} alt="Logo Jazba Czarne" width={500} className={styles.logo} />
                </div>
            </section>
            <section id="jazba-w-swiecie-mody" className={styles.centered}>
                <h2>Jazba w Świecie Mody</h2>
                <p>Marka Jazba wnosi do świata mody coś więcej niż tylko ubrania. Haftując niepowtarzane wzory tworzy dzieła sztuki na ubraniach. Każdy haft jest wyjątkowym projektem, stworzonym z pasją i zaangażowaniem, co sprawia, że noszenie ubrań staje się wyrazem indywidualnego stylu. </p>
            </section>
            <section id="sztuka-haftu-polaczenie-elegancji-i-luzu" className={`${styles.twoColsCentered} ${styles.sztukaHaftu}`}>
                <div className={styles.col30} style={{ marginRight: 24 }}>
                    <Image src={testImg} alt="Haft na ubranmiu" width={500} className={styles.haftNaUbraniu} />
                </div>
                <div className={styles.col70}>
                    <h2>Sztuka Haftu - Połączenie Elegancji i Luzu</h2>
                    <p>Hafty Jazby to nie tylko zwykle zdobienie tkanin. To chęć połączenia dwóch stylów: eleganzcji i luzu. Dzięki temu Nasze ubrania można nosić na różne okazje, od formalnych spotkań po swobodne spotkania z przyjaciółmi.<br /><br />Nasze hafty przedstawiają zwierzęta w różnych strojach co dodaje niepowtarzalnego uroku każdej stylizacji.</p>
                </div>
            </section>
            <section id="proces-tworzenia-ubran" className={styles.centered}>
                <h2>Proces Tworzenia Ubrań</h2>
                <p>Projekty haftów Naszej firmy są tworzone w Polsce inspirowane zwierzętami, ale także inspirujemy się klasykami filmów, bajek, zawodami jak i różnymi kulturami.</p>
            </section>
            <section id="wyraz-swoja-indywidualnosc" className={styles.twoColsCentered}>
                <div className={styles.col60}>
                    <h2>Wyraź Swoją Indywidualność</h2>
                    <p>Nosząc ubrania Jazba, wyrażasz nie tylko swój styl, ale także swoją osobowość. To nie tylko zwykła moda - to sposób na wyrażanie siebie.</p>
                </div>
                <div className={styles.col40}>
                    <Image src={testImg} alt="Zdjecie Modela w Polo" width={500} className={styles.haftNaUbraniu} />
                </div>
            </section>
            <section id="podsumowanie" className={styles.centered}>
                <h2>Podsumowanie</h2>
                <p>Jazba to nie tylko marka odzieżowa. To wyrażanie swojego indywidualnego stylu. Odkryj swoją pasję w ubraniach Jazba i pozwól swojemu stylowi zabłysnąć!</p>
                <p>WIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEOWIDEO</p>
            </section>
        </div>
    )
}