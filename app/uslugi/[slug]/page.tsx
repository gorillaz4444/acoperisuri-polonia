import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services, getServiceBySlug } from "@/lib/services-data"
import { ServicePageContent } from "@/components/service-page-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      locale: "pl_PL",
      url: `https://pogotowiedachow24h.pl/uslugi/${service.slug}`,
      images: [{ url: service.heroImage }],
    },
    alternates: {
      canonical: `https://pogotowiedachow24h.pl/uslugi/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <ServicePageContent service={service} />
      <Footer />
    </>
  )
}
