"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { services } from "@/lib/services-data"
import { getIcon } from "@/lib/service-icons"

const navLinks = [
  { href: "/", label: "Strona Glowna" },
  { href: "#uslugi", label: "Uslugi", hasDropdown: true },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // On subpages, always show solid navbar
  const isSolid = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link
            href="/"
            className={`text-lg font-bold tracking-tight transition-colors lg:text-xl ${
              isSolid ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <span className="font-serif">Pogotowie Dachow</span>
            <span
              className={`ml-1 font-sans text-sm font-black lg:text-base ${isSolid ? "text-accent" : "text-primary-foreground/80"}`}
            >
              24h
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                      isSolid ? "text-foreground" : "text-primary-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-border bg-card p-2 shadow-xl">
                      {services.map((s) => {
                        const Icon = getIcon(s.icon)
                        return (
                          <Link
                            key={s.slug}
                            href={`/uslugi/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-primary" />
                            {s.title}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                    isSolid ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+48518235365"
              className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:flex"
            >
              <Phone className="h-4 w-4" />
              Zadzwon teraz
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`rounded-md p-2 lg:hidden ${
                isSolid ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label={mobileOpen ? "Zamknij menu" : "Otworz menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-card lg:hidden">
            <div className="flex flex-col px-4 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Strona Glowna
              </Link>

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Uslugi
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 flex flex-col border-l border-border pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/uslugi/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={isHome ? "#realizacje" : "/#realizacje"}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Realizacje
              </Link>
              <Link
                href={isHome ? "#opinie" : "/#opinie"}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Opinie
              </Link>
              <Link
                href={isHome ? "#kontakt" : "/#kontakt"}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile sticky call button */}
      <a
        href="tel:+48518235365"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-lg sm:hidden"
        aria-label="Zadzwon: 518 235 365"
      >
        <Phone className="h-4 w-4" />
        Zadzwon: 518 235 365
      </a>
    </>
  )
}
