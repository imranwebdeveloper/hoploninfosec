import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-900 opacity-90"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Securing Your Digital World</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Providing top to bottom cybersecurity consulting and services to protect your business from digital
              threats.
            </p>
            <div>
              <Link
                href="/get-started"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Cybersecurity Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
