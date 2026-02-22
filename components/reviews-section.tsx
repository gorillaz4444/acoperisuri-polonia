"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Marek K.",
    city: "Wroclaw",
    text: "Profesjonalna ekipa, szybka realizacja i bardzo dobra cena. Wymienili mi cale pokrycie dachowe w 3 dni. Polecam kazdemu!",
    rating: 5,
  },
  {
    name: "Anna W.",
    city: "Legnica",
    text: "Mielismy problem z przeciekajacym dachem. Panowie przyjechali nastepnego dnia i naprawili usterke. Fachowa robota.",
    rating: 5,
  },
  {
    name: "Tomasz S.",
    city: "Jelenia Gora",
    text: "Solidna firma dekarska. Wykonali obrobki blacharskie i wymienili rynny. Wszystko dokladnie i estetycznie. Gwarancja jakosci.",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Ocena ${rating} na 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
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
    <section id="opinie" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Opinie Naszych Klientow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Zaufalo nam juz setki klientow z calego Dolnego Slaska. Oto co mowia o naszej pracy.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              data-animate
              className="opacity-0 translate-y-4 transition-all duration-500 rounded-xl border border-border bg-card p-6"
              itemScope
              itemType="https://schema.org/Review"
            >
              <StarRating rating={review.rating} />
              <p
                className="mt-4 text-sm leading-relaxed text-muted-foreground italic"
                itemProp="reviewBody"
              >
                {`"${review.text}"`}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground" itemProp="author">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.city}</p>
                </div>
              </div>
              <meta itemProp="itemReviewed" content="Uslugi Dekarskie" />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(review.rating)} />
                <meta itemProp="bestRating" content="5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
