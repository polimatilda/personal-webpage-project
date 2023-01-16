import React from 'react'
import Book from '../components/Book'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Books() {

  const books = [
    {
      "id": 1,
      "title": "Futó tűz",
      "series": "A csikó, aki tűzben született",
      "description": "Főnix egy borzalmas futótűz közepén született meg. Az anyja nem sokkal a szülés után meghalt. Az apját a kötelessége hívta, és el kellett vezetnie a ménesét egy biztonságos helyre. Az újszülött kiscsikó egyedül maradt. Kikecmergett a hatalmas tűzből és talált magának egy barátot: Pamacsot, a mókust. Együtt töltötték az idejüket. Pamacs volt Főnix tanítója. Azonban egy baleset következtében elváltak útjaik. Főnix halálra rémült saját, veleszületett képességétől, a tűztől. Veszélyes volt mindenkire, ezért elmenekült. De nem futhatunk sokáig a saját sorsunk elől. Erre hamarosan neki is rá kellett jönnie. Elvándorolt egy újabb, meg egy újabb helyre, de végül mindenhonnan mennie kellett. És hamarosan szembetalálta magát a sorsával. Nem kerülhette csak úgy ki. De vajon képes lesz megmenteni mindenkit, akit szeret, és a Kontinenst?",
      "pubYear": 2015,
      "link": "https://moly.hu/konyvek/poli-matilda-futo-tuz",
      "image": "futotuz.jpg",
    },
    {
      "id": 2,
      "title": "Sárkánytűz",
      "series": "A csikó, aki tűzben született",
      "description": `Főnix ​egy általa ismeretlen dimenzióba, Sárkányföldre kerül. Megismerkedik Veritassal, a sárkánylovak száműzött királyával, kinek koronáját a trónbitorló Harag vette el. A csődör tehetetlen, de Főnixszel felcsillan a remény.
      
      Így hát Főnix és Veritas, valamint a trónörökös öt hűséges barátja tervet eszel ki, a zsarnok Harag letaszítására. De nem is Főnix kalandja lenne, ha minden olyan simán haladna, mint azt eltervezték.
      
      Gyorsan kell cselekedniük, mert a lovak élete veszélyben van, de ha sikerül is időben megmenteni őket, hogyan lesznek képesek szembeszállni egy egész kiképzett hadsereggel? Ismét Főnixnek kell majd véghez vinnie a végső küzdelmet, de vajon sikerülni fog-e neki? És milyen kalandok és veszélyek várják őket a trónhoz vezető úton?
      
      A Kontinens hősének, a Lovak Megmentőjének, A Csikónak, Aki Tűzben Született, Főnixnek egy újabb nemzetet kell megmentenie, miközben érzi, hogy valami mozgolódik. Valami olyasmi, ami nem lesz olyan egyszerű harc, mint amit eddig tapasztalt.
      
      De ez már egy másik történet…`,
      "pubYear": 2016,
      "link": "https://moly.hu/konyvek/poli-matilda-sarkanytuz",
      "image": "sarkanytuz.jpg",
    },
    {
      "id": 3,
      "title": "Az őrzők tüze",
      "series": "A csikó, aki tűzben született",
      "description": `Bellona otthona veszélyben van, és Főnix az egyetlen, aki segíthet a kancának felvenni a harcot az ellenséggel, ami nem más, mint egy eltévedt római légió. A két ló közösen utazik el Primumba, az első dimenzióba, ahol a Praesidiák, az Őrzők laknak. Azonban mielőtt Főnix bármit is tehetne, meg kell védenie Bellonát, akit saját dühe elvakít.

      Mindeközben A Csikó, Aki Tűzben Született érzi, hogy valami nagyobb feladat vár rá a közeljövőben, aminek semmi köze a Primumot fenyegető emberekhez, de annál több a Kontinenshez. Az álmok élénkülnek, ahogyan azt Ariolo megjósolta, és a csődör egyre kétségbeesettebb.

      Segítenie kell Primumnak, mindeközben szíve hazahúzza. A felelősség súlya egyre jobban nyomja Főnix vállát, és nem tudja, képes lesz-e véghezvinni azokat a tetteket, amelyeket kell, annak érdekében, hogy a Világ, amit eddig ismert, ne omoljon össze. `,
      "pubYear": 2017,
      "link": "https://moly.hu/konyvek/poli-matilda-az-orzok-tuze",
      "image": "orzoktuze.jpg",
    },
    {
      "id": 4,
      "title": "Az otthon tüze",
      "series": "A csikó, aki tűzben született",
      "description": `Főnix és Bellona visszatérnek a Kontinensre, ahol az elmúlt években sötétség mozgolódott. Esperanza és Vihar igyekeztek annyi állatot egy területre összevonni, amennyit csak tudtak, és figyelmeztették a Magányos-medencét is. Umbra ellen azonban többre lesz szükség, ha túl akarják élni. A hősöknek rengeteg feladatot el kell végezniük, hogy legalább félig felkészülhessenek a végjátékra, de mindez kevésnek tűnik az ősi erővel szemben. Nem ismerik Umbra igazi erejét, és nem mehetnek biztosra. Ráadásul Umbra bármelyik pillanatban lecsaphat. Hogyan lesz képes Főnix ettől az újabb veszedelemtől megóvni a Kontinenst és a Világot? Hiszen Umbra nem az ő otthonáért jött, hanem mindenért. Hogyan győzhetné le egyetlen ló a Sötétséget? A kérdés pedig még mindig megválaszolatlan: mi lesz a Tűz ára?`,
      "pubYear": 2019,
      "link": "https://moly.hu/konyvek/poli-matilda-az-otthon-tuze",
      "image": "otthontuze.png",
    },
    {
      "id": 5,
      "title": "Tűz és Sötétség",
      "series": "A csikó, aki tűzben született",
      "description": `Főnix utolsó emléke a csatának véget vető robbanás. Amikor felébred, nem a Kontinensen találja magát, és sehogy sem tud hazajutni. Mire újra tud dimenziókaput nyitni, hosszú évek telnek el.

      A Kontinens két részre szakadt: nyugatra és keletre. Egy oldal a Sötétségnek, egy oldal az Ellenállóknak. Főnixnek szembe kell néznie az eltelt idő eseményeivel, miközben erőt kell gyűjtenie, hogy újra – ezúttal utoljára – harcba szálljon Umbrával, és megvívja a Végső Harcot.
      
      Eljött az ideje, hogy az Ősi Prófécia beteljesüljön. Vajon győzedelmeskedik a Fény, vagy Sötétségbe borul a Világ? Készen áll Főnix, hogy megfizesse létezése árát?`,
      "pubYear": 2021,
      "link": "https://moly.hu/konyvek/poli-matilda-tuz-es-sotetseg",
      "image": "tuzessotetseg.jpg",
    },
    {
      "id": 6,
      "title": "A mély titkai",
      "series": "Varázskövek",
      "description": `Marea három éve maga mögött hagyott mindent, amit valaha ismert, azóta a túlélés az egyetlen célja.

      Rayant hamarosan hercegsége királyává koronázzák, de a fiú nem érzi, hogy méltó lenne a feladatra.
      
      Brandt nem szeretne mást, csak szabadon élni, az apja korlátai nélkül, azt csinálni, amit csak akar.
      
      Calais próbálja kisegíteni szüleit, és a Szeles Földek uralkodójának leveleit kézbesíti, ami sokszor elszakítja szeretett családjától.
      
      Terrah egyetlen célja, hogy szülei ne csak a legkisebb hercegnőt lássák benne, ezért igyekszik Regulus és Silva szövetségének jubileumi ünnepségét tökéletesre tervezni.
      
      Mindent a merénylet változtat meg.
      
      Az öt fiatalt mondhatjuk, hogy a sors hozza össze. Ezek után pedig olyan titkok kerülnek napvilágra, melyek évszázadok óta mélyen eltemetve lappangtak, ám most az egész világ jövője pengeélre kerül.`,
      "pubYear": "Readable on Wattpad",
      "link": "https://www.wattpad.com/story/318373986-a-m%C3%A9ly-titkai",
      "image": "amt.jpg",
    },
  ]

  return (
    <div>
      <Navbar/>
      {books.map((book, index) => <Book book={book} key={index}/>)}
      <Footer/>
    </div>
  )
}

export default Books