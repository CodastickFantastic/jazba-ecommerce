import { Link } from "@remix-run/react"
import styles from "~/styles/pages/legal.module.css"

export default function PolitykaZwrotów() {
    return (
        <div className={`${styles.legal} smallContainer`}>
            <h1>Regulamin sklepu internetowego Jazba</h1>

            <p className={styles.preambula}>
                Niniejszy Regulamin okresla zasady świadczenia usług drogą elektroniczną oraz dokonowyania zakupów w sklepie internetowym "Jazba", prowadzonego przez
                firmę "Agata Rozenek" z siedzibą w Warszawie przy ul. Granicznej 15A, 05-077 Warszawa wpisanej do rejestru przedsiębiorców pod numerem NIP 1132815981, REGON 522023534 (dalej określany jako: Sprzedawca, Usługodawca lub Jazba).<br /><br />
                Adres korespondencji elektronicznej: biuro@jazba.pl<br />
                Numer telefonu: 501 721 417<br /><br />
                Regulamin stosowany jest do wszystkich aktywności dokonanych za pośrednictwem sklepu internetowego <strong><Link to="https://jazba.pl">https://jazba.pl</Link></strong> oraz określa zasady świadczenia usług drogą elektroniczną.

            </p>

            <div className={styles.contents}>
                <p>Spis treści:</p>
                <ol>
                    <li><Link to="#definicje">Definicje</Link></li>
                    <li><Link to="#postanowienia-ogolne">Postanowienia Ogólne</Link></li>
                    <li><Link to="#zobowiazania-klienta">Zobowiązania Klienta</Link></li>
                    <li><Link to="#przetwarzanie-danych-osobowych">Przetwarzanie Danych Osobowych</Link></li>
                    <li><Link to="#uslugi-elektroniczne-w-sklepie-internetowym">Usługi Elektroniczne w Sklepie Internetowym</Link></li>
                    <li><Link to="#warunki-zawierania-umowy-sprzedazy">Warunki Zawierania Umowy Sprzedaży</Link></li>
                    <li><Link to="#sposoby-i-terminy-platnosci">Sposoby i Terminy Płatności</Link></li>
                    <li><Link to="#dostawy">Dostawy</Link></li>
                    <li><Link to="#reklamacja-produktu">Reklamacja Produktu</Link></li>
                    <li><Link to="#odstapienie-od-umowy">Odstąpienie od Umowy</Link></li>
                    <li><Link to="#zgloszenie-naruszen">Zgloszenie Naruszeń</Link></li>
                    <li><Link to="#postanowienia-koncowe">Postanowienia Końcowe</Link></li>
                </ol>
            </div>

            <div id="definicje" className={styles.akapit}>
                <h2>1. Definicje</h2>
                <ol style={{ listStyle: "none" }}>
                    <li><strong>Dostawca</strong> – podmiot, z którym współpracuje Sprzedawca w zakresie dokonywania Dostawy Towarów.</li>
                    <li><strong>Dzień Roboczy</strong> – oznacza każdy dzień od poniedziałku do piątku z wyłączeniem dni ustawowo wolnych od pracy.</li>
                    <li><strong>Dostawa </strong> – oznacza czynność polegającą na dostarczeniu Klientowi przez Sprzedawcę, za pośrednictwem Dostawcy, Towaru określonego w Zamówieniu, za opłatą związaną z wykonaniem umowy przewozu Towaru do Klienta.</li>
                    <li><strong>Formularz Kontaktowy</strong> – usługa elektroniczna umożliwiającą wysłanie za pomocą formularza umieszczonego na Stronie Internetowej Sklepu wiadomości do Sprzedawcy.</li>
                    <li><strong>Formularz Zamówienia</strong> – usługa elektroniczna umożliwiająca złożenie Zamówienia w Sklepie Internetowym.</li>
                    <li><strong>Klient</strong> – (1) osoba fizyczna posiadająca pełną zdolność do czynności prawnych, a w wypadkach przewidzianych przez przepisy powszechnie obowiązujące także osoba fizyczna posiadająca ograniczoną zdolność do czynności prawnych; (2) osoba prawna; albo (3) jednostka organizacyjna nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną; - która zawarła lub zamierza zawrzeć Umowę Sprzedaży ze Sprzedawcą.</li>
                    <li><strong>Konsument</strong> – osoba fizyczna dokonującą z przedsiębiorcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.</li>
                    <li><strong>Newsletter</strong> - usługa elektroniczna świadczona przez Usługodawcę za pośrednictwem poczty elektronicznej e-mail i w formie wiadomości sms przesyłanej na telefon komórkowy, która umożliwia wszystkim korzystającym z niej Usługobiorcom automatyczne otrzymywanie od Usługodawcy cyklicznych treści kolejnych edycji Newslettera zawierającego informacje o Towarach, nowościach i promocjach w Sklepie Internetowym.</li>
                    <li><strong>Przedsiębiorca</strong> – oznacza Klienta niebędącego Konsumentem.</li>
                    <li><strong>Regulamin</strong>– niniejszy regulamin Sklepu Internetowego.</li>
                    <li><strong>Sklep Internetowy, Sklep</strong>– sklep internetowy Sprzedawcy i Usługodawcy dostępny pod adresem internetowym: <Link to="https://www.jazba.pl">https://www.jazba.pl</Link>.</li>
                    <li><strong>Towar</strong> – oznacza rzecz sprzedawaną przez Sprzedawcę Klientowi za pośrednictwem Sklepu po zapłacie ceny.</li>
                    <li><strong>Treści</strong> – elementy tekstowe, graficzne lub multimedialne, w tym utwory w rozumieniu ustawy o prawie autorskim i prawach pokrewnych jakie są zaprezentowane i rozpowszechniane w ramach Sklepu lub w ramach Newslettera.</li>
                    <li><strong>Umowa sprzedaży</strong> - jest to umowa sprzedaży, zawierana z wykorzystaniem środków porozumiewania się na odległość i dotycząca sprzedaży przez Sprzedawcę na rzecz Klienta Towarów za zapłatą Ceny powiększonej o ewentualne opłaty związane z wykonaniem umowy przewozu Towaru do Klienta oraz ewnetualnych customizacji Towaru.</li>
                    <li><strong>Umowa o świadczenie usług</strong>- oznacza umowę dotyczącą świadczenia usług drogą elektroniczną.</li>
                    <li><strong>Usługa elektroniczna</strong>- usługa świadczona drogą elektroniczną przez Usługodawcę na rzecz Usługobiorcy za pośrednictwem Sklepu Internetowego</li>
                    <li><strong>Usługobiorca</strong>- (1) osoba fizyczna posiadającą pełną zdolność do czynności prawnych, a w wypadkach przewidzianych przez przepisy właściwe, także osoba fizyczna posiadająca ograniczoną zdolność do czynności prawnych; (2) osoba prawna; albo (3) jednostka organizacyjna nieposiadającą osobowości prawnej, której przepisy właściwe przyznają zdolność prawną; - korzystającą lub zamierzającą korzystać z Usługi Elektronicznej.</li>
                    <li><strong>Zamówienie</strong> - oświadczenie woli Klienta składane za pomocą Formularza Zamówienia i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży Towaru ze Sprzedawcą.</li>
                </ol>
            </div>

            <div id="postanowienia-ogolne" className={styles.akapit}>
                <h2>2. Postanowienia Ogólne</h2>
                <ol>
                    <li>Regulamin określa warunki świadczenia usług drogą elektroniczną przez Usługodawcę oraz sposób zawierania umów sprzedaży Towarów między Klientem i Sprzedawcą za pośrednictwem Sklepu.</li>
                    <li>Niniejszy Regulamin skierowany jest zarówno do konsumentów, jak i do przedsiębiorców korzystających ze Sklepu Internetowego, chyba że dane postanowienie Regulaminu stanowi inaczej i jest skierowane wyłącznie do konsumentów albo do przedsiębiorców.</li>
                    <li>Wszelkie prawa do Sklepu, w tym majątkowe prawa autorskie oraz prawa własności intelektualnej należą do Sprzedawcy.</li>
                    <li>Sprzedawca stosuje mechanizm plików „cookies". Pliki „cookies” zapisywane są w przeglądarce internetowej. Po odebraniu pliku "cookie" przez przeglądarkę internetową, odsyła je ona jako informację dodatkową z powrotem na serwer przy każdorazowym wejściu na stronę Sklepu. Serwer internetowy tworzy dla każdego Klienta własny plik "cookie". Jedynie w sytuacji, gdy pliki "cookies" są aktywne, możliwe jest korzystanie ze wszystkich funkcji w Sklepie. Więcej informacji na ten temat znajduje się w Polityce Prywatności na stronie internetowej <Link to="/polityka-prywatnosci">https://www.jazba.pl/polityka-prywatnosci</Link>.</li>
                    <li>Do złożenia Zamówienia w Sklepie oraz w celu korzystania z usług świadczonych drogą elektroniczną przez Usługodawcę wymagane jest posługiwanie się kontem poczty elektronicznej.</li>
                </ol>
            </div>

            <div id="zobowiazania-klienta" className={styles.akapit}>
                <h2>3. Zobowiązania Klienta</h2>
                <p>Klient zobowiązany jest do:</p>
                <ol>
                    <li>przestrzegania zasad regulaminu</li>
                    <li>podawania w udostępnionych w ramach Sklepu formularzach wyłącznie prawdziwych i aktualnych danych;</li>
                    <li>korzystania z funkcjonalności Sklepu w sposób niezakłócający ich funkcjonowania oraz w sposób zgodny z przepisami obowiązującego prawa, postanowieniami Regulaminu, a także z przyjętymi w danym zakresie zwyczajami i zasadami współżycia społecznego;</li>
                </ol>
                <br />
                <p>Klientowi zakazuje się:</p>
                <ol>
                    <li>dostarczania treści bezprawnych, naruszających obowiązujące przepisy oraz wykorzystywanie Sklepu w sposób sprzeczny z prawem lub w sposób naruszający prawa osób trzecich.</li>
                    <li>umieszczania w Sklepie jakichkolwiek treści naruszających przepisy prawa, dobre obyczaje lub naruszający dobra osobiste osób trzecich (zakaz umieszczania treści o charakterze bezprawnym);</li>
                    <li>wykonywania czynności powodujących ingerencję w zasady lub techniczne aspekty funkcjonowania Sklepu</li>
                    <li>modyfikowania treści prezentowanych w Sklepie</li>
                    <li>wykorzystywania zasobów i funkcji Sklepu w celu prowadzenia przez Klienta działalności, która naruszałaby interes Sprzedawcy, m.in. zamieszczanie treści niezwiązanych z działalnością Sprzedawcy lub treści mogących wprowadzić w błąd</li>
                    <li>przełamywania zabezpieczeń Sklepu bądź inne działania na szkodę Sprzedawcy</li>
                </ol>

            </div>

            <div id="przetwarzanie-danych-osobowych" className={styles.akapit}>
                <h2>4. Przetwarzanie Danych Osobowych</h2>
                <p>Administratorem danych osobowych przetwarzanych w Sklepie Internetowym w związku z realizacją postanowień niniejszego Regulaminu jest Sprzedawca. Dane osobowe przetwarzane są w celach, w zakresie i w oparciu o podstawy i zasady wskazane w polityce prywatności opublikowanej na stronie <Link to="/polityka-prywatnosci">https://jazba.pl/polityka-prywatnosci</Link>.<br /><br /> Polityka prywatności zawiera przede wszystkim zasady dotyczące przetwarzania danych osobowych przez Administratora w Sklepie Internetowym, w tym podstawy, cele i zakres przetwarzania danych osobowych oraz prawa osób, których dane dotyczą, a także informacje w zakresie stosowania w Sklepie Internetowym plików cookies oraz narzędzi analitycznych. <br /><br />Korzystanie ze Sklepu Internetowego, w tym dokonywanie zakupów jest dobrowolne. Podobnie związane z tym podanie danych osobowych przez korzystającego ze Sklepu Internetowego Usługobiorcę lub Klienta jest dobrowolne, z zastrzeżeniem wyjątków wskazanych w polityce prywatności.</p>
            </div>

            <div id="uslugi-elektroniczne-w-sklepie-internetowym" className={styles.akapit}>
                <h2>5. Usługi Elektroniczne w Sklepie Internetowym</h2>
                <p>W sklepie internetowym dostepnę sa nastepujące usługi elektroniczne:</p>
                <ul style={{ listStyle: "none" }}>
                    <li><strong>Formularz Zamówień</strong> - korzystanie z formularza zamowienia rozpoczyna się w momencie dodania produktu do wirtualnego koszyka. W celu złożenia zamówienia konieczne jest kliknięcie przycisku "Zamawiam!". Następnie Klient zostaje przeniesiony do bezpiecznej strony zawierającej bramkę płatności w której nalezy podać wymagane dane do zamówienia oraz wybrać sposób dostawy i płatności. Po zatwierdzeniu płatności nie ma możliwości zmiany danych, a nieodpłatna usługa Elektronicznego Formularza Zamówień dobiega końca.</li>
                    <li><strong>Newsletter</strong>- rozpoczecie korzystania z uługi Newslettera następuje w momencie wysłania formularza z adresem email w zakładce "Newsletter". Do newsletera można się również zapisać w trakcie realzjiacji zamówienia zaznaczająć odpowiednią zgodę. Usługa newsletera realizowana jest nieodpłatnie przez czas nieoznaczony. W celu zaprzestania korzystania z usługi Newslettera konieczne jest wysłanie stosownej wiadomości email do Usługodawcy.</li>
                </ul>
            </div>

            <div id="warunki-zawierania-umowy-sprzedazy" className={styles.akapit}>
                <h2>6. Warunki Zawierania Umowy Sprzedaży</h2>
                <ol>
                    <li>Informacje o Towarach stanowią zaproszenie do zawarcia umowy.</li>
                    <li>Informacje o Towarach nie stanowią ofert w rozumieniu przepisów właściwych.</li>
                    <li>Do zawarcia umowy sprzedaży nie jest wymagana rejestracja konta w Sklepie.</li>
                    <li>Ceny towarów zawierają podatek VAT i podawane są w złotówkach.</li>
                    <li>Ceny towarów nie zawierają kosztów dostawy.</li>
                    <li>Procedura zawarcia Umowy Sprzedaży jest dokonywana za pomocą Formularza Zamówień</li>
                    <li>Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego otrzymanie oraz jednocześnie przyjmuje Zamówienie do realizacji. Potwierdzenie otrzymania Zamówienia i jego przyjęcie do realizacji następuje poprzez przesłanie przez Sprzedawcę Klientowi stosownej wiadomości e-mail na podany w trakcie składania Zamówienia adres poczty elektronicznej.Z chwilą otrzymania przez Klienta powyższej wiadomości e-mail zostaje zawarta Umowa Sprzedaży między Klientem, a Sprzedawcą.</li>
                    <li>Utrwalenie oraz udostępnienie Klientowi treści zawieranej Umowy Sprzedaży następuje poprzez (1) udostępnienie niniejszego Regulaminu na stronie Sklepu Internetowego oraz (2) przesłanie Klientowi wiadomości e-mail zawierającej informację o potwierdzeniu zamówienia.</li>
                    <li>Dokonanie Zamówienia jest równoznaczne z akceptacją regulaminu sklepu oraz polityki prywatności</li>
                </ol>
            </div>

            <div id="sposoby-i-terminy-platnosci" className={styles.akapit}>
                <h2>7. Sposoby i Terminy Płatności</h2>
                <ol>
                    <li>Dodać sposoby płatności</li>
                </ol>
            </div>

            <div id="dostawy" className={styles.akapit}>
                <h2>8. Dostawy</h2>
                <ol>
                    <li>Dostawa Produktu do Klienta jest odpłatna, chyba że Umowa Sprzedaży stanowi inaczej. Koszty dostawy Produktu (w tym opłaty za transport, dostarczenie i usługi pocztowe) pokrywa Klient.</li>
                    <li>O kosztach dostawy klient informowany jest na odpowiednim etapie Formularza Zamówienia, a także na stronie "Dostawa" Sklepu Internetowego</li>
                    <li>Termin dostawy Produktu do Klienta wynosi do 30 dni roboczych od potwierdzenia Zamówienia przez Sprzedawcę</li>
                    <li>Sprzedawca udostepnia Klientowi następujące sposoby dostawy Produktu:
                        <ol>
                            <li>Przesyłka Kurierska</li>
                        </ol>
                    </li>
                </ol>
            </div >

            <div id="reklamacja-produktu" className={styles.akapit}>
                <h2>9. Reklamacja Produktu</h2>
                <ol>
                    <li>Sprzedawca jest zobowiązany do dostarczenia Konsumentom Towaru zgodnego z Umową Sprzedaży.</li>
                    <li>Podstawa i zakres odpowiedzialności Sprzedawcy względem Klienta, jeżeli sprzedany Produkt ma wadę fizyczną lub prawną (rękojmia) są określone powszechnie obowiązującymi przepisami prawa, w szczególności w Kodeksie Cywilnym (w szczególności w art. 556-576 Kodeksu Cywilnego).</li>
                    <li>W celu dokonania reklamacji produktu należy wysłać stosowną wiadomość e-mail do Sprzedawcy na adres biuro@jazba.pl</li>
                    <li>Klient zobowiązany jest dostarczyć do Sprzedawcy reklamowany produkt na koszt Klienta</li>
                    <li>Sprzedawca ustosunkuje się do reklamacji klienta niezwłocznie, nie później niż w w ciągu 14 dni kalendarzowych od dnia jej złożenia.</li>
                    <li>W przypadku pozytywnego rozpatrzenia reklamacji koszt dostawy wadliwego produktu zostanie zwrócony klientowi.</li>
                    <li>W celu poprawnej weryfikacji dokonywanych reklamacji w trakie realizacji zamówienia Sprzedawca dokumentuje zdjęciowo wysyłane paczki i przechowuje daną dokumentację przez okres dwóch lat i 14 dni od wysyłki zamówienia.</li>
                    <li>W przypadku akceptacji reklamacji przez Sprzedawcę, Sprzedawca przewiduje nastepujące metody rozwiązania sporu:
                        <ol>
                            <li>Wymiana wadliwego produktu</li>
                            <li>Naprawa wadliwego produktu</li>
                        </ol>
                    </li>
                    <li>Informacje na temat sposobu reklamowania produktu można znaleźć w zakładce "Pomoc"</li>
                </ol>
            </div >

            <div id="odstapienie-od-umowy" className={styles.akapit}>
                <h2>10. Odstąpienie od umowy</h2>
                <ol>
                    <li>Konsument, może odstąpić od Umowy Sprzedaży Towaru w terminie 14 dni kalendarzowych bez podawania przyczyny. Do zachowania terminu wystarczy wysłanie oświadczenia przed jego upływem. Oświadczenie o odstąpieniu od umowy należy zgłosić drogą mailową na adres biuro@jazba.pl</li>
                    <li>Bieg terminu do odstąpienia od Umowy Sprzedaży rozpoczyna się dla Umowy Sprzedaży, w wykonaniu której Sprzedawca wydaje Towar – od objęcia Towaru w posiadanie przez Konsumenta lub wskazaną przez niego osobę trzecią inną niż przewoźnik, a w przypadku gdy Umowa Sprzedaży obejmuje wiele Towarów, które są dostarczane osobno, partiami lub w częściach – od objęcia w posiadanie ostatniego Towaru, partii lub części, dla pozostałych umów – od dnia ich zawarcia.</li>
                    <li>Sprzedawca ma obowiązek niezwłocznie, nie później niż w terminie 14 dni kalendarzowych od dnia otrzymania oświadczenia konsumenta o odstąpieniu od umowy, zwrócić konsumentowi wszystkie dokonane przez niego płatności, w tym koszty dostawy Produktu (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Klienta sposobu dostawy innego niż najtańszy zwykły sposób dostawy dostępny w Sklepie Internetowym). Sprzedawca dokonuje zwrotu płatności przy użyciu takiego samego sposobu płatności, jakiego użył konsument, chyba że konsument wyraźnie zgodził się na inny sposób zwrotu, który nie wiąże się dla niego z żadnymi kosztami.</li>
                    <li>Sprzedawca może wstrzymać się ze zwrotem płatności otrzymanych od Konsumenta do chwili otrzymania z powrotem Towaru.</li>
                    <li>Konsument ponosi odpowiedzialność za zmniejszenie wartości Produktu będące wynikiem korzystania z niego w sposób wykraczający poza konieczny do stwierdzenia charakteru, cech i funkcjonowania Produktu.</li>
                    <li>Możliwe koszty związane z odstąpieniem przez konsumenta od umowy, które obowiązany jest ponieść konsument:
                        <ol>
                            <li>Konsument ponosi bezpośrednie koszty zwrotu Produktu.</li>
                            <li>Koszty związane z ewentualnym pomniejszeniem wartości produktu</li>
                        </ol>
                    </li>
                    <li>Prawo odstąpienia od umowy zawartej na odległość nie przysługuje konsumentowi w odniesieniu do umów:
                        <ol>
                            <li>o świadczenie usług, jeżeli Sprzedawca wykonał w pełni usługę za wyraźną zgodą konsumenta, który został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu świadczenia przez Sprzedawcę utraci prawo odstąpienia od umowy; </li>
                            <li>w której cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którymi Sprzedawca nie sprawuje kontroli, i które mogą wystąpić przed upływem terminu do odstąpienia od umowy; </li>
                            <li> w której przedmiotem świadczenia jest Produkt nieprefabrykowany, wyprodukowany według specyfikacji konsumenta lub służący zaspokojeniu jego zindywidualizowanych potrzeb; </li>
                            <li> w której przedmiotem świadczenia jest Produkt ulegający szybkiemu zepsuciu lub mająca krótki termin przydatności do użycia; </li>
                            <li> w której przedmiotem świadczenia jest Produkt dostarczany w zapieczętowanym opakowaniu, którego po otwarciu opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze względów higienicznych, jeżeli opakowanie zostało otwarte po dostarczeniu; </li>
                            <li> w której przedmiotem świadczenia są Produkty, które po dostarczeniu, ze względu na swój charakter, zostają nierozłącznie połączone z innymi rzeczami; </li>
                            <li> w której przedmiotem świadczenia są napoje alkoholowe, których cena została uzgodniona przy zawarciu Umowy Sprzedaży, a których dostarczenie może nastąpić dopiero po upływie 30 dni i których wartość zależy od wahań na rynku, nad którymi Sprzedawca nie ma kontroli; </li>
                            <li> w której konsument wyraźnie żądał, aby Sprzedawca do niego przyjechał w celu dokonania pilnej naprawy lub konserwacji; jeżeli Sprzedawca świadczy dodatkowo inne usługi niż te, których wykonania konsument żądał, lub dostarcza Produkty inne niż części zamienne niezbędne do wykonania naprawy lub konserwacji, prawo odstąpienia od umowy przysługuje konsumentowi w odniesieniu do dodatkowych usług lub Produktów;</li>
                            <li> w której przedmiotem świadczenia są nagrania dźwiękowe lub wizualne albo programy komputerowe dostarczane w zapieczętowanym opakowaniu, jeżeli opakowanie zostało otwarte po dostarczeniu; </li>
                            <li> o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem umowy o prenumeratę; </li>
                            <li> zawartej w drodze aukcji publicznej; </li>
                            <li> o świadczenie usług w zakresie zakwaterowania, innych niż do celów mieszkalnych, przewozu rzeczy, najmu samochodów, gastronomii, usług związanych z wypoczynkiem, wydarzeniami rozrywkowymi, sportowymi lub kulturalnymi, jeżeli w umowie oznaczono dzień lub okres świadczenia usługi; </li>
                            <li> o dostarczanie treści cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez Sprzedawcę o utracie prawa odstąpienia od umowy.</li>
                        </ol>
                    </li>
                    <li>Wszelkie spory powstałe pomiędzy Sprzedawcą/Usługodawcą a Klientem/Usługobiorcą zostają poddane sądowi właściwemu ze względu na siedzibę Sprzedawcy/Usługodawcy.</li>
                    <li>W wypadku Klientów nie będących konsumentami Sprzedawca ma prawo ograniczyć dostępne sposoby płatności, w tym także wymagać dokonania przedpłaty w całości albo części i to niezależnie od wybranego przez Klienta sposobu płatności oraz faktu zawarcia Umowy Sprzedaży.</li>
                    <li>Z chwilą wydania przez Sprzedawcę Produktu przewoźnikowi przechodzą na Klienta nie będącego konsumentem korzyści i ciężary związane z Produktem oraz niebezpieczeństwo przypadkowej utraty lub uszkodzenia Produktu. Sprzedawca w takim wypadku nie ponosi odpowiedzialności za utratę, ubytek lub uszkodzenie Produktu powstałe od przyjęcia go do przewozu aż do wydania go Klientowi oraz za opóźnienie w przewozie przesyłki.</li>
                    <li>W razie przesłania Produktu do Klienta za pośrednictwem przewoźnika Klient nie będący konsumentem obowiązany jest zbadać przesyłkę w czasie i w sposób przyjęty przy przesyłkach tego rodzaju. Jeżeli stwierdzi, że w czasie przewozu nastąpił ubytek lub uszkodzenie Produktu, obowiązany jest dokonać wszelkich czynności niezbędnych do ustalenia odpowiedzialności przewoźnika.</li>
                    <li>Zgodnie z art. 558 § 1 Kodeksu Cywilnego odpowiedzialność Sprzedawcy z tytułu rękojmi za Produkt wobec Klienta nie będącego konsumentem zostaje wyłączona.</li>

                </ol>
            </div >

            <div id="zgloszenie-naruszen" className={styles.akapit}>
                <h2>11. Zgłoszenie Naruszeń</h2>
                <ol>
                    <li>W przypadku, gdy Klient lub inny podmiot uzna, iż treść publikowana na stronie internetowej Sklepu narusza jego dobra osobiste bądź obowiązujące przepisy prawa może powiadomić o tym Sprzedawcę.</li>
                    <li>Sprzedawca niezwłocznie dołoży wszelkich starań celem usunięcia w/w treści.</li>
                    <li>Informacje o powyższym należy przesyłać na adres korespondencji elektronicznej: biuro@jazba.pl.</li>
                </ol>
            </div >

            <div id="postanowienia-koncowe" className={styles.akapit}>
                <h2>12. Postanowienia Końcowe</h2>
                <ol>
                    <li>Umowy zawierane poprzez Sklep Internetowy zawierane są w języku polskim.</li>
                    <li>Zmiany regulaminu:
                        <ol>
                            <li>Usługodawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych przyczyn to jest: zmiany przepisów prawa; zmiany sposobów płatności i dostaw - w zakresie, w jakim te zmiany wpływają na realizację postanowień niniejszego Regulaminu.</li>
                            <li>
                                W przypadku zawarcia na podstawie niniejszego Regulaminu umów o charakterze ciągłym (np. świadczenie Usługi Elektronicznej – Newsletter) zmieniony regulamin wiąże Usługobiorcę, jeżeli zostały zachowane wymagania określone w art. 384 oraz 384[1] Kodeksu cywilnego, to jest Usługobiorca został prawidłowo powiadomiony o zmianach i nie wypowiedział umowy w terminie 14 dni kalendarzowych od dnia powiadomienia. W wypadku gdyby zmiana Regulaminu skutkowała wprowadzeniem jakichkolwiek nowych opłat lub podwyższeniem obecnych Usługobiorca będący konsumentem ma prawo odstąpienia od umowy
                            </li>
                            <li>W przypadku zawarcia na podstawie niniejszego Regulaminu umów o innym charakterze niż umowy ciągłe (np. Umowa Sprzedaży) zmiany Regulaminu nie będą w żaden sposób naruszać praw nabytych Usługobiorców/Klientów będących konsumentami przed dniem wejścia w życie zmian</li>
                        </ol>
                    </li>
                    <li>W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczególności: Kodeksu cywilnego; ustawy o świadczeniu usług drogą elektroniczną z dnia 6 lutego 2020 r. (Dz. U. 2020 poz. 344); dla Umów Sprzedaży zawartych do 24 grudnia 2014 roku z Klientami będącymi konsumentami - przepisy ustawy o ochronie niektórych praw konsumentów oraz o odpowiedzialności za szkodę wyrządzoną przez produkt niebezpieczny z dnia 2 marca 2000 r. (Dz.U. 2000 nr 22, poz. 271 ze zm.) oraz ustawy o szczególnych warunkach sprzedaży konsumenckiej (Dz. U. 2012 poz. 1122) oraz o zmianie Kodeksu cywilnego z dnia 29 czerwca 2020 r. (Dz. U. 2020 poz. 1145); dla Umów Sprzedaży zawartych od 25 grudnia 2014 roku z Klientami będącymi konsumentami - przepisy ustawy o prawach konsumenta z dnia 28 stycznia 2020 r. (Dz. U. 2020 poz. 287); oraz inne właściwe przepisy powszechnie obowiązującego prawa.</li>
                </ol>
            </div >



        </div >
    )
}

