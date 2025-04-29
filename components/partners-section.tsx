import { PartnerLogoSlider } from "./partner-logo-slider";

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

export function PartnersSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container md:px-8 mx-auto px-4 max-w-7xl text-center">
        <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full mb-8">
          Our Partners
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Our Trusted Partners
        </h2>

        <PartnerLogoSlider logos={partnerLogos} />
      </div>
    </section>
  );
}
