"use client"

import { useEffect, useRef } from "react"
import { Award, Clock, ShieldCheck, MapPin, Cpu, CalendarCheck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "15+ lat doswiadczenia",
    description: "Wieloletnie doswiadczenie w branzy dekarskiej gwarantuje najwyzsza jakosc uslug.",
  },
  {
    icon: Clock,
    title: "Szybka wycena",
    description: "Bezplatna wycena w ciagu 24 godzin. Przyjedziemy i ocenimy zakres prac na miejscu.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakosci",
    description: "Udzielamy wieloletniej gwarancji na wszystkie wykonane prace dekarskie.",
  },
  {
    icon: MapPin,
    title: "Lokalna firma",
    description: "Dzialamy na terenie Wroclawia i calego Dolnego Slaska. Znamy lokalne warunki.",
  },
  {
    icon: Cpu,
    title: "Nowoczesny sprzet",
    description: "Korzystamy z profesjonalnego sprzetu i sprawdzonych materialow renomowanych producentow.",
  },
  {
    icon: CalendarCheck,
    title: "Terminowosc",
    description: "Dotrzymujemy terminow i realizujemy zlecenia sprawnie, bez zbednych przestojow.",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-animate]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0")
                card.classList.remove("opacity-0", "translate-y-4")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Dlaczego My?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Wybierz sprawdzona firme dekarską. Laczymy doswiadczenie z nowoczesnym podejsciem.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              data-animate
              className="opacity-0 translate-y-4 transition-all duration-500 rounded-xl border border-border bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
