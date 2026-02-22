import { Phone } from "lucide-react"

const cities = [
  {
    name: "Wroclaw",
    heading: "Dekarz Wroclaw",
    text: "Swiadczymy kompleksowe uslugi dekarskie na terenie Wroclawia i okolic. Naprawa dachow, wymiana pokrycia, montaz dachowki ceramicznej i cementowej. Szybkie terminy realizacji i konkurencyjne ceny dla mieszkancow stolicy Dolnego Slaska.",
  },
  {
    name: "Legnica",
    heading: "Dekarz Legnica",
    text: "Profesjonalne uslugi dekarskie w Legnicy. Wykonujemy naprawy dachow, wymiane pokrycia oraz obrobki blacharskie. Nasz zespol dotrze na miejsce i wykona bezplatna wycene prac dekarskich.",
  },
  {
    name: "Jelenia Gora",
    heading: "Dekarz Jelenia Gora",
    text: "Dzialamy na terenie Jeleniej Gory i okolic. Specjalizujemy sie w dachach skosnych oraz naprawach pokryc dachowych. Gwarancja jakosci i terminowa realizacja zlecen dekarskich.",
  },
  {
    name: "Glogow",
    heading: "Dekarz Glogow",
    text: "Uslugi dekarskie w Glogowie – naprawa, wymiana i montaz pokryc dachowych. Zapewniamy profesjonalna obsluge i trwale rozwiazania dla dachow mieszkalnych i komercyjnych.",
  },
  {
    name: "Walbrzych",
    heading: "Dekarz Walbrzych",
    text: "Dekarz Walbrzych – kompleksowa obsluga dachow w rejonie walbrzyskim. Od diagnostyki przeciekow po pelna wymiane pokrycia dachowego z gwarancja na wykonane prace.",
  },
  {
    name: "Lubin",
    heading: "Dekarz Lubin",
    text: "Oferujemy uslugi dekarskie w Lubinie i okolicach. Montaz dachowki, obrobki blacharskie, hydroizolacje. Lokalna firma z wieloletnim doswiadczeniem w regionie lubinskim.",
  },
  {
    name: "Zgorzelec",
    heading: "Dekarz Zgorzelec",
    text: "Naprawa i budowa dachow w Zgorzelcu. Zajmujemy sie zarowno dachami plaskimi, jak i skośnymi. Profesjonalny sprzet i sprawdzone materialy gwarantuja dlugoletnia trwalosc.",
  },
  {
    name: "Zielona Gora",
    heading: "Dekarz Zielona Gora",
    text: "Swiadczymy uslugi dekarskie rowniez w Zielonej Gorze i wojewodztwie lubuskim. Wymiana pokrycia dachowego, naprawa przeciekow oraz kompleksowe hydroizolacje.",
  },
  {
    name: "Gorzow Wielkopolski",
    heading: "Dekarz Gorzow Wielkopolski",
    text: "Profesjonalny dekarz w Gorzowie Wielkopolskim. Realizujemy zlecenia dekarskie na terenie miasta i okolic. Bezplatna wycena i szybkie terminy wykonania.",
  },
  {
    name: "Swiebodzin",
    heading: "Dekarz Swiebodzin",
    text: "Uslugi dekarskie w Swiebodzinie – naprawy, wymiany pokryc i obrobki blacharskie. Zadbamy o Twoj dach profesjonalnie i w konkurencyjnej cenie.",
  },
]

export function ServiceAreasSection() {
  return (
    <section id="obszar" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Uslugi Dekarskie – Dolny Slask i Lubuskie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Obslugujemy klientow w calym regionie Dolnego Slaska i Lubuskiego.
            Sprawdz, czy dzialamy w Twoim miescie.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cities.map((city) => (
            <div
              key={city.name}
              className="rounded-xl border border-border bg-card p-6 lg:p-8"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                {city.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {city.text}
              </p>
              <a
                href="tel:+48518235365"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                Zadzwon: 518 235 365
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
