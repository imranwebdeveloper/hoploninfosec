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
];

import { TopContactBar } from "@/components/top-contact-bar";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CtaBanner } from "@/components/cta-banner";
import { ServicesSection } from "@/components/services-section";
import { PartnersSection } from "@/components/partners-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { ProductsSection } from "@/components/Products";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen">
      <TopContactBar />
      <Header />

      <main className="flex-grow ">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CtaBanner
          title="We're Here to Secure Your Hard Work"
          description=" Protect your system from cyber attacks by utilizing our
            comprehensive range of services. Safeguard your data and network
            infrastructure with our advanced security measures, tailored to meet
            your specific needs. With our expertise and cutting-edge technology,
            you can rest assured."
        />
        <ProductsSection />
        <PartnersSection />
        <CtaBanner
          title="We’re Here to Secure Your Hard Work"
          description="Protect your system from cyber attacks by utilizing our comprehensive range of services. Safeguard your data and network infrastructure with our advanced security measures, tailored to meet your specific needs. With our expertise and cutting-edge technology, you can rest assured"
        />
      </main>

      <Footer />
    </div>
  );
}
