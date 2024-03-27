import seoArticle from "~/seo/seoArticle"
import { json } from "@shopify/remix-oxygen"

import BlogHeader from "~/components/blog/BlogHeader"
import BlogColWithImgRight from "~/components/blog/BlogColWithImgRight"
import BlogTextSection from "~/components/blog/BlogTextSection"
import BlogFooterWithImg from "~/components/blog/BlogFooterWithImg"

import logo from "~/../public/logo/jazba-logo-black.png"
import footerImg from "~/../public/blog/poznaj-marke-jazba/modelka-w-bluzie-na-drzewie.webp"
import aligator from "~/../public/blog/poznaj-marke-jazba/haft-aligatora.webp"
import modelPolo from "~/../public/blog/poznaj-marke-jazba/model-w-bialej-koszulce-polo.webp"

export async function loader({ request }) {

    const seo = seoArticle({
        title: "Poznaj marke Jazba",
        description: "Marka Jazba wnosi do świata mody coś więcej niż tylko ubrania, haftując niepowtarzalne wzory tworzy dzieła sztuki na ubraniach.",
        url: request.url,
        img: "https://jazba.pl/logo/jazba-logo-black.png",
        imgAlt: "Logo marki Jazba",
        imgHeight: 806,
        imgWidth: 1477,
        articleBody: "Poznaj marke Jazba. Witajcie Kochani, Na wstępie chcemy podziękować wam za odwiedzenie naszego sklepu internetowego. Cieszymy się z faktu, że do nas trafiliście. Mamy nadzieję, że nasze produkty przyciągną waszą uwagę i zasłużą na wasz zakup.Jesteśmy małą firmą założoną na początku 2024 roku. Kierujemy się pasją do tworzenia niebagatelnych wzorów i bardzo nie lubimy nudy. Lubimy wyróżnić się z tłumu i w taki oto sposób zrodził się pomysł na stworzenie marki Jazba, marki która za pomocą niebanalnych haftów pragnie ożywić Twoją kreację, w taki sposób abyś mógł wyrazić siebie bez używania słów. W dzień premiery nasz asortyment jest niestety skromny, jednakże planujemy w każdym tygodniu wypuszczać nowe wzory. Idziemy z duchem czasu, co oznacza że wypuszczane przez nas wzory są w 100% unisex. Co znaczy słowo Jazba? Jazba to więcej niż zwykły termin. To wyraz oznaczający pożądanie, pasję oraz uczucia w języku Ugundu. Jazba w świecie mody. Marka Jazba wnosi do świata mody coś więcej niż tylko ubrania. Haftując niepowtarzalne wzory tworzy dzieła sztuki na ubraniach. Każdy haft jest wyjątkowym projektem, stworzonym z pasją i zaangażowaniem, co sprawia, że noszenie ubrań staje się wyrazem indywidualnego stylu. Chcieliśmy wnieść coś co jest oryginalne, niebanalne, a zarazem ciekawe. Tak powstał pomysł stworzenia Jazby. Gdzie ubrania wzbogacamy o wyjątkowy haft, zaprojektowany wyłącznie przez nas i naszych artystów. Projektowanie wzorów sprawia nam wiele radości, chociaż nie zawsze jest to dla nas łatwe. Sztuka Haftu - Połączenie Elegancji i Luzu.Hafty Jazby to nie tylko zwykłe zdobienie tkanin. To chęć połączenia dwóch stylów: elegancji i luzu. Dzięki temu Nasze ubrania można nosić na różne okazje, od formalnych spotkań po swobodne spotkania z przyjaciółmi.Nasze hafty przedstawiają zwierzęta w różnych strojach co dodaje niepowtarzalnego uroku każdej stylizacji. Proces Tworzenia Ubrań.Projekty haftów Naszej firmy są tworzone w Polsce inspirowane zwierzętami, ale także inspirujemy się klasykami filmów, bajek, zawodami jak i różnymi kulturami. Dokładamy wszelkich starań by nasze ubrania były jak najwyższej jakości. Staramy się stosować w naszych koszulkach oraz bluzach wysokiej jakości gatunkowo bawełnę, by ubrania mogły Cię cieszyć przez długi czas. Przykładamy uwagę, do grubości stosowanych materiałów aby nie były zbyt cienkie i nie prześwitywały. Dzięki temu nasze połówki można również zakładać na bardziej eleganckie spotkania.By stworzyć dla Was projekt najpierw musimy zaprojektować grafikę haftu. Następnie tworzymy prototyp, by zobaczyć czy projekt odpowiednio odwzorowywuje naszą wizję. Następnie wiedząc co poszło nie tak nadajemy poprawki. Po skończeniu ostatecznie projektu graficznego, możemy wyhaftować ostatecznie zaprojektowany wzór.Wyraź Swoją Indywidualność. Nosząc ubrania Jazba, wyrażasz nie tylko swój styl, ale także swoją osobowość. To nie tylko zwykła moda - to sposób na wyrażanie siebie. Każdy nasz projekt przedstawia inne zwierze oraz każde z nich jest inaczej ubrane. Dzięki temu możesz różnie interpretować nasze Hafty. Kochasz koale? A może po prostu lubisz surfować lub uwielbiasz podróżować? We wszystkich przypadkach nasza kolekcja Cool Lala na pewno będzie do Ciebie pasować. Baw się moda dzięki naszym różnym projektom i wybierz wzory pasujące do Ciebie.Podsumowanie.Jazba to nie tylko marka odzieżowa. To wyrażanie swojego indywidualnego stylu. Marka Jazba dba o każdy detal swoich ubrań, a dzięki haftom dba o niepowtarzalny charakter Twoich stylizacji. Skupia się na jak najwyższej jakości ubrań, dzięki czemu ubrania posłużą Ci na bardzo długi czas. Odkryj swoją pasję w ubraniach, baw się modą i pozwól swojemu stylowi zabłysnąć!",
        publishedDate: "2024-03-01",
    })

    return json({ seo })
}

export default function BlogPage() {
    return (
        <article className="smallContainer">
            <BlogHeader
                title='Poznaj marke <span class="beige">Jazba</span>'
                description='<strong>Witajcie <span class="beige">Kochani</span>,</strong><br /><br />Na wstępie chcemy podziękować wam za odwiedzenie naszego sklepu internetowego. Cieszymy się z faktu, że do nas trafiliście. Mamy nadzieję, że nasze produkty przyciągną waszą uwagę i zasłużą na wasz zakup. <br /><br />Jesteśmy małą firmą założoną na początku 2024 roku. Kierujemy się pasją do tworzenia niebagatelnych wzorów i bardzo nie lubimy nudy. Lubimy wyróżnić się z tłumu i w taki oto sposób zrodził się pomysł na stworzenie marki <span className="beige">Jazba</span>, marki która za pomocą niebanalnych haftów pragnie ożywić Twoją kreację, w taki sposób abyś mógł wyrazić siebie bez używania słów.<br /><br />W dzień premiery nasz asortyment jest niestety skromny, jednakże planujemy w każdym tygodniu wypuszczać nowe wzory. Idziemy z duchem czasu, co oznacza że wypuszczane przez nas wzory są w 100% unisex.'
                blogContents={[
                    { title: "Co znaczy słowo Jazba?", link: "#co-znaczy-slowo-jazba", },
                    { title: "Jazba w świecie mody", link: "#jazba-w-swiecie-mody", },
                    { title: "Sztuka Haftu - Połączenie Elegancji i Luzu", link: "#sztuka-haftu-polaczenie-elegancji-i-luzu", },
                    { title: "Proces tworzenia ubran", link: "#proces-tworzenia-ubran", },
                    { title: "Wyraź swoją indywidualność", link: "#wyraz-swoja-indywidualnosc", },
                    { title: "Podsumowanie", link: "#podsumowanie", }
                ]}
            />
            <main>
                <BlogColWithImgRight
                    id="co-znaczy-slowo-jazba"
                    title="Co znaczy słowo Jazba?"
                    description="Jazba to więcej niż zwykły termin. To wyraz oznaczający pożądanie, pasję oraz uczucia w języku Ugundu."
                    img={logo}
                    imgAlt="Logo marki Jazba w czarnym kolorze"
                    leftColWidth="60"
                    righColWidth="40"
                />
                <BlogTextSection
                    id="jazba-w-swiecie-mody"
                    title="Jazba w świecie mody"
                    description="Marka Jazba wnosi do świata mody coś więcej niż tylko ubrania. Haftując niepowtarzalne wzory tworzy dzieła sztuki na ubraniach. Każdy haft jest wyjątkowym projektem, stworzonym z pasją i zaangażowaniem, co sprawia, że noszenie ubrań staje się wyrazem indywidualnego stylu.<br /> Chcieliśmy wnieść coś co jest oryginalne,  niebanalne, a zarazem ciekawe. Tak powstał pomysł stworzenia Jazby. Gdzie ubrania wzbogacamy o wyjątkowy haft, zaprojektowany wyłącznie przez nas i naszych artystów. Projektowanie wzorów sprawia nam wiele radości, chociaż nie zawsze jest to dla nas łatwe."
                />
                <BlogColWithImgRight
                    id="sztuka-haftu-polaczenie-elegancji-i-luzu"
                    title="Sztuka Haftu - Połączenie Elegancji i Luzu"
                    description="Hafty Jazby to nie tylko zwykłe zdobienie tkanin. To chęć połączenia dwóch stylów: elegancji i luzu. Dzięki temu Nasze ubrania można nosić na różne okazje, od formalnych spotkań po swobodne spotkania z przyjaciółmi.<br />Nasze hafty przedstawiają zwierzęta w różnych strojach co dodaje niepowtarzalnego uroku każdej stylizacji."
                    img={aligator}
                    imgAlt="Zdjęcie haftu aligatora - Dali Gator"
                    leftColWidth="70"
                    righColWidth="30"
                />
                <BlogTextSection
                    id="proces-tworzenia-ubran"
                    title="Proces Tworzenia Ubrań"
                    description="Projekty haftów Naszej firmy są tworzone w Polsce inspirowane zwierzętami, ale także inspirujemy się klasykami filmów, bajek, zawodami jak i różnymi kulturami. Dokładamy wszelkich starań by nasze ubrania były jak najwyższej jakości. Staramy się stosować w naszych koszulkach oraz bluzach wysokiej jakości gatunkowo bawełnę, by ubrania mogły Cię cieszyć przez długi czas. Przykładamy uwagę, do grubości stosowanych materiałów aby nie były zbyt cienkie i nie prześwitywały. Dzięki temu nasze połówki można również zakładać na bardziej eleganckie spotkania.<br />By stworzyć dla Was projekt najpierw musimy zaprojektować grafikę haftu. Następnie tworzymy prototyp, by zobaczyć czy projekt odpowiednio odwzorowywuje naszą wizję. Następnie wiedząc co poszło nie tak nadajemy poprawki. Po skończeniu ostatecznie projektu graficznego, możemy wyhaftować ostatecznie zaprojektowany wzór."
                />
                <BlogColWithImgRight
                    id="wyraz-swoja-indywidualnosc"
                    title="Wyraź Swoją Indywidualność"
                    description="Nosząc ubrania Jazba, wyrażasz nie tylko swój styl, ale także swoją osobowość. To nie tylko zwykła moda - to sposób na wyrażanie siebie. Każdy nasz projekt przedstawia inne zwierze oraz każde z nich jest inaczej ubrane. Dzięki temu możesz różnie interpretować nasze Hafty. Kochasz koale? A może po prostu lubisz surfować lub uwielbiasz podróżować? We wszystkich przypadkach nasza kolekcja Cool Lala na pewno będzie do Ciebie pasować. Baw się moda dzięki naszym różnym projektom i wybierz wzory pasujące do Ciebie."
                    img={modelPolo}
                    imgAlt="Model w białej koszulce polo, zdjęcie w lesie"
                    leftColWidth="70"
                    righColWidth="30"
                />
            </main>
            <BlogFooterWithImg
                id="podsumowanie"
                title="Podsumowanie"
                description="Jazba to nie tylko marka odzieżowa. To wyrażanie swojego indywidualnego stylu. Marka Jazba dba o każdy detal swoich ubrań, a dzięki haftom dba o niepowtarzalny charakter Twoich stylizacji. Skupia się na jak najwyższej jakości ubrań, dzięki czemu ubrania posłużą Ci na bardzo długi czas. Odkryj swoją pasję w ubraniach, baw się modą i pozwól swojemu stylowi zabłysnąć!"
                img={footerImg}
                imgAlt="Modelka w bluzie Jazba siedząca w drzewie"
            />
        </article>
    )
}