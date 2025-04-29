// Partner logos data
const partnerLogos = [
  { src: "/placeholder.svg?height=60&width=120", alt: "Check Point" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Trend Micro" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Acronis" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Ingram Micro" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Kron" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Microsoft" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Cisco" },
  { src: "/placeholder.svg?height=60&width=120", alt: "Fortinet" },
]

import { TopContactBar } from "@/components/top-contact-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CtaBanner } from "@/components/cta-banner"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopContactBar />
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <CtaBanner />
        <ServicesSection />
        <PartnersSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}
