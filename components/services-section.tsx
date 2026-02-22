"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { getIcon } from "@/lib/service-icons"

export function ServicesSection() {
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
              }, index * 80)
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
    <section id="uslugi" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Nasze Uslugi Dekarskie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Oferujemy pelny zakres uslug dekarskich – od drobnych napraw po kompleksowe pokrycia
            dachowe na terenie Wroclawia i calego Dolnego Slaska.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                data-animate
                className="group opacity-0 translate-y-4 transition-all duration-500 rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/10" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    Dowiedz sie wiecej
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
