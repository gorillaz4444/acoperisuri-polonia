"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const beforeAfterPairs = [
  {
    before: "/images/acop-inainte.jpeg",
    after: "/images/acop-dupa.jpeg",
    alt: "Wymiana pokrycia dachowego na budynku gospodarczym",
    caption: "Wymiana pokrycia dachowego - budynek gospodarczy",
  },
]

const landscapeComparisons = [
  {
    src: "/images/inainte-dupa-1.jpeg",
    alt: "Przed i po - wymiana dachu i elewacji na domu jednorodzinnym",
    caption: "Wymiana dachu i elewacji",
  },
  {
    src: "/images/inainte-dupa-2.jpeg",
    alt: "Przed i po - nowe pokrycie dachowe na domu",
    caption: "Nowe pokrycie dachowe",
  },
  {
    src: "/images/inainte-dupa-3.jpeg",
    alt: "Przed i po - renowacja dachu przy oknie dachowym",
    caption: "Renowacja dachu z oknem dachowym",
  },
]

function BeforeAfterSlider({
  before,
  after,
  alt,
}: {
  before: string
  after: string
  alt: string
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  function handleMove(clientX: number) {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (isDragging.current) handleMove(e.clientX)
    }
    function onTouchMove(e: TouchEvent) {
      if (isDragging.current && e.touches[0]) handleMove(e.touches[0].clientX)
    }
    function onEnd() {
      isDragging.current = false
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onEnd)
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onEnd)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onEnd)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onEnd)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-full cursor-col-resize overflow-hidden rounded-xl sm:aspect-[4/3]"
      onMouseDown={() => (isDragging.current = true)}
      onTouchStart={() => (isDragging.current = true)}
      role="slider"
      aria-label="Porownanie przed i po"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2))
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2))
      }}
    >
      {/* After image (full) */}
      <Image src={after} alt={`Po - ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      {/* Before image (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={`Przed - ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-card"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <span className="absolute top-4 left-4 z-10 rounded-md bg-foreground/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
        Przed
      </span>
      <span className="absolute top-4 right-4 z-10 rounded-md bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
        Po
      </span>
    </div>
  )
}

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-animate]")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("opacity-100", "translate-y-0")
                item.classList.remove("opacity-0", "translate-y-4")
              }, index * 120)
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
            Przed i Po
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Przekonaj sie o jakosci naszej pracy. Przeciagnij suwak, aby zobaczyc efekt transformacji.
          </p>
        </div>

        <div ref={sectionRef} className="mt-14 flex flex-col gap-8">
          {/* Interactive slider pair */}
          {beforeAfterPairs.map((pair, i) => (
            <div key={i} data-animate className="opacity-0 translate-y-4 transition-all duration-500">
              <div className="mx-auto max-w-2xl">
                <BeforeAfterSlider before={pair.before} after={pair.after} alt={pair.alt} />
                <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                  {pair.caption}
                </p>
              </div>
            </div>
          ))}

          {/* Landscape comparison images */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {landscapeComparisons.map((item, i) => (
              <div key={i} data-animate className="opacity-0 translate-y-4 transition-all duration-500">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
