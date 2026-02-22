"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    src: "/images/casa-mare.jpeg",
    alt: "Dom jednorodzinny z nowym dachem - wymiana pokrycia dachowego",
    caption: "Wymiana pokrycia dachowego",
  },
  {
    src: "/images/acop12.jpeg",
    alt: "Nowy dach z czerwonej blachodachowki na budynku",
    caption: "Montaz blachodachowki",
  },
  {
    src: "/images/sist-pluvial.jpeg",
    alt: "Profesjonalny montaz systemu rynnowego z podbitka dachowa",
    caption: "System rynnowy z podbitka",
  },
  {
    src: "/images/dulgherie-4.jpeg",
    alt: "Budowa konstrukcji dachowej - wiezba dachowa",
    caption: "Budowa wiezby dachowej",
  },
  {
    src: "/images/izolatie-2.jpeg",
    alt: "Montaz dachowki na nowym domu z latowaniem",
    caption: "Montaz dachowki ceramicznej",
  },
  {
    src: "/images/sist-pluvial-4.jpeg",
    alt: "Nowoczesne rynny i podbitki dachowe na domu",
    caption: "Rynny i podbitki dachowe",
  },
]

export function RealizationsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () =>
      setLightboxIndex((i) => (i !== null ? (i - 1 + projects.length) % projects.length : null)),
    []
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % projects.length : null)),
    []
  )

  return (
    <section id="realizacje" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Nasze Realizacje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Zobacz wybrane realizacje z terenu Wroclawia i Dolnego Slaska.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label={`Otworz galerie: ${project.caption}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-foreground/0 transition-colors group-hover:bg-foreground/40">
                <span className="translate-y-4 px-5 pb-5 text-sm font-semibold text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {project.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

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
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
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
              src={projects[lightboxIndex].src}
              alt={projects[lightboxIndex].alt}
              fill
              className="rounded-lg object-contain"
              sizes="100vw"
              priority
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-foreground/70 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              {projects[lightboxIndex].caption}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 rounded-full bg-card/20 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-card/40"
            aria-label="Nastepne zdjecie"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
