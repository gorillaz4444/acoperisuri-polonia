export type IconName =
  | "Wrench"
  | "Layers"
  | "Home"
  | "Shield"
  | "Droplets"
  | "AlertTriangle"
  | "LayoutDashboard"
  | "Triangle"

export interface ServiceData {
  slug: string
  icon: IconName
  title: string
  shortDescription: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  headline: string
  intro: string
  features: string[]
  gallery: { src: string; alt: string }[]
  faq: { question: string; answer: string }[]
}

export const services: ServiceData[] = [
  {
    slug: "naprawa-dachow",
    icon: "Wrench",
    title: "Naprawa dachow",
    shortDescription:
      "Szybka i skuteczna naprawa wszelkich uszkodzen dachowych. Likwidacja przeciekow i uszkodzen mechanicznych.",
    heroImage: "/images/sist-pluvial-2.jpeg",
    metaTitle: "Naprawa Dachow Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Profesjonalna naprawa dachow we Wroclawiu i na Dolnym Slasku. Usuwamy przecieki, naprawiamy uszkodzenia mechaniczne. Szybki czas reakcji, gwarancja jakosci. Zadzwon: 518 235 365",
    headline: "Profesjonalna Naprawa Dachow",
    intro:
      "Specjalizujemy sie w szybkiej i skutecznej naprawie wszelkich uszkodzen dachowych. Niezaleznie od tego, czy Twoj dach zostal uszkodzony przez burze, grad, czy po prostu wymaga konserwacji po latach uzytkowania – nasz zespol jest gotowy do dzialania. Dzialamy na terenie Wroclawia i calego Dolnego Slaska, oferujac pogotowie dachowe z dojazdem nawet w ciagu kilku godzin.",
    features: [
      "Likwidacja przeciekow i nieszczelnosci",
      "Naprawa pokrycia po burzach i gradobiciu",
      "Wymiana uszkodzonych dachowek i elementow blacharskich",
      "Naprawa konstrukcji wiezby dachowej",
      "Uszczelnianie kominow i okien dachowych",
      "Pogotowie dachowe – szybki czas reakcji",
    ],
    gallery: [
      { src: "/images/sist-pluvial-2.jpeg", alt: "Dekarz naprawiajacy dach na wysokosci" },
      { src: "/images/roof-2.jpg", alt: "Naprawa pokrycia dachowego" },
      { src: "/images/roof-5.jpg", alt: "Naprawa dachu z obrobkami blacharskimi" },
    ],
    faq: [
      {
        question: "Jak szybko mozecie przyjechac na naprawe?",
        answer:
          "W przypadku awaryjnych przeciekow reagujemy nawet w ciagu kilku godzin. Standardowe naprawy realizujemy w ciagu 1-3 dni od zgloszenia.",
      },
      {
        question: "Czy udzielacie gwarancji na naprawy?",
        answer:
          "Tak, na wszystkie prace naprawcze udzielamy gwarancji. Okres gwarancji zalezy od zakresu prac – zazwyczaj od 2 do 5 lat.",
      },
    ],
  },
  {
    slug: "wymiana-pokrycia",
    icon: "Layers",
    title: "Wymiana pokrycia dachowego",
    shortDescription:
      "Kompleksowa wymiana starych pokryc na nowe, trwale materialy dachowe najwyzszej jakosci.",
    heroImage: "/images/acop12.jpeg",
    metaTitle: "Wymiana Pokrycia Dachowego Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Kompleksowa wymiana pokrycia dachowego we Wroclawiu. Blachodachowka, dachowka ceramiczna i cementowa. Profesjonalny montaz z gwarancja. Zadzwon: 518 235 365",
    headline: "Wymiana Pokrycia Dachowego",
    intro:
      "Oferujemy kompleksowa wymiane pokrycia dachowego – od demontazu starego pokrycia, przez przygotowanie podloza, az po montaz nowych materialow. Pracujemy z blachodachowka, dachowka ceramiczna, cementowa oraz innymi nowoczesnymi materialami pokryciowymi. Kazda realizacja jest poprzedzona dokladna ocena stanu dachu i bezplatna wycena.",
    features: [
      "Demontaz starego pokrycia i utylizacja materialow",
      "Montaz blachodachowki i dachowki ceramicznej",
      "Wymiana lat i kontrlatow",
      "Montaz folii wstepnego krycia",
      "Obrobki kominowe i okienne w cenie",
      "Gwarancja na material i robocizne",
    ],
    gallery: [
      { src: "/images/acop12.jpeg", alt: "Nowy dach z czerwonej blachodachowki" },
      { src: "/images/tabla-acop.jpeg", alt: "Metalowa blachodachowka – material pokryciowy" },
      { src: "/images/roof-metal-tiles.jpeg", alt: "Nowe pokrycie z blachodachowki" },
      { src: "/images/roof-1.jpg", alt: "Wymiana dachu na domu jednorodzinnym" },
    ],
    faq: [
      {
        question: "Ile trwa wymiana pokrycia dachowego?",
        answer:
          "Dla typowego domu jednorodzinnego wymiana pokrycia trwa od 3 do 7 dni roboczych, w zaleznosci od powierzchni dachu i zakresu dodatkowych prac.",
      },
      {
        question: "Jaki material pokryciowy polecacie?",
        answer:
          "Dobor materialu zalezy od konstrukcji dachu i budzetu. Polecamy blachodachowke dla lekkosci i trwalosci lub dachowke ceramiczna dla estetyki i dlugowiecznosci.",
      },
    ],
  },
  {
    slug: "montaz-dachowki",
    icon: "Home",
    title: "Montaz dachowki",
    shortDescription:
      "Profesjonalny montaz dachowki ceramicznej, cementowej i innych materialow pokryciowych.",
    heroImage: "/images/izolatie-2.jpeg",
    metaTitle: "Montaz Dachowki Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Profesjonalny montaz dachowki ceramicznej i cementowej we Wroclawiu. Precyzyjne ukladanie, trwale mocowanie. Zadzwon po darmowa wycene: 518 235 365",
    headline: "Montaz Dachowki Ceramicznej i Cementowej",
    intro:
      "Montaz dachowki to nasza specjalnosc. Wykonujemy precyzyjne ukladanie dachowki ceramicznej, cementowej oraz materialow alternatywnych. Dbamy o kazdy detal – od prawidlowego rozlozenia lat, przez ukladanie dachowki, az po montaz gasiora i obrobek szczytu. Nasze dachy sluza latami bez koniecznosci interwencji.",
    features: [
      "Montaz dachowki ceramicznej (Roben, Creaton, Braas)",
      "Montaz dachowki cementowej",
      "Precyzyjne latowanie i kontrlatowanie",
      "Montaz gasiorow i elementow wentylacyjnych",
      "Obrobki szczytow, koszy i kalenic",
      "Bezplatna wycena i doradztwo materialowe",
    ],
    gallery: [
      { src: "/images/izolatie-2.jpeg", alt: "Montaz dachowki na nowym domu" },
      { src: "/images/roof-3.jpg", alt: "Kompletna realizacja dachu z dachowka" },
      { src: "/images/casa-mare.jpeg", alt: "Dom z nowym dachem dachowkowym" },
    ],
    faq: [
      {
        question: "Czy pomagacie w doborze dachowki?",
        answer:
          "Tak, doradzamy w wyborze materialu, koloru i producenta, biorac pod uwage konstrukcje dachu, region klimatyczny i budzet klienta.",
      },
      {
        question: "Czy montujecie tez okucia i akcesoria dachowe?",
        answer:
          "Tak, montujemy komplet akcesoriow – lawki kominiarskie, stopnie dachowe, wylazy, elementy wentylacyjne oraz sniegolopy.",
      },
    ],
  },
  {
    slug: "obrobki-blacharskie",
    icon: "Shield",
    title: "Obrobki blacharskie",
    shortDescription:
      "Precyzyjne obrobki blacharskie – rynny, pasy nadrynnowe, obrobki kominowe i okienne.",
    heroImage: "/images/sist-pluvial.jpeg",
    metaTitle: "Obrobki Blacharskie Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Precyzyjne obrobki blacharskie we Wroclawiu. Pasy nadrynnowe, obrobki kominowe, podbitki i rynny. Profesjonalny montaz. Zadzwon: 518 235 365",
    headline: "Obrobki Blacharskie i Systemy Rynnowe",
    intro:
      "Wykonujemy precyzyjne obrobki blacharskie, ktore sa kluczowym elementem kazdego dachu. Prawidlowo wykonane obrobki chronia konstrukcje przed woda, wiatrem i wilgocia. Montujemy systemy rynnowe, pasy nadrynnowe, obrobki kominowe, okienne i attykowe. Pracujemy z blacha ocynkowana, powlekana oraz miedziana.",
    features: [
      "Montaz systemow rynnowych (PVC i metalowe)",
      "Obrobki kominowe i przejsc dachowych",
      "Pasy nadrynnowe i podrynnowe",
      "Montaz podbitek dachowych (PVC, drewno, metal)",
      "Obrobki okien dachowych i lukarn",
      "Obrobki attyk i murow ogniowych",
    ],
    gallery: [
      { src: "/images/sist-pluvial.jpeg", alt: "Profesjonalny system rynnowy z podbitka" },
      { src: "/images/sist-pluvial-4.jpeg", alt: "Nowoczesne rynny i podbitki na domu" },
      { src: "/images/sist-pluvial-2.jpeg", alt: "Dekarz montujacy obrobki blacharskie" },
      { src: "/images/roof-6.jpg", alt: "Obrobki blacharskie na dachu mieszkalnym" },
    ],
    faq: [
      {
        question: "Jaki system rynnowy polecacie?",
        answer:
          "Dla wiekszosci domow jednorodzinnych polecamy systemy z PVC (Galeco, Bryza) lub metalowe (Lindab). Dobor zalezy od powierzchni dachu i preferencji estetycznych.",
      },
      {
        question: "Czy montujecie podbitki dachowe?",
        answer:
          "Tak, montujemy podbitki z PVC, drewna i metalu. Podbitka nie tylko poprawia estetyka budynku, ale tez chroni wiezbe dachowa przed ptakami i owadami.",
      },
    ],
  },
  {
    slug: "hydroizolacje",
    icon: "Droplets",
    title: "Hydroizolacje",
    shortDescription:
      "Skuteczne hydroizolacje dachow plaskich i skosnych. Ochrona przed wilgocia i przeciekami.",
    heroImage: "/images/roof-4.jpg",
    metaTitle: "Hydroizolacje Dachow Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Skuteczne hydroizolacje dachow plaskich i skosnych we Wroclawiu. Papy termozgrzewalne, membrany PVC. Gwarancja szczelnosci. Zadzwon: 518 235 365",
    headline: "Hydroizolacje Dachow",
    intro:
      "Zapewniamy skuteczna hydroizolacje dachow plaskich i skosnych. Stosujemy najnowoczesniejsze materialy – papy termozgrzewalne, membrany PVC/EPDM i masy izolacyjne. Prawidlowa hydroizolacja to fundament trwalego dachu. Chronimy budynki przed przeciekami, wilgocia i korozja konstrukcji.",
    features: [
      "Papa termozgrzewalna jednoi dwuwarstwowa",
      "Membrany dachowe PVC i EPDM",
      "Izolacja dachow plaskich i tarasow",
      "Naprawa i renowacja istniejacych izolacji",
      "Izolacja poddaszy i stropodachow",
      "Diagnostyka termowizyjna przeciekow",
    ],
    gallery: [
      { src: "/images/roof-4.jpg", alt: "Hydroizolacja dachu plaskiego" },
      { src: "/images/izolatie-2.jpeg", alt: "Podklad hydroizolacyjny pod dachowke" },
    ],
    faq: [
      {
        question: "Ile lat wytrzyma hydroizolacja?",
        answer:
          "W zaleznosci od zastosowanego materialu, hydroizolacja moze sluzyc od 15 do 30+ lat. Papy termozgrzewalne daja ok. 15-20 lat, membrany PVC nawet 30 lat.",
      },
      {
        question: "Czy naprawiacie istniejace izolacje?",
        answer:
          "Tak, wykonujemy rowniez naprawy i renowacje istniejacych warstw hydroizolacyjnych bez koniecznosci calkowitej wymiany.",
      },
    ],
  },
  {
    slug: "usuwanie-przeciekow",
    icon: "AlertTriangle",
    title: "Usuwanie przeciekow",
    shortDescription:
      "Diagnostyka i naprawa przeciekow dachowych. Szybka interwencja, trwale rozwiazania.",
    heroImage: "/images/roof-2.jpg",
    metaTitle: "Usuwanie Przeciekow Dachowych Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Usuwanie przeciekow dachowych we Wroclawiu. Diagnostyka, naprawa awaryjna, trwale rozwiazania. Szybki dojazd. Zadzwon teraz: 518 235 365",
    headline: "Usuwanie Przeciekow Dachowych",
    intro:
      "Przeciekajacy dach to problem wymagajacy natychmiastowej reakcji. Nasz zespol specjalizuje sie w diagnostyce i naprawie przeciekow – od drobnych nieszczelnosci po powazne uszkodzenia wymagajace wymiany czesci pokrycia. Oferujemy pogotowie dachowe z szybkim czasem dojazdu na terenie Wroclawia i calego Dolnego Slaska.",
    features: [
      "Awaryjna naprawa przeciekow – szybki dojazd",
      "Diagnostyka przyczyn przeciekow",
      "Uszczelnianie pokrycia dachowego",
      "Naprawa obrobek kominowych i okiennych",
      "Wymiana uszkodzonych elementow pokrycia",
      "Tymczasowe zabezpieczenie dachu przed opadami",
    ],
    gallery: [
      { src: "/images/roof-2.jpg", alt: "Naprawa przeciekow na dachu" },
      { src: "/images/sist-pluvial-2.jpeg", alt: "Dekarz usuwajacy nieszczelnosci" },
    ],
    faq: [
      {
        question: "Czy przyjezdzacie w weekendy i swieta?",
        answer:
          "W przypadkach awaryjnych dzialamy rowniez w weekendy. Prosimy o kontakt telefoniczny – ocenimy pilnosc sytuacji i umowimy najszybszy mozliwy termin.",
      },
      {
        question: "Ile kosztuje usuwanie przecieku?",
        answer:
          "Koszt zalezy od przyczyny i zakresu uszkodzenia. Diagnostyka i drobna naprawa to zwykle 300-800 zl. Bezplatna wycena po ogle̦dzinach.",
      },
    ],
  },
  {
    slug: "dachy-plaskie",
    icon: "LayoutDashboard",
    title: "Dachy plaskie",
    shortDescription:
      "Budowa i renowacja dachow plaskich z wykorzystaniem nowoczesnych technologii izolacyjnych.",
    heroImage: "/images/roof-metal-tiles.jpeg",
    metaTitle: "Dachy Plaskie Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Budowa i renowacja dachow plaskich we Wroclawiu. Papa termozgrzewalna, membrany, tarasy. Gwarancja szczelnosci. Zadzwon: 518 235 365",
    headline: "Dachy Plaskie – Budowa i Renowacja",
    intro:
      "Specjalizujemy sie w budowie i renowacji dachow plaskich na budynkach mieszkalnych i komercyjnych. Stosujemy sprawdzone technologie izolacyjne – papy termozgrzewalne, membrany PVC oraz systemy dachu odwroconego. Kazdy dach plaski projektujemy z uwzglednieniem odpowiedniego spadku i systemu odwadniajacego.",
    features: [
      "Budowa nowych dachow plaskich",
      "Renowacja istniejacych stropodachow",
      "Papa termozgrzewalna i membrany PVC",
      "Systemy dachu odwroconego",
      "Odwodnienie liniowe i punktowe",
      "Tarasy i dachy zielone",
    ],
    gallery: [
      { src: "/images/roof-metal-tiles.jpeg", alt: "Pokrycie dachu plaskiego" },
      { src: "/images/roof-4.jpg", alt: "Hydroizolacja dachu plaskiego" },
    ],
    faq: [
      {
        question: "Czy dach plaski moze byc calkowicie szczelny?",
        answer:
          "Tak, przy zastosowaniu odpowiednich materialow i technologii dach plaski moze byc calkowicie szczelny przez wiele lat. Kluczowe sa prawidlowe spadki i jakosc wykonania izolacji.",
      },
      {
        question: "Czy mozna ulozyc taras na dachu plaskim?",
        answer:
          "Tak, oferujemy rowniez ukladanie tarasow na dachach plaskich – na plotkach regulowanych lub bezposrednio na warstwie izolacyjnej.",
      },
    ],
  },
  {
    slug: "dachy-skosne",
    icon: "Triangle",
    title: "Dachy skosne",
    shortDescription:
      "Kompleksowa budowa i naprawa dachow skosnych – od konstrukcji po pokrycie koncowe.",
    heroImage: "/images/dulgherie-4.jpeg",
    metaTitle: "Dachy Skosne Wroclaw | Pogotowie Dachow 24h",
    metaDescription:
      "Budowa i naprawa dachow skosnych we Wroclawiu. Konstrukcja wiezby, pokrycia, obrobki. Kompleksowa obsluga. Zadzwon: 518 235 365",
    headline: "Dachy Skosne – Budowa od Podstaw",
    intro:
      "Budujemy i naprawiamy dachy skosne od podstaw – od konstrukcji wiezby dachowej, przez izolacje i latowanie, az po montaz pokrycia koncowego. Realizujemy zarowno proste dachy dwuspadowe, jak i skomplikowane dachy wielospadowe z lukarnami, mansardami i oknami dachowymi. Mamy doswiadczenie z najrozniejszymi typami konstrukcji.",
    features: [
      "Budowa wiezby dachowej od podstaw",
      "Konstrukcje drewniane tradycyjne i kratownicowe",
      "Montaz lukarn i okien dachowych",
      "Zabudowa poddaszy uzytkowych",
      "Wymiana i wzmacnianie elementow wiezby",
      "Adaptacja poddaszy na cele mieszkalne",
    ],
    gallery: [
      { src: "/images/dulgherie-4.jpeg", alt: "Budowa konstrukcji dachowej" },
      { src: "/images/mansarda.jpeg", alt: "Budowa lukarny na dachu" },
      { src: "/images/izolatie-2.jpeg", alt: "Latowanie i przygotowanie pod dachowke" },
      { src: "/images/casa-mare.jpeg", alt: "Gotowy dach skosny na domu" },
    ],
    faq: [
      {
        question: "Czy budujecie tez wiezbe dachowa?",
        answer:
          "Tak, budujemy kompletne wiezby dachowe – zarowno tradycyjne platkiowo-kleszczowe, jak i nowoczesne konstrukcje kratownicowe.",
      },
      {
        question: "Czy pomagacie z adaptacja poddasza?",
        answer:
          "Tak, wykonujemy prace przygotowawcze pod adaptacje poddasza – ocieplenie, paroizolacja, zabudowa plytami GK to czesc naszej oferty.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
