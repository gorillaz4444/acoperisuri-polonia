import { Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/services-data"

const cities = [
  "Wroclaw",
  "Legnica",
  "Jelenia Gora",
  "Glogow",
  "Walbrzych",
  "Lubin",
  "Zgorzelec",
  "Zielona Gora",
  "Gorzow Wlkp.",
  "Swiebodzin",
]

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl font-bold tracking-tight">
                Pogotowie Dachow
              </span>
              <span className="font-sans text-sm font-black text-accent">24h</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Kompleksowe uslugi dekarskie we Wroclawiu i na Dolnym Slasku.
              Pogotowie Dachow 24h - ponad 15 lat doswiadczenia w branzy.
            </p>
            <a
              href="tel:+48518235365"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              518 235 365
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/50">
              Uslugi
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uslugi/${s.slug}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/50">
              Obszar Dzialania
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-1.5 text-sm text-primary-foreground/70"
                >
                  <MapPin className="h-3 w-3 shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/50">
              Nawigacja
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Strona Glowna
                </Link>
              </li>
              <li>
                <Link
                  href="/#realizacje"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Realizacje
                </Link>
              </li>
              <li>
                <Link
                  href="/#opinie"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Opinie
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Polityka prywatnosci
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          <p>
            &copy; {new Date().getFullYear()} Pogotowie Dachow 24h –
            pogotowiedachow24h.pl. Wszelkie prawa zastrzezone.
          </p>
        </div>
      </div>
    </footer>
  )
}
