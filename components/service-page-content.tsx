"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, FileText, Check, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react"
import type { ServiceData } from "@/lib/services-data"
import { getIcon } from "@/lib/service-icons"

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

export function ServicePageContent({ service }: { service: ServiceData }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + service.gallery.length) % service.gallery.length : null
      ),
    [service.gallery.length]
  )
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % service.gallery.length : null
      ),
    [service.gallery.length]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-6")
          }
        })
      },
      { threshold: 0.1 }
    )
    if (contentRef.current) observer.observe(contentRef.current)
    return () => observer.disconnect()
  }, [])

  const Icon = getIcon(service.icon)

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.headline}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div
            ref={contentRef}
            className="max-w-3xl opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Link
              href="/#uslugi"
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Wszystkie uslugi
            </Link>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground backdrop-blur-sm">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              {service.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Main content */}
            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">{service.intro}</p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Co obejmuje usluga
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Gallery */}
              {service.gallery.length > 0 && (
                <>
                  <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">
                    Zdjecia z realizacji
                  </h2>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {service.gallery.map((img, i) => (
                      <button
                        key={img.src}
                        onClick={() => openLightbox(i)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                        aria-label={`Otworz zdjecie: ${img.alt}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 50vw, 30vw"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* FAQ */}
              {service.faq.length > 0 && (
                <>
                  <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">
                    Czeste pytania
                  </h2>
                  <div className="mt-6">
                    {service.faq.map((item) => (
                      <FaqItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6 lg:p-8">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Zamow bezplatna wycene
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Skontaktuj sie z nami telefonicznie lub wypelnij formularz kontaktowy. Wycena jest bezplatna i niezobowiazujaca.
                </p>
                <a
                  href="tel:+48518235365"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Zadzwon: 518 235 365
                </a>
                <Link
                  href="/#kontakt"
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  <FileText className="h-4 w-4" />
                  Formularz kontaktowy
                </Link>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Obszar dzialania
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Wroclaw, Legnica, Jelenia Gora, Glogow, Walbrzych, Lubin, Zgorzelec, Zielona
                    Gora i okolice.
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Gwarancja
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Na kazda usluge udzielamy pisemnej gwarancji. Okres gwarancji zalezy od zakresu prac.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
            Potrzebujesz pomocy z dachem? Zadzwon teraz!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80 leading-relaxed">
            Bezplatna wycena, szybki czas reakcji i profesjonalna obsluga.
          </p>
          <a
            href="tel:+48518235365"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-card px-10 py-4 text-lg font-bold text-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            518 235 365
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria zdjec"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-card/40"
            aria-label="Zamknij galerie"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 rounded-full bg-card/20 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-card/40"
            aria-label="Poprzednie zdjecie"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={service.gallery[lightboxIndex].src}
              alt={service.gallery[lightboxIndex].alt}
              fill
              className="rounded-lg object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 rounded-full bg-card/20 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-card/40"
            aria-label="Nastepne zdjecie"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </main>
  )
}
