import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { RealizationsSection } from "@/components/realizations-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
        <RealizationsSection />
        <ReviewsSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
