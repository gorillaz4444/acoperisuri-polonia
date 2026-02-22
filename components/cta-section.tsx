import { Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Masz problem z dachem? Zadzwon teraz!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 leading-relaxed">
          Bezplatna wycena, szybki czas reakcji i profesjonalna obsluga.
          Twoj dach w najlepszych rekach.
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
  )
}
