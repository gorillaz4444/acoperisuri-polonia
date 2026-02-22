"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, FileText } from "lucide-react";

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 },
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="start" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/casa-mare.jpeg"
          alt="Profesjonalne uslugi dekarskie - dom z nowym dachem w trakcie realizacji"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 lg:px-8 lg:py-40">
        <div
          ref={contentRef}
          className="max-w-3xl opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              pogotowiedachow24h.pl
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Kompleksowe Uslugi Dekarskie – Wroclaw i Dolny Slask
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            Naprawa dachow, wymiana pokrycia, nowe dachy – szybkie terminy
            realizacji. Ponad 15 lat doswiadczenia w branzy dekarskiej.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+48518235365"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Zadzwon 518 235 365
            </a>
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              <FileText className="h-5 w-5" />
              Darmowa wycena
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
