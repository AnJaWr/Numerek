import React from 'react';
import { Col } from 'react-grid-system';

const InspirujacyCytat = () => {

    let cytat = [
        'Bardzo mało ludzi umie myśleć, ale jakiś pogląd chce mieć każdy. I cóż pozostaje innego, jak przejąć gotowy pogląd od innych, zamiast wypracować go samemu ?',
        'Na świecie ma się do wyboru tylko samotność albo pospolitość',
        'Kto jest ok­rutny w sto­sun­ku do zwierząt, ten nie może być dob­rym człowiekiem.',
        'Doprawdy, nie ma tak absurdalnego poglądu, którego ludzie by nie przyjęli jako własny, o ile tylko potrafi im się wmówić, że pogląd ten został przyjęty przez ogół.',
        'Wol­nym bo­wiem jest człowiek tyl­ko wte­dy, gdy jest samotny.',
        'Każdy dzień to od­ro­bina życia: każde prze­budze­nie, to od­ro­bina na­rodzin, każdy po­ranek, to od­ro­bina młodości, każdy sen zaś, to na­mias­tka śmierci.',
        'Ma­li ludzie czer­pią ol­brzy­mią ra­dość z błędów i gaf po­pełnianych przez ludzi wielkich.',
        'Pełno na ziemi ludzi, co nie zasługują by do nich mówić.',
        'Po innych bowiem ludziach, w ogóle po świecie zewnętrznym, nie należy w żadnym wypadku oczekiwać zbyt wiele.',
        'Samotność jest przeznaczeniem wszystkich wybitnych duchów: od czasu do czasu boleją nad nią, zawsze jednak ją wybiorą, jako mniejsze zło.',
        'Świat jest moim wyobrażeniem.',
        'Towarzyskość należy do niebezpiecznych, ba, nawet do zgubnych skłonności, gdyż styka nas z istotami, które są przeważnie pod względem moralnym złe, pod intelektualnym zaś tępe lub głupie.',
        'Nasze życie można też ująć jako niepotrzebny epizod zakłócający błogi spokój nicości.',
        'Moim praw­dzi­wym obo­wiązkiem jest oca­lić włas­ne marzenia.',
        ' Czytanie to tylko namiastka samodzielnego myślenia.Pozwalamy przy nim prowadzić swoje myśli komu innemu na smyczy... ',
        'Los jest okrutny, a ludzie żałośni.',
        'Całkiem sobą każdy może być tylko dopóty, dopóki jest sam; kto zatem nie lubi samotności, ten nie kocha też wolności.',
        'Ludzie gadają, zanim pomyślą; jeżeli zaś potem widzą, że twierdzenie ich było błędne i że nie mają racji, to pragną jednak, aby się chociaż wydawało, jak gdyby było na odwrót.',
        'Świat nie jest robotą na zamówienie, a zwierzęta nie są fabrykatem do naszego użytku.',
        'Na ogół każdy człowiek jest w tej mierze lubiany, w jakiej obniża wymagania stawiane cudzym umysłom i sercom, ale na serio bez obłudy, a także bez owej pobłażliwości, którą rodzi pogarda.',
        '[...] jedna jest tylko droga, aby pokazać głupcom i durniom własny rozum, a polega ona na tym, by z nimi nie mówić.Prawdą jest jednak, że wtedy człowiek czuje się nieraz w towarzystwie jak tancerz, który na balu spotyka samych kulawych: z kimże ma tańczyć ?',
        'I  co oznacza tu głos stu milionów ludzi? Tyle, ile np.opinia stu historyków, nim się udowodni, że przepisywali jeden od drugiego, a u podłoża istniała tylko jedna wypowiedź.',
        'Każdy człowiek powinien postrzegać siebie jako istotę której istnienie jest konieczne ',
        'Obiektywna prawda jakiegoś twierdzenia a przekonanie o jego"słuszności" dyskutantów i słuchaczy — są to bardzo odmienne sprawy.Skąd się to bierze?— Stąd, iż człowiek jest zły z natury.',
        'Niejednemu z nas, szczególnie w chwilach hipochondrii, świat może się wydawać z estetycznego punktu widzenia gabinetem karykatur, z intelektualnego - domem obłąkanych, zaś z moralnego - jaskinią oszustów i zbrodniarzy. Jeśli usposobienie takie trwa czas dłuższy, to przeradza się w mizantropię.',
        'Los jest okrutny, a ludzie żałośni.W świecie tak urządzonym człowiek wewnętrznie bogaty jest jak jasna, ciepła, wesoła izba w śnieżną, mroźną noc Bożego Narodzenia.',
        'Niejeden człowiek byłby w stanie zabić bliźniego w tym celu, aby jego tłuszczem wysmarować sobie buty.',
        'Zwycięstwo zawdzięczamy nie duszności rozumowania przy prezentacji stwierdzenia, lecz chytrości i zręczności w jego obronie.',
        'Powstrzymywanie się od pokarmu przynosi zdrowie ciału, a od ludzi spokój duszy.',
        'Dzięki temu, co czynimy, dowiadujemy się tylko, czem jesteśmy.',
        'Głosić moralność jest łatwo, uzasadnić trudno.',
        'Łut woli znaczy więcej niż centaur rozumu i przekonania.',
        'Dobra moralność bywała głoszona często i po wszystkie czasy, ale jej uzasadnienie zawsze pozostawiało wiele do życzenia.',
        'Nie ma dla człowieka niczego wyższego nad zadowolenie swej dumy osobistej i żadna rana nie boli więcej od tej, którą dumie zadano.',
        'Marnego nie można nigdy czytać za mało, a dobrego nigdy za często.',
        'Są w samej rzeczy na świecie uczciwi ludzie - tak samo jak jest i czterolistna koniczyna.',
        'Nieszczęście jest warunkiem współczucia, a współczucie - źródłem miłości bliźniego.',
        'Błędne sądy zdarzają się często, błędne wnioski zaś nader rzadko.',
        'Gdyby panowały powszechnie prawda i szczerość, byłoby co innego; ale niepodobna ani na nie liczyć, ani tymbardziej samemu się nimi powodować, ponieważ za te rzeczy źle odpłacają.',
        'Człowiek wspaniałomyślny, który przebacza nieprzyjaciołom i za złe dobrem płaci, człowiek taki jest wzniosły i zasługuje na największą pochwałę: poznał on bowiem swoją własną istotę nawet tam, gdzie ta istota stanowczo się go wyparła.',
        'Wszelki czyn tylko o tyle posiada wartość moralną, o ile wynika ze współczucia; czyn zaś, który wynika z jakichkolwiek innych pobudek, nie posiada żadnej wartości moralnej.',
        'Tylko intencja rozstrzyga o wartości moralnej danego czynu.',
        'Na tej samej zasadzie, gdy szare ułożymy obok czarnego uzna się je za białe; gdy obok białego – za czarne.',
        'Odnajdywanie obiektywnej prawdy trzeba klarownie oddzielić od sztuki ukazywania twierdzeń jako prawdziwych.',
        'Prawdziwy honor naruszyć może nie to, czego się doznaje, lecz tylko to, co się czyni, każdemu bowiem może się przytrafić wszystko.',
        'Te tysiące, które w naszych oczach spokojnie obcują ze sobą, są niczym innym, jak stadem wilków i tygrysów, którym tylko nałożono kagańce.',
        'Staje się wtedy dla niego wyraźne i pewne, że nie zna żadnego słońca ani żadnej ziemi, lecz tylko oko, które widzi słońce, rękę, która czuję ziemię; że świat, który go otacza, istnieje tylko jako przedstawienie…',
        'Mnie np. filozofia moja nigdy nie przyniosła zysku, ale bardzo wiele mi zaoszczędziła.',
        'Dobry styl polega głównie na tym, że ma się coś do powiedzenia.',
        'Jest jeden aspekt, pod którym zwierzęta przewyższają człowieka – ich łagodne, spokojne cieszenie się chwilą obecną.',
    ]

    let index;
    let min = 0;
    let max = cytat.length
    index = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
 
        <Col xs={12} sm={12} md={6} lg={6} xl={6}  className="cytat">
<div className="cytat--img"></div>
<div className="cytat--text">{cytat[index]}</div>
        </Col>





    )
}


export default InspirujacyCytat