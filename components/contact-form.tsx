"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData) {
    const errs: Record<string, string> = {}
    const name = form.get("name") as string
    const phone = form.get("phone") as string
    const city = form.get("city") as string
    const message = form.get("message") as string

    if (!name || name.trim().length < 2) errs.name = "Podaj swoje imie"
    if (!phone || !/^\+?[\d\s-]{7,15}$/.test(phone.trim()))
      errs.phone = "Podaj prawidlowy numer telefonu"
    if (!city || city.trim().length < 2) errs.city = "Podaj miasto"
    if (!message || message.trim().length < 10) errs.message = "Opisz problem (min. 10 znakow)"

    return errs
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="kontakt" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-12">
            <CheckCircle className="h-16 w-16 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Dziekujemy za wiadomosc!
            </h2>
            <p className="text-muted-foreground">
              Skontaktujemy sie z Toba jak najszybciej. Mozesz tez zadzwonic bezposrednio pod numer{" "}
              <a href="tel:+48518235365" className="font-semibold text-primary">
                518 235 365
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="kontakt" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Formularz Kontaktowy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Opisz swoj problem, a my oddzwonimy z bezplatna wycena.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-xl border border-border bg-card p-6 lg:p-8"
          noValidate
        >
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Imie
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jan Kowalski"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="518 235 365"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
                Miasto
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="np. Wroclaw"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              {errors.city && (
                <p className="mt-1 text-xs text-destructive">{errors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Opis problemu
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Opisz krotko problem z dachem..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Wyslij zapytanie
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
