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
                    <li><Link to="#kontakt-ze-sprzedawca">Kontakt ze Sprzedawcą</Link></li>
                    <li><Link to="#wymogi-techniczne">Wymogi Techniczne</Link></li>
                    <li><Link to="#zakupy-w-sklepie">Zakupy w Sklepie</Link></li>
                    <li><Link to="#platnosci">Płatności</Link></li>
                    <li><Link to="#realizacja-zamowien">Realizacja Zamówień</Link></li>
                    <li><Link to="#prawo-odstapienia-od-umowy">Prawo Odstąpienia od Umowy</Link></li>
                    <li><Link to="#wyjatki-od-prawa-odstapienia-od-umowy">Wyjątki od Prawa Odstąpienia od Umowy</Link></li>
                    <li><Link to="#reklamacje">Reklamacje</Link></li>
                    <li><Link to="#dane-osobowe">Dane Osobowe</Link></li>
                    <li><Link to="#zastrzezenia">Zastrzeżenia</Link></li>
                    <li><Link to="#zalaczniki">Załączniki</Link></li>
                </ol>
            </div>

            <div id="definicje" className={styles.akapit}>
                <h2>1. Definicje</h2>
                <ol style={{ listStyle: "none" }}>
                    <li><strong>Dni robocze</strong> – dni od poniedziałku do piątku za wyjątkiem dni ustawowo wolnych od pracy w Polsce.</li>
                    <li><strong>Kodeks cywilny</strong> – polska ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny.</li>
                    <li><strong>Konsument</strong> – Kupujący będący osobą fizyczną, kupujący w Sklepie lub podejmujący czynności zmierzające do dokonania zakupu, bez bezpośredniego związku z jego działalnością gospodarczą lub zawodową.</li>
                    <li><strong>Konto</strong> – uregulowana odrębnym regulaminem usługa cyfrowa w rozumieniu Ustawy o prawach konsumenta, dzięki której Kupujący może nieodpłatnie skorzystać z dodatkowych funkcji w Sklepie.</li>
                    <li><strong>Kupujący</strong> – każdy podmiot kupujący w Sklepie lub podejmujący czynności zmierzające do dokonania zakupu.</li>
                    <li><strong>Kupujący uprzywilejowany</strong> – Konsument lub Przedsiębiorca uprzywilejowany.</li>
                    <li><strong>Przedsiębiorca uprzywilejowany</strong> – Kupujący będący osobą fizyczną, zawierający lub zamierzający zawrzeć ze Sprzedawcą umowę na podstawie Regulaminu bezpośrednio związaną z jego działalnością gospodarczą, ale nieposiadającą dla niego charakteru zawodowego.</li>
                    <li><strong>Regulamin</strong> – niniejszy regulamin.</li>
                    <li><strong>Sklep</strong> – sklep internetowy Jazba Fashion prowadzony przez Sprzedawcę pod adresem https://www.jazba.pl.</li>
                    <li><strong>Sprzedawca</strong> – AGATA ROZENEK, przedsiębiorca prowadzący działalność gospodarczą pod firmą Agata Rozenek, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP 1132815981, nr REGON 522023534, ul. Graniczna 15A, 05-077 Warszawa.</li>
                    <li><strong>Ustawa o prawach konsumenta</strong> – polska ustawa z dnia 30 maja 2014 r. o prawach konsumenta.</li>
                </ol>
            </div>

            <div id="kontakt-ze-sprzedawca" className={styles.akapit}>
                <h2>2. Kontakt ze Sprzedawca</h2>
                <ol>
                    <li>Adres pocztowy: ul. Graniczna 15A, 05-077 Warszawa</li>
                    <li>Adres e-mail: biuro@jazba.pl</li>
                    <li>Telefon: 501721417</li>
                    <li>Koszt połączenia telefonicznego lub transmisji danych wykonywanych przez Kupującego wynika z podstawowej taryfy operatora telekomunikacyjnego lub dostawcy usług internetowych, z którego usług korzysta Kupujący. Sprzedawca zwraca uwagę, że koszt połączenia międzynarodowego lub międzynarodowej transmisji danych może być wyższy niż koszt połączenia lub transmisji krajowej – w zależności od taryfy przyjętej przez operatora telekomunikacyjnego lub dostawcę usług internetowych, z usług którego korzysta Kupujący.</li>
                </ol>
            </div>

            <div id="wymogi-techniczne" className={styles.akapit}>
                <h2>3. Wymogi Techniczne</h2>
                <ol>
                    <li>Dla prawidłowego funkcjonowania Sklepu potrzebne jest:
                        <ul style={{ listStyleType: "disc" }}>
                            <li>urządzenie z dostępem do Internetu</li>
                            <li>przeglądarka internetowa obsługująca JavaScript oraz pliki cookies.</li>
                        </ul>
                    </li>
                    <li>Dla złożenia zamówienia w Sklepie, poza wymogami określonymi w ust. 1, niezbędne jest aktywne konto e-mail.</li>
                </ol>
            </div>

            <div id="zakupy-w-sklepie" className={styles.akapit}>
                <h2>4. Zakupy w Sklepie</h2>
                <ol>
                    <li>Ceny produktów widoczne w Sklepie są całkowitymi cenami za produkt.</li>
                    <li>Sprzedawca zwraca uwagę, że na całkowitą cenę zamówienia składają się wskazane w Sklepie: cena za produkt oraz, jeśli w danym przypadku ma to zastosowanie, koszty dostawy towaru.</li>
                    <li>Wybrany do kupienia produkt należy dodać do koszyka w Sklepie.</li>
                    <li>Następnie Kupujący wybiera sposób dostawy towaru oraz metodę płatności za zamówienie spośród dostępnych w Sklepie opcji, a także podaje dane niezbędne do zrealizowania złożonego zamówienia.</li>
                    <li>Zamówienie zostaje złożone w momencie potwierdzenia jego treści i zaakceptowania Regulaminu przez Kupującego.</li>
                    <li>Otrzymanie maila przez kupującego, potwierdzającego złożenie zamówienia jest tożsame z zawarciem umowy pomiędzy Kupującym a Sprzedawcą.</li>
                    <li>W celu dokonywania zakupów w Sklepie należy zarejestrować się w Sklepie, tj. założyć w nim Konto.</li>
                </ol>
            </div>

            <div id="platnosci" className={styles.akapit}>
                <h2>5. Płatności</h2>
                <ol>
                    <li>W Sklepie dostępne są następujące metody płatności:
                        <ol>
                            <li>za pomocą karty płatniczej:
                                <ul style={{ listStyleType: "disc" }}>
                                    <li>Visa</li>
                                    <li>Visa Electron</li>
                                    <li>MasterCard</li>
                                    <li>MasterCard Electronic</li>
                                    <li>Maestro</li>
                                </ul>
                            </li>
                            <li>za pośrednictwem platformy płatniczej:
                                <ul style={{ listStyleType: "disc" }}>
                                    <li>dotpay</li>
                                    <li>PayPal</li>
                                    <li>PayU</li>
                                    <li>Przelewy24</li>
                                    <li>TPay.com</li>
                                </ul>
                            </li>
                            <li>za pobraniem, tj. kartą lub gotówką w momencie dostarczenia towaru do Kupującego;</li>
                            <li>gotówką w momencie odbioru osobistego towaru.</li>
                        </ol>
                    </li>
                    <li>W przypadku wybrania przez Kupującego płatności z góry, za zamówienie należy zapłacić w terminie 2 Dni roboczych od złożenia zamówienia.</li>
                </ol>

            </div>

            <div id="realizacja-zamowien" className={styles.akapit}>
                <h2>6. Realizacja Zamowień</h2>
                <ol>
                    <li>Termin realizacji zamówienia wynosi 30 Dni roboczych.</li>
                    <li>W przypadku gdy Kupujący wybrał płatność z góry za zamówienie, Sprzedawca przystąpi do realizacji zamówienia po jego opłaceniu.</li>
                    <li>Towar dostarczany jest wyłącznie na terytorium Rzeczypospolitej Polskiej.</li>
                    <li>W Sklepie dostępne są następujące metody dostawy:</li>
                    <li>za pośrednictwem firmy kurierskiej;</li>
                    <li>za pośrednictwem Poczty Polskiej;</li>
                    <li>za pośrednictwem ORLEN Paczki;</li>
                    <li>do paczkomatów InPost.</li>
                    <li>Kupujący może odebrać towar osobiście w siedzibie firmy w godzinach jej otwarcia.</li>
                    <li>W przypadku wybrania odbioru osobistego przez Kupującego, towar będzie gotowy do odbioru we wskazanym terminie realizacji zamówienia.</li>
                </ol>
            </div>

            <div id="prawo-odstapienia-od-umowy" className={styles.akapit}>
                <h2>7. Prawo Odstąpienia od Umowy</h2>
                <ol>
                    <li>Kupujący uprzywilejowany ma prawo odstąpić od umowy zawartej ze Sprzedawcą za pośrednictwem Sklepu, z zastrzeżeniem § 8 Regulaminu, w terminie 14 dni bez podania jakiejkolwiek przyczyny.</li>
                    <li>Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia:
                        <ol>
                            <li>w którym Kupujący uprzywilejowany wszedł w posiadanie towaru lub w którym osoba trzecia inna niż przewoźnik i wskazana przez Kupującego uprzywilejowanego weszła w posiadanie tego towaru;</li>
                            <li>w którym Kupujący uprzywilejowany wszedł w posiadanie ostatniego towaru, partii lub części lub w którym osoba trzecia, inna niż przewoźnik i wskazana przez Kupującego uprzywilejowanego, weszła w posiadanie ostatniego towaru, partii lub części, w przypadku umowy zobowiązującej do przeniesienia własności wielu towarów, które dostarczane są osobno, partiami lub w częściach.</li>
                        </ol>
                    </li>
                    <li>Aby Kupujący uprzywilejowany mógł skorzystać z prawa odstąpienia od umowy musi poinformować Sprzedawcę, korzystając z danych podanych w § 2 Regulaminu, o swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego oświadczenia (na przykład pismo wysłane pocztą lub pocztą elektroniczną).</li>
                    <li>Kupujący uprzywilejowany może skorzystać z wzoru formularza odstąpienia od umowy umieszczonego na końcu Regulaminu, jednak nie jest to obowiązkowe.</li>
                    <li>Aby zachować termin do odstąpienia od umowy wystarczy, że Kupujący uprzywilejowany wyśle informację dotyczącą wykonania przysługującego mu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od umowy.</li>
                    <li>W przypadku odstąpienia od zawartej umowy Sprzedawca zwraca Kupującemu uprzywilejowanemu wszystkie otrzymane od niego płatności, w tym koszty dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Kupującego uprzywilejowanego sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia oferowany przez Sprzedawcę), niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym Sprzedawca został poinformowany o decyzji Kupującego uprzywilejowanego o wykonaniu prawa odstąpienia od umowy.</li>
                    <li>Zwrotu płatności Sprzedawca dokona przy użyciu takich samych sposobów płatności, jakie zostały przez Kupującego uprzywilejowanego użyte w pierwotnej transakcji, chyba że Kupujący uprzywilejowany zgodzi się na inne rozwiązanie, w każdym przypadku Kupujący uprzywilejowany nie poniesie żadnych opłat w związku z tym zwrotem.</li>
                    <li>Jeżeli Sprzedawca nie zaproponował, że sam odbierze towar od Kupującego uprzywilejowanego, może wstrzymać się ze zwrotem płatności do czasu otrzymania towaru lub do czasu dostarczenia mu dowodu jego odesłania, w zależności od tego, które zdarzenie nastąpi wcześniej.</li>
                    <li>Sprzedawca prosi o zwracanie towaru na adres: ul. Graniczna 15A, 05-077 Warszawa niezwłocznie, a w każdym razie nie później niż 14 dni od dnia, w którym Kupujący uprzywilejowany poinformował Sprzedawcę o odstąpieniu od umowy sprzedaży. Termin jest zachowany, jeżeli Kupujący uprzywilejowany odeśle towar przed upływem terminu 14 dni.</li>
                    <li>Kupujący uprzywilejowany ponosi bezpośrednie koszty zwrotu towaru.</li>
                    <li>Kupujący uprzywilejowany odpowiada tylko za zmniejszenie wartości towaru wynikające z korzystania z niego w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru.</li>
                    <li>Jeśli towar ze względu na swój charakter nie może zostać odesłany w zwykłym trybie pocztą, Kupujący uprzywilejowany również będzie musiał ponieść bezpośrednie koszty zwrotu towarów. O szacowanej wysokości tych kosztów Kupujący uprzywilejowany zostanie poinformowany przez Sprzedawcę w opisie towaru w Sklepie lub podczas składania zamówienia.</li>
                    <li>W przypadku wystąpienia konieczności zwrotu środków za transakcję dokonaną przez Kupującego uprzywilejowanego kartą płatniczą, Sprzedawca dokona zwrotu na rachunek bankowy przypisany do tej karty płatniczej.</li>
                </ol>
            </div>

            <div id="wyjatki-od-prawa-odstapienia-od-umowy" className={styles.akapit}>
                <h2>8. Wyjątki od Prawa Odstąpienia od Umowy</h2>
                <ol>
                    <li>Prawo odstąpienia od umowy zawartej na odległość, o którym mowa w § 7 Regulaminu, nie przysługuje w odniesieniu do umowy:
                        <ol>
                            <li>w której przedmiotem świadczenia jest towar nieprefabrykowany, wyprodukowany według specyfikacji Kupującego uprzywilejowanego lub służący zaspokojeniu jego zindywidualizowanych potrzeb;</li>
                            <li>w której przedmiotem świadczenia jest towar ulegający szybkiemu zepsuciu lub mający krótki termin przydatności do użycia;</li>
                            <li>w której przedmiotem świadczenia jest towar dostarczany w zapieczętowanym opakowaniu, którego po otwarciu opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze względów higienicznych, jeżeli opakowanie zostało otwarte po dostarczeniu;</li>
                            <li>w której przedmiotem świadczenia są towary, które po dostarczeniu, ze względu na swój charakter, zostają nierozłącznie połączone z innymi rzeczami;</li>
                            <li>w której przedmiotem świadczenia są nagrania dźwiękowe lub wizualne albo programy komputerowe dostarczane w zapieczętowanym opakowaniu, jeżeli opakowanie zostało otwarte po dostarczeniu;</li>
                            <li>o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem umowy o prenumeratę;</li>
                            <li>w której cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którymi Sprzedawca nie sprawuje kontroli, i które mogą wystąpić przed upływem terminu do odstąpienia od umowy.</li>
                        </ol>
                    </li>
                </ol>
            </div >

            <div id="reklamacje" className={styles.akapit}>
                <h2>9. Reklamacje</h2>
                <p><b>I Postanowienia Ogólne</b><br /></p>
                <ol>
                    <li>Sprzedawca ponosi wobec Kupującego uprzywilejowanego odpowiedzialność za zgodność świadczenia z umową, przewidzianą przez powszechnie obowiązujące przepisy prawa, w tym zwłaszcza przez przepisy Ustawy o prawach konsumenta.</li>
                    <li>Sprzedawca prosi o składanie reklamacji (w tym dotyczących działania Sklepu) na adres pocztowy lub elektroniczny wskazany w § 2 Regulaminu.</li>
                    <li>Jeśli na produkt została udzielona gwarancja, informacja o niej, a także o jej warunkach, jest dostępna w Sklepie.</li>
                    <li>Sprzedawca ustosunkuje się do reklamacji w terminie 14 dni od dnia jej otrzymania.</li>
                </ol>
                <br />
                <p><b>II Kupujący Uprzywilejowani</b><br /></p>
                <ol style={{ listStyle: 'upper-alpha' }}>
                    <li>Towary
                        <ol style={{ listStyle: 'decimal' }}>
                            <li>W przypadku braku zgodności towaru z umową, Kupujący uprzywilejowany ma możliwość skorzystania z uprawnień określonych w rozdziale 5a Ustawy o prawach konsumenta.</li>
                            <li>Sprzedawca ponosi odpowiedzialność za brak zgodności towaru z umową, istniejący w chwili jego dostarczenia i ujawniony w ciągu dwóch lat od tej chwili, chyba że termin przydatności towaru do użycia, określony przez Sprzedawcę, jego poprzedników prawnych lub osoby działające w ich imieniu, jest dłuższy.</li>
                            <li>Na podstawie przepisów Ustawy o prawach konsumenta, w przypadku braku zgodności z umową, Kupujący uprzywilejowany może żądać:
                                <ul style={{ listStyle: 'lower-alpha' }}>
                                    <li>wymiany towaru,</li>
                                    <li>naprawy towaru.</li>
                                </ul>
                            </li>
                            <li>Dodatkowo, Kupujący uprzywilejowany może złożyć oświadczenie o:
                                <ul style={{ listStyle: 'lower-alpha' }}>
                                    <li>obniżeniu ceny,</li>
                                    <li>odstąpieniu od umowy</li>
                                    <p>w sytuacji, gdy:</p>
                                    <ul style={{ listStyle: 'disc' }}>
                                        <li>Sprzedawca odmówił doprowadzenia towaru do zgodności z umową zgodnie z art. 43d ust. 2 Ustawy o prawach konsumenta;</li>
                                        <li>Sprzedawca nie doprowadził towaru do zgodności z umową zgodnie z art. 43d ust. 4-6 Ustawy o prawach konsumenta;</li>
                                        <li>brak zgodności towaru z umową występuje nadal, pomimo że Sprzedawca próbował doprowadzić towar do zgodności z umową;</li>
                                        <li>brak zgodności towaru z umową jest na tyle istotny, że uzasadnia obniżenie ceny albo odstąpienie od umowy bez uprzedniego skorzystania ze środków ochrony określonych w art. 43d Ustawy o prawach konsumenta;</li>
                                        <li>z oświadczenia Sprzedawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on towaru do zgodności z umową w rozsądnym czasie lub bez nadmiernych niedogodności dla Kupującego uprzywilejowanego.</li>
                                    </ul>
                                </ul>
                            </li>
                            <li>W przypadku towaru podlegającego naprawie lub wymianie, Kupujący uprzywilejowany powinien udostępnić ten towar Sprzedawcy. Sprzedawca odbiera od Kupującego uprzywilejowanego towar na swój koszt.</li>
                            <li>Kupujący uprzywilejowany nie może odstąpić od umowy, jeżeli brak zgodności towaru z umową jest nieistotny.</li>
                            <li>W razie odstąpienia od umowy, o którym mowa w niniejszej sekcji (dotyczącej towarów), Kupujący uprzywilejowany niezwłocznie zwraca towar Sprzedawcy na jego koszt, na adres ul. Graniczna 15A, 05-077 Warszawa. Sprzedawca zwraca Kupującemu uprzywilejowanemu cenę niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania towaru lub dowodu jego odesłania.</li>
                            <li>Sprzedawca zwraca Kupującemu uprzywilejowanemu kwoty należne wskutek skorzystania z prawa obniżenia ceny niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia Kupującego uprzywilejowanego o obniżeniu ceny.</li>
                        </ol>
                    </li>
                    <br />
                    <li>Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń
                        <ol style={{ listStyle: 'decimal' }}>
                            <li>Sprzedawca informuje Konsumenta o możliwości skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. Zasady dostępu do tych procedur dostępne są w siedzibach lub na stronach internetowych podmiotów uprawnionych do pozasądowego rozpatrywania sporów. Konsument może skorzystać m.in. z:
                                <ol style={{ listStyle: 'disc' }}>
                                    <li>pomocy odpowiedniego Europejskiego Centrum Konsumenckiego z Sieci Europejskich Centrów Konsumenckich. Centra udzielają informacji o prawach konsumentów i pomagają w rozwiązaniu sporu w przypadku zakupów transgranicznych. Pomoc Europejskich Centrów Konsumenckich jest co do zasady bezpłatna. Lista Centrów Konsumenckich właściwych dla danego państwa znajduje się pod adresem: <Link to="https://konsument.gov.pl/eck-w-europie/">https://konsument.gov.pl/eck-w-europie/</Link></li>
                                    <li>internetowej platformy ODR (Online Dispute Resolution), zapewnianej przez Komisję Europejską, dostępnej pod adresem: <Link to="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</Link></li>
                                    <br /><p>Ponadto, na terenie Rzeczypospolitej Polskiej można skorzystać z następujących form wsparcia:</p><br />
                                    <li>mediacji prowadzonej przez właściwy terenowo Wojewódzki Inspektorat Inspekcji Handlowej, do którego należy się zwrócić z wnioskiem o mediację. Co do zasady postępowanie jest bezpłatne. Wykaz Inspektoratów znajduje się tutaj: <Link to="https://uokik.gov.pl/wojewodzkie_inspektoraty_inspekcji_handlowej.php">https://uokik.gov.pl/wojewodzkie_inspektoraty_inspekcji_handlowej.php</Link></li>
                                    <li>pomocy właściwego terenowo stałego polubownego sądu konsumenckiego działającego przy Wojewódzkim Inspektoracie Inspekcji Handlowej, do którego należy złożyć wniosek o rozpatrzenie sprawy przed sądem polubownym. Co do zasady postępowanie jest bezpłatne. Wykaz sądów dostępny jest pod adresem: <Link to="https://uokik.gov.pl/stale_sady_polubowne.php">https://uokik.gov.pl/stale_sady_polubowne.php</Link></li>
                                </ol>
                            </li>
                            <li>Poprzednie postanowienie ma charakter informacyjny i nie stanowi zobowiązania Sprzedawcy do skorzystania z pozasądowych sposobów rozwiązywania sporów.</li>
                            <li>Skorzystanie z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń jest dobrowolne zarówno dla Sprzedawcy jak i Konsumenta.</li>
                            <li>Konsument może dodatkowo skorzystać z bezpłatnej pomocy miejskiego lub powiatowego rzecznika konsumentów.</li>
                        </ol>
                    </li>
                </ol>
                <br />
                <p><b>III KUPUJĄCY INNI NIŻ KUPUJĄCY UPRZYWILEJOWANI</b><br /></p>
                <ol>
                    <li>W przypadku wystąpienia wady towaru, Kupujący inny niż Kupujący uprzywilejowany ma możliwość reklamowania wadliwego towaru na podstawie uregulowanej w Kodeksie cywilnym rękojmi.</li>
                    <li>Wobec Kupującego innego niż Kupujący uprzywilejowany Sprzedawca odpowiada z tytułu rękojmi, jeżeli wada fizyczna zostanie stwierdzona przed upływem dwóch lat od dnia wydania towaru Kupującemu.</li>
                    <li>Zgodnie z Kodeksem cywilnym, Kupujący będący przedsiębiorcą innym niż Przedsiębiorca uprzywilejowany, traci uprawnienia z tytułu rękojmi, jeżeli nie zbadał towaru w czasie i w sposób przyjęty przy towarach tego rodzaju i nie zawiadomił niezwłocznie Sprzedawcy o wadzie, a w przypadku gdy wada wyszła na jaw dopiero później - jeżeli nie zawiadomił Sprzedawcy niezwłocznie po jej stwierdzeniu. Do zachowania powyższego terminu wystarczy wysłanie przed jego upływem zawiadomienia o wadzie.</li>
                    <li>Korzystając z rękojmi, Kupujący inny niż Kupujący uprzywilejowany może, na zasadach określonych w Kodeksie cywilnym:</li>
                    <li>złożyć oświadczenie o obniżeniu ceny,</li>
                    <li>przy wadzie istotnej - złożyć oświadczenie o odstąpieniu od umowy,</li>
                    <li>żądać wymiany towaru na wolny od wad,</li>
                    <li>żądać usunięcia wady.</li>
                    <li>Jeśli okaże się, że dla rozpatrzenia reklamacji konieczne jest dostarczenie wadliwego towaru do Sprzedawcy, Kupujący inny niż Kupujący uprzywilejowany jest zobowiązany do dostarczenia tego towaru na adres ul. Graniczna 15A, 05-077 Warszawa.</li>
                </ol>
            </div >

            <div id="dane-osobowe" className={styles.akapit}>
                <h2>10. Dane Osobowe</h2>
                <ol>
                    <li>Administratorem danych osobowych przekazanych przez Kupującego podczas korzystania ze Sklepu jest Sprzedawca. Szczegółowe informacje dotyczące przetwarzania danych osobowych przez Sprzedawcę – w tym o pozostałych celach oraz podstawach przetwarzania danych, a także o odbiorcach danych – znajdują się w dostępnej w Sklepie polityce prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu Parlamentu Europejskiego i Rady (UE) o ochronie danych – „RODO”.</li>
                    <li>Celem przetwarzania danych Kupującego przez Sprzedawcę, podanych przez Kupującego w związku z zakupami w Sklepie, jest realizacja zamówień. Podstawą przetwarzania danych osobowych w tym przypadku jest:
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>umowa lub działania podejmowane na żądanie Kupującego, zmierzające do jej zawarcia (art. 6 ust. 1 lit. b RODO),</li>
                            <li>ciążący na Sprzedawcy obowiązek prawny związany z rachunkowością (art. 6 ust. 1 lit. c RODO) oraz</li>
                            <li>prawnie uzasadniony interes Sprzedawcy, polegający na przetwarzaniu danych w celu ustalenia, dochodzenia lub obrony ewentualnych roszczeń (art. 6 ust. 1 lit. f RODO).</li>
                        </ul>
                    </li>
                    <li>Podanie danych przez Kupującego jest dobrowolne, ale jednocześnie konieczne do zawarcia umowy. Niepodanie danych uniemożliwi zawarcie umowy w Sklepie.</li>
                    <li>Dane Kupującego podane w związku z zakupami w Sklepie będą przetwarzane do momentu, w którym:
                        <ul style={{ listStyleType: "lower-alpha" }}>
                            <li>przestanie obowiązywać umowa zawarta między Kupującym a Sprzedawcą;</li>
                            <li>na Sprzedawcy przestanie ciążyć obowiązek prawny, zobowiązujący go do przetwarzania danych Kupującego;</li>
                            <li>ustanie możliwość dochodzenia roszczeń przez Kupującego lub Sprzedawcę, związanych z umową zawartą przez Sklep;</li>
                            <li>zostanie przyjęty sprzeciw Kupującego wobec przetwarzania jego danych osobowych – w przypadku gdy podstawą przetwarzania danych był uzasadniony interes Sprzedawcy</li>
                            <p>– w zależności od tego, co ma zastosowanie w danym przypadku.</p>
                        </ul>
                    </li>
                    <li>Kupującemu przysługuje prawo żądania:
                        <ul style={{ listStyleType: "lower-alpha" }}>
                            <li>dostępu do swoich danych osobowych,</li>
                            <li>ich sprostowania,</li>
                            <li>usunięcia,</li>
                            <li>ograniczenia przetwarzania,</li>
                            <li>przeniesienia danych do innego administratora</li>
                            <li>a także prawo:</li>
                            <li>wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania danych z przyczyn związanych ze szczególną sytuacją Kupującego – wobec przetwarzania dotyczących go danych osobowych, opartego na art. 6 ust. 1 lit. f RODO (tj. na prawnie uzasadnionych interesach realizowanych przez Sprzedawcę).</li>
                        </ul>
                    </li>
                    <li>W celu realizacji swoich praw, Kupujący powinien skontaktować się ze Sprzedawcą przy wykorzystaniu danych z § 2 Regulaminu.</li>
                    <li>W przypadku gdy Kupujący uzna, że jego dane są przetwarzane niezgodnie z prawem, Kupujący może złożyć skargę do organu właściwego dla ochrony danych osobowych. W Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych.</li>
                </ol>
            </div >

            <div id="zastrzezenia" className={styles.akapit}>
                <h2>11. Zastrzeżenia</h2>
                <ol>
                    <li>Zakazane jest dostarczanie przez Kupującego treści o charakterze bezprawnym.</li>
                    <li>Każdorazowo składane w Sklepie zamówienie stanowi odrębną umowę i wymaga osobnej akceptacji Regulaminu. Umowa zawierana jest na czas i w celu realizacji zamówienia.</li>
                    <li>Wszelkie umowy zawierane na podstawie niniejszego Regulaminu podlegają przepisom prawa polskiego, z zastrzeżeniem ust. 4.</li>
                    <li>Wybór prawa polskiego dla umów zawartych na podstawie Regulaminu z Konsumentem nie uchyla i nie ogranicza praw tego Kupującego, przysługujących mu na podstawie bezwzględnie obowiązujących przepisów prawa, znajdujących zastosowanie dla Konsumenta w sytuacji, w których nie ma miejsca wybór prawa. Oznacza to w szczególności, że jeśli właściwe dla danego Konsumenta przepisy krajowe przewidują ochronę szerszą niż wynikająca z niniejszego Regulaminu lub prawa polskiego – stosuje się tę ochronę szerszą.</li>
                    <li>Umowy zawierane na podstawie Regulaminu zawierane są w języku polskim.</li>
                    <li>W przypadku ewentualnego sporu z Kupującym niebędącym Kupującym uprzywilejowanym, związanego z umową zawartą za pośrednictwem Sklepu, sądem właściwym będzie sąd właściwy dla siedziby Sprzedawcy.</li>
                </ol>
            </div >

            <div id="zalaczniki" className={styles.akapit}>
                <h2>12. Załączniki</h2>
                <ol>
                    <li><Link to="/pdf/formularz_odstapienia_od_umowy.pdf" target="_blank">Formularz Odstapienia od Umowy - Kliknij aby pobrać</Link></li>
                </ol>
            </div >

            <br /><p>Niniejszy dokument został wygenerowany za pomocą Kreatora Legal Geek dnia 09.03.2024</p>
        </div >
    )
}

