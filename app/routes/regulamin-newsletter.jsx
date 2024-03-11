import { Link } from "@remix-run/react"
import styles from "~/styles/pages/legal.module.css"

export default function PolitykaZwrotów() {
    return (
        <div className={`${styles.legal} smallContainer`}>
            <h1>Regulamin Newsletter Jazba</h1>

            <div className={styles.contents}>
                <p>Spis treści:</p>
                <ol>
                    <li><Link to="#definicje">Definicje</Link></li>
                    <li><Link to="#kontakt-z-uslugodawca">Kontakt z Usługodawcą</Link></li>
                    <li><Link to="#wymogi-techniczne">Wymogi Techniczne</Link></li>
                    <li><Link to="#Umwoa">Umowa</Link></li>
                    <li><Link to="#reklamacje">Reklamacje</Link></li>
                    <li><Link to="#prawo-odstapienia-od-umowy">Prawo Odstąpienia od Umowy</Link></li>
                    <li><Link to="#dane-osobowe">Dane Osobowe</Link></li>
                    <li><Link to="#zmiania-w-regulaminie-lub-koncie">Zmiana w Regulaminie lub Koncie</Link></li>
                    <li><Link to="#postanowienia-koncowe">Postanowienia Końcowe</Link></li>
                    <li><Link to="#zalaczniki">Załączniki</Link></li>
                </ol>
            </div>

            <div id="definicje" className={styles.akapit}>
                <h2>1. Definicje</h2>
                <ol style={{ listStyle: "none" }}>
                    <li><strong>Konsument</strong> – Usługobiorca będący osobą fizyczną, który zawarł Umowę lub podejmuje czynności zmierzające do jej zawarcia, bez bezpośredniego związku z jego działalnością gospodarczą lub zawodową.</li>
                    <li><strong>Newsletter</strong> – wiadomości dotyczące Sklepu, w tym informacje o ofertach, promocjach oraz nowościach w Sklepie, dostarczane nieodpłatnie Usługobiorcy przez Usługodawcę w ramach Umowy, stanowiące treści cyfrowe w rozumieniu Ustawy o prawach konsumenta.</li>
                    <li><strong>Przedsiębiorca uprzywilejowany</strong> - Usługobiorca, który jest osobą fizyczną zawierającą Umowę (lub podejmującą czynności zmierzające do jej zawarcia), bezpośrednio związaną z jej działalnością gospodarczą, ale nieposiadającą dla niej charakteru zawodowego.</li>
                    <li><strong>Regulamin</strong> – niniejszy regulamin.</li>
                    <li><strong>Sklep</strong> – sklep internetowy Jazba Fashion prowadzony przez Usługodawcę pod adresem https://www.jazba.pl.</li>
                    <li><strong>Umowa</strong> – umowa o dostarczanie Newslettera.</li>
                    <li><strong>Usługobiorca</strong> – każdy podmiot, który zawarł Umowę lub podejmuje czynności zmierzające do jej zawarcia.</li>
                    <li><strong>Usługobiorca uprzywilejowany</strong> – Usługobiorca, który jest Konsumentem lub Przedsiębiorcą uprzywilejowanym.</li>
                    <li><strong>Usługodawca</strong> – AGATA ROZENEK, przedsiębiorca prowadzący działalność gospodarczą pod firmą Agata Rozenek, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzonej przez ministra właściwego do spraw gospodarki i prowadzenia Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP 1132815981, nr REGON 522023534, ul. Graniczna 15A, 05-077 Warszawa.</li>
                    <li><strong>Ustawa o prawach konsumenta</strong> – polska ustawa z dnia 30 maja 2014 r. o prawach konsumenta.</li>
                </ol>
            </div>

            <div id="kontakt-z-uslugodawca" className={styles.akapit}>
                <h2>2. Kontakt z Usługodawcą</h2>
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
                            <li>aktywne konto email</li>
                            <li>urządzenie z dostępem do Internetu</li>
                            <li>przeglądarka internetowa obsługująca JavaScript oraz pliki cookies.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div id="umowa" className={styles.akapit}>
                <h2>4. Umowa</h2>
                <ol>
                    <li>Usługobiorca może dobrowolnie zapisać się do Newslettera.</li>
                    <li>W celu otrzymania Newslettera konieczne jest zawarcie Umowy.</li>
                    <li>Wiadomości e-mail wysyłane w ramach Umowy kierowane będą na adres e-mail podany przez Usługobiorcę w momencie zawierania Umowy.</li>
                    <li>Usługobiorca, w celu zawarcia Umowy, w pierwszym kroku podaje w przeznaczonym do tego miejscu w Sklepie swój adres e-mail, na który chce otrzymywać wiadomości przesyłane w ramach Umowy. W momencie zapisu na Newsletter zostaje zawarta Umowa na czas nieoznaczony, a Usługodawca rozpocznie jej świadczenie na rzecz Usługobiorcy – z zastrzeżeniem ust. 5.</li>
                    <li>W celu właściwej realizacji Umowy Usługobiorca jest obowiązany podać swój prawidłowy adres e-mail.</li>
                    <li>Newsletter jest dostarczany niezwłocznie po utworzeniu przez Usługodawcę wiadomości przeznaczonych dla Usługobiorców.</li>
                    <li>Usługobiorca może wypisać się z Newslettera bez podawania przyczyny i ponoszenia jakichkolwiek kosztów, w każdym momencie, wysyłając wiadomość na adres e-mail Usługodawcy podany w § 2 Regulaminu.</li>
                    <li>Wysłanie wiadomości z żądaniem wypisania z Newslettera będzie skutkować niezwłocznym rozwiązaniem Umowy.</li>
                </ol>
            </div>

            <div id="reklamacje" className={styles.akapit}>
                <h2>5. Reklamacje</h2>
                <p><b>I Postanowienia Ogólne</b><br /></p>
                <ol>
                    <li>Usługodawca prosi o składanie reklamacji dotyczących Konta na adres pocztowy lub elektroniczny wskazany w § 2 Regulaminu.</li>
                    <li>Usługodawca ustosunkuje się do reklamacji w terminie 14 dni od otrzymania zgłoszenia reklamacyjnego.</li>
                </ol>
                <br />
                <p><b>II Kupujący Uprzywilejowani</b><br /></p>
                <ol>
                    <li>Usługodawca ponosi wobec Usługobiorcy uprzywilejowanego odpowiedzialność za zgodność świadczenia z umową, przewidzianą przez powszechnie obowiązujące przepisy prawa, w tym zwłaszcza przez przepisy Ustawy o prawach konsumenta.</li>
                    <li>W przypadku niewłaściwej realizacji przez Usługodawcę umowy o prowadzenie Konta, Usługobiorca uprzywilejowany ma możliwość skorzystania z uprawnień uregulowanych w rozdziale 5b Ustawy o prawach konsumenta.</li>
                    <li>Jeżeli Usługodawca nie dostarczył usługi cyfrowej, Usługobiorca uprzywilejowany może wezwać go do jej dostarczenia. Jeżeli mimo to Usługodawca nie dostarczy usługi cyfrowej niezwłocznie lub w dodatkowym, wyraźnie uzgodnionym przez Usługodawcę i Usługobiorcę uprzywilejowanego terminie, Usługobiorca uprzywilejowany może odstąpić od umowy o prowadzenie Konta.</li>
                    <li>Usługobiorca uprzywilejowany może odstąpić od umowy o prowadzenie Konta bez wzywania do dostarczenia usługi cyfrowej, jeżeli:
                        <ol style={{ listStyle: 'lower-alpha' }}>
                            <li>z oświadczenia Usługodawcy lub okoliczności wyraźnie wynika, że nie dostarczy usługi cyfrowej lub</li>
                            <li>Usługobiorca uprzywilejowany i Usługodawca uzgodnili lub z okoliczności zawarcia umowy o prowadzenie Konta wyraźnie wynika, że określony termin dostarczenia usługi cyfrowej miał istotne znaczenie dla Usługobiorcy uprzywilejowanego, a Usługodawca nie dostarczył jej w tym terminie.</li>
                        </ol>
                    </li>
                    <li>Usługodawca ponosi odpowiedzialność za brak zgodności z umową o prowadzenie Konta usługi cyfrowej dostarczanej w sposób ciągły, który wystąpił lub ujawnił się w czasie, w którym zgodnie z tą umową usługa miała być dostarczana.</li>
                    <li>Jeśli usługa cyfrowa jest niezgodna z umową o prowadzenie Konta, Usługobiorca uprzywilejowany może żądać jej doprowadzenia do zgodności z tą umową.</li>
                    <li>W przypadku braku zgodności usługi cyfrowej z umową o prowadzenie Konta Usługobiorca uprzywilejowany ma obowiązek współpracy z Usługodawcą, w rozsądnym zakresie i przy zastosowaniu najmniej uciążliwych dla siebie środków technicznych, w celu ustalenia, czy brak zgodności usługi cyfrowej z umową o prowadzenie Konta w odpowiednim czasie wynika z cech środowiska cyfrowego Usługobiorcy uprzywilejowanego.</li>
                    <li>Dodatkowo, jeżeli usługa cyfrowa jest niezgodna z umową o prowadzenie Konta, Usługobiorca uprzywilejowany może złożyć oświadczenie o odstąpieniu od tej umowy, gdy:
                        <ol style={{ listStyle: 'lower-alpha' }}>
                            <li>doprowadzenie do zgodności usługi cyfrowej z umową o prowadzenie Konta jest niemożliwe albo wymaga nadmiernych kosztów stosownie do art. 43m ust. 2 i 3 Ustawy o prawach konsumenta;</li>
                            <li>Usługodawca nie doprowadził usługi cyfrowej do zgodności z umową o prowadzenie Konta w rozsądnym czasie od chwili, w której Usługodawca został poinformowany przez Usługobiorcę uprzywilejowanego o braku zgodności z tą umową, i bez nadmiernych niedogodności dla Usługobiorcy uprzywilejowanego, uwzględniając charakter oraz cel tej usługi cyfrowej, w jakim jest wykorzystywana;</li>
                            <li>brak zgodności usługi cyfrowej z umową o prowadzenie Konta występuje nadal, mimo że Usługodawca próbował doprowadzić usługę cyfrową do zgodności z tą umową;</li>
                            <li>brak zgodności usługi cyfrowej z umową o prowadzenie Konta jest na tyle istotny, że uzasadnia odstąpienie od umowy o prowadzenie Konta bez uprzedniego skorzystania ze środka ochrony określonego w art. 43m Ustawy o prawach konsumenta (tj. żądania doprowadzenia usługi cyfrowej do zgodności z umową);</li>
                            <li>z oświadczenia Usługodawcy lub okoliczności wyraźnie wynika, że nie doprowadzi on usługi cyfrowej do zgodności z umową o prowadzenie Konta w rozsądnym czasie lub bez nadmiernych niedogodności dla Usługobiorcy uprzywilejowanego.</li>
                        </ol>
                    </li>
                </ol>
                <br />
                <p><b>III POZASĄDOWE SPOSOBY ROZPATRYWANIA REKLAMACJI I DOCHODZENIA ROSZCZEŃ</b><br /></p>
                <ol>
                    <li>Usługodawca informuje Konsumenta o możliwości skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. Zasady dostępu do tych procedur dostępne są w siedzibach lub na stronach internetowych podmiotów uprawnionych do pozasądowego rozpatrywania sporów. Konsument może skorzystać m.in. z:
                        <ul style={{ listStyle: 'disc' }}>
                            <li>pomocy odpowiedniego Europejskiego Centrum Konsumenckiego z Sieci Europejskich Centrów Konsumenckich. Centra udzielają informacji o prawach konsumentów i pomagają w rozwiązaniu sporu w przypadku zakupów transgranicznych. Pomoc Europejskich Centrów Konsumenckich jest co do zasady bezpłatna. Lista Centrów Konsumenckich właściwych dla danego państwa znajduje się pod adresem: <Link to="https://konsument.gov.pl/eck-w-europie">https://konsument.gov.pl/eck-w-europie/</Link></li>
                            <li>internetowej platformy Online Dispute Resolution (ODR), zapewnianej przez Komisję Europejską, dostępnej pod adresem: <Link to="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</Link></li>
                            <li>mediacji prowadzonej przez właściwy terenowo Wojewódzki Inspektorat Inspekcji Handlowej, do którego należy się zwrócić z wnioskiem o mediację. Co do zasady postępowanie jest bezpłatne. Wykaz Inspektoratów znajduje się tutaj: <Link to="https://uokik.gov.pl/wojewodzkie_inspektoraty_inspekcji_handlowej.php">https://uokik.gov.pl/wojewodzkie_inspektoraty_inspekcji_handlowej.php</Link></li>
                            <li>pomocy właściwego terenowo stałego polubownego sądu konsumenckiego działającego przy Wojewódzkim Inspektoracie Inspekcji Handlowej, do którego należy złożyć wniosek o rozpatrzenie sprawy przed sądem polubownym. Co do zasady postępowanie jest bezpłatne. Wykaz sądów dostępny jest pod adresem: <Link to="https://uokik.gov.pl/stale_sady_polubowne.php">https://uokik.gov.pl/stale_sady_polubowne.php</Link></li>
                        </ul>
                    </li>
                    <li>Poprzednie postanowienie ma charakter informacyjny i nie stanowi zobowiązania Usługodawcy do skorzystania z pozasądowych sposobów rozwiązywania sporów.</li>
                    <li>Skorzystanie z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń jest dobrowolne zarówno dla Usługodawcy jak i Konsumenta.</li>
                    <li>Konsument może dodatkowo skorzystać z bezpłatnej pomocy miejskiego lub powiatowego rzecznika konsumentów.</li>
                </ol>
            </div>

            <div id="prawo-odstapienia-od-umowy" className={styles.akapit}>
                <h2>6. Prawo Odstąpienia od Umowy</h2>
                <ol>
                    <li>Usługobiorca uprzywilejowany ma prawo odstąpić od zawartej z Usługodawcą umowy o prowadzenie Konta, w terminie 14 dni bez podania jakiejkolwiek przyczyny.</li>
                    <li>Termin do odstąpienia od umowy o prowadzenie Konta wygasa po upływie 14 dni od dnia zawarcia tej umowy.</li>
                    <li>Aby Usługobiorca uprzywilejowany mógł skorzystać z prawa odstąpienia od umowy, musi poinformować Usługodawcę, korzystając z danych podanych w § 2 Regulaminu, o swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego oświadczenia (na przykład pismo wysłane pocztą lub pocztą elektroniczną).</li>
                    <li>Usługobiorca uprzywilejowany może skorzystać z wzoru formularza odstąpienia od umowy umieszczonego na końcu Regulaminu, jednak nie jest to obowiązkowe.</li>
                    <li>Aby zachować termin do odstąpienia od umowy wystarczy, że Usługobiorca uprzywilejowany wyśle informację dotyczącą wykonania przysługującego mu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od umowy.</li>
                </ol>
            </div>

            <div id="dane-osobowe" className={styles.akapit}>
                <h2>7. Dane Osobowe</h2>
                <ol>
                    <li>Administratorem danych osobowych przekazanych przez Usługobiorcę w związku z zawarciem umowy o prowadzenie Konta jest Usługodawca. Szczegółowe informacje dotyczące przetwarzania danych osobowych przez Usługodawcę – w tym o pozostałych celach oraz podstawach przetwarzania danych, a także o odbiorcach danych, znajdują się w dostępnej w Sklepie polityce prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu Parlamentu Europejskiego i Rady (UE) o ochronie danych – „RODO”.</li>
                    <li>Celem przetwarzania danych Usługobiorcy jest prowadzenie Konta. Podstawą przetwarzania danych osobowych w tym przypadku jest umowa o prowadzenie Konta lub działania podejmowane na żądanie Usługobiorcy, zmierzające do jej zawarcia (art. 6 ust. 1 lit. b RODO), a także prawnie uzasadniony interes Usługodawcy, polegający na przetwarzaniu danych w celu ustalenia, dochodzenia lub obrony ewentualnych roszczeń (art. 6 ust. 1 lit. f RODO).</li>
                    <li>Podanie danych przez Usługobiorcę jest dobrowolne, ale jednocześnie konieczne do zawarcia umowy o prowadzenie Konta i świadczenia usług nią objętych. Niepodanie danych oznacza, że umowa o prowadzenie Konta nie będzie mogła być zawarta, Usługodawca nie będzie mógł świadczyć usług nią objętych.</li>
                    <li>Dane Usługobiorcy będą przetwarzane do momentu, w którym:
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>przestanie obowiązywać umowa o prowadzenie Konta;</li>
                            <li>ustanie możliwość dochodzenia roszczeń przez Usługobiorcę lub Usługodawcę, związanych z Kontem;</li>
                            <li>zostanie przyjęty sprzeciw Usługobiorcy wobec przetwarzania jego danych osobowych – w przypadku gdy podstawą przetwarzania danych był uzasadniony interes Usługodawcy</li>
                            <p>– w zależności od tego, co ma zastosowanie w danym przypadku.</p>
                        </ol>
                    </li>
                    <li>Usługobiorcy przysługuje prawo żądania:
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>dostępu do swoich danych osobowych,</li>
                            <li>ich sprostowania,</li>
                            <li>usunięcia,</li>
                            <li>ograniczenia przetwarzania,</li>
                            <li>przeniesienia danych do innego administratora</li>
                            <p>a także prawo:</p>
                            <li>wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania danych z przyczyn związanych ze szczególną sytuacją Usługobiorcy – wobec przetwarzania dotyczących go danych osobowych, opartego na art. 6 ust. 1 lit. f RODO (tj. na prawnie uzasadnionych interesach realizowanych przez Usługodawcę).</li>
                        </ol>
                    </li>
                    <li>W celu realizacji swoich praw, Usługobiorca powinien skontaktować się z Usługodawcą.</li>
                    <li>W przypadku gdy Usługobiorca uzna, że jego dane są przetwarzane niezgodnie z prawem, Usługobiorca może złożyć skargę do organu właściwego dla ochrony danych osobowych. W Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych.</li>
                </ol>
            </div>

            <div id="zmiania-w-regulaminie-lub-koncie" className={styles.akapit}>
                <h2>8. Zmiana w Regulaminie lub Koncie</h2>
                <ol>
                    <li>Usługodawca zastrzega sobie prawo do zmiany Regulaminu tylko z ważnych przyczyn. Jako ważną przyczynę rozumie się konieczność zmiany Regulaminu spowodowaną:
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                            <li>zmianą funkcjonalności Konta, wymagającą modyfikacji Regulaminu lub</li>
                            <li>zmianą przepisów prawa, mającą wpływ na realizację umowy o prowadzenie Konta przez Usługodawcę lub dostosowaniem usług do zaleceń, wytycznych, nakazów lub zakazów, orzeczeń, postanowień, interpretacji lub decyzji uprawnionych władz publicznych lub</li>
                            <li>zmianą danych kontaktowych lub identyfikacyjnych Usługodawcy.</li>
                        </ol>
                    </li>
                    <li>Informacja o planowanej zmianie Regulaminu zostanie wysłana na adres e-mail Usługobiorcy przypisany do Konta co najmniej na 7 dni przed wprowadzeniem zmian w życie.</li>
                    <li>W przypadku gdy Usługobiorca nie sprzeciwi się planowanym zmianom do chwili wejścia ich w życie, przyjmuje się, że akceptuje je, co nie stanowi żadnej przeszkody do rozwiązania umowy w przyszłości.</li>
                    <li>W przypadku braku akceptacji dla planowanych zmian, Usługobiorca powinien wysłać informację o tym na adres e-mail Usługodawcy podany w § 2 Regulaminu, co będzie skutkować rozwiązaniem umowy o prowadzenia Konta z chwilą wejścia w życie planowanych zmian.</li>
                    <li>Usługodawca może dokonać zmiany Konta, która nie jest niezbędna do zachowania jego zgodności z umową o prowadzenie Konta, z przyczyny wskazanej w ust. 1 lit. b lub z powodu zmiany funkcjonalności Konta. Wprowadzenie zmiany, o której mowa w zdaniu poprzednim, nie będzie się wiązać z jakimikolwiek kosztami po stronie Usługobiorcy uprzywilejowanego. Postanowienie ust. 2-4 stosuje się odpowiednio.</li>
                    <li>Jeżeli zmiana, o której mowa w ust. 5, istotnie i negatywnie wpływa na dostęp Usługobiorcy uprzywilejowanego do Konta lub korzystanie z niego, Usługodawca wyśle na adres e-mail Usługobiorcy uprzywilejowanego, z odpowiednim wyprzedzeniem, na trwałym nośniku, informację o właściwościach i terminie dokonania tej zmiany oraz prawach przysługujących w związku z tą zmianą Usługobiorcy uprzywilejowanemu.</li>
                </ol>
            </div >

            <div id="postanowienia-koncowe" className={styles.akapit}>
                <h2>9. Postanowienia Końcowe</h2>
                <ol>
                    <li>Zakazane jest dostarczanie przez Usługobiorcę treści o charakterze bezprawnym.</li>
                    <li>Umowa o prowadzenie Konta zawierana jest w języku polskim.</li>
                    <li>Umowa zawierana na podstawie niniejszego Regulaminu podlega przepisom prawa polskiego, z zastrzeżeniem ust. 4.</li>
                    <li>Wybór prawa polskiego dla umowy zawartej na podstawie Regulaminu z Konsumentem nie uchyla i nie ogranicza praw Konsumenta przysługujących mu na podstawie bezwzględnie obowiązujących przepisów prawa, znajdujących zastosowanie dla Konsumenta w sytuacji, w której nie ma miejsca wybór prawa. Oznacza to w szczególności, że jeśli właściwe dla danego Konsumenta przepisy krajowe przewidują ochronę szerszą niż wynikająca z niniejszego Regulaminu lub prawa polskiego – stosuje się tę ochronę szerszą.</li>
                    <li>W przypadku ewentualnego sporu z Usługobiorcą niebędącym Usługobiorcą uprzywilejowanym, związanego z umową o prowadzenie Konta, sądem właściwym będzie sąd właściwy dla siedziby Usługodawcy.</li>
                </ol>
            </div >

            <div id="zalaczniki" className={styles.akapit}>
                <h2>10. Załączniki</h2>
                <ol>
                    <li><Link to="/pdf/formularz_odstapienia_od_umowy.pdf" target="_blank">Formularz Odstapienia od Umowy - Kliknij aby pobrać</Link></li>
                </ol>
            </div >

            <br /><p>Niniejszy dokument został wygenerowany za pomocą Kreatora Legal Geek dnia 09.03.2024</p>
        </div >
    )
}

