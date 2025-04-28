import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  Search,
  Shield,
  Globe,
  Bug,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-purple-900 text-white flex justify-end items-center px-4 py-2 space-x-4">
        <Link href="/contact" className="flex items-center gap-2 text-sm">
          <Mail size={16} />
          <span className="hidden md:inline">Contact Us</span>
        </Link>
        <Link href="/contact" className="flex items-center gap-2 text-sm">
          <Phone size={16} />
          <span className="hidden md:inline">Contact Us</span>
        </Link>
        <Link
          href="/schedule"
          className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>

      {/* Navigation */}
      <header className="bg-purple-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center py-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Infosec Logo"
                width={80}
                height={80}
                className="mr-2"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="py-4 text-white hover:text-purple-200 transition-colors">
              Home
            </Link>
            <Link href="/services" className="py-4 text-white hover:text-purple-200 transition-colors">
              Services
            </Link>
            <Link href="/products" className="py-4 text-white hover:text-purple-200 transition-colors">
              Products
            </Link>
            <Link href="/resources" className="py-4 text-white hover:text-purple-200 transition-colors">
              Resources
            </Link>
            <Link href="/certifications" className="py-4 text-white hover:text-purple-200 transition-colors">
              Certifications
            </Link>
            <Link href="/about" className="py-4 text-white hover:text-purple-200 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center">
            <button className="p-2 text-white" aria-label="Search">
              <Search size={24} />
            </button>
            <button className="md:hidden p-2 text-white" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-900 opacity-90"></div>

          {/* Hero content */}
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Securing Your Digital World
                </h1>
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

        {/* Services Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full mb-8">Our Services</div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16">High Tech Cybersecurity for the Smart Generation</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-gray-900 rounded-lg p-8 text-left">
                <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Offensive Security</h3>
                <p className="text-gray-300 mb-6">
                  How effective is your organization's cybersecurity? Identify and exploit vulnerabilities of your own
                  organization's cybersecurity before attackers.
                </p>
                <Link
                  href="/services/offensive-security"
                  className="text-purple-500 flex items-center hover:text-purple-400 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="bg-gray-900 rounded-lg p-8 text-left">
                <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Deep web and Dark Web</h3>
                <p className="text-gray-300 mb-6">
                  Unlike the visible surface web or open web, regular search engines can't find deep web or invisible
                  web or hidden web even though more than 90% of all websites are deep web.
                </p>
                <Link
                  href="/services/deep-web"
                  className="text-purple-500 flex items-center hover:text-purple-400 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="bg-gray-900 rounded-lg p-8 text-left">
                <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Bug size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Penetration Testing</h3>
                <p className="text-gray-300 mb-6">
                  Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world
                  cyberattack to find weaknesses of your system.
                </p>
                <Link
                  href="/services/penetration-testing"
                  className="text-purple-500 flex items-center hover:text-purple-400 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6">
              About Us
              <div className="w-96 h-1 bg-red-600 mt-2 mb-8"></div>
            </h2>

            <p className="text-lg mb-16 max-w-5xl">
              At Hoplon Infosec, our extensive over decade of experience enables us to effectively combat the
              present-day cybersecurity challenges. With our innovative deep web & dark web monitoring, cyber threat
              intelligence, attack surface management, risk management, vulnerability management, incident response,
              penetration testing, red teaming, brand intelligence, takedown & disruption, consulting services, and
              cybersecurity training; we provide unmatched guidance to organizations across industries, regions, and the
              globe, regardless of their size. As a dependable partner and seasoned authority, we cultivate robust
              partnerships with our clients, guaranteeing enduring triumph through our collaborative efforts.
            </p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex items-start space-x-6">
                <div className="text-red-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">World Class Professional Cybersecurity team</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-red-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 21l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M10 7V3m0 0L8 5m2-2l2 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 11.8A3 3 0 0 0 10.24 14h3.52A3 3 0 0 0 16 11.8c0-1.68-1.12-2.52-2.24-3.36C12.52 7.44 12 6.84 12 5.6c0 1.24-.52 1.84-1.76 2.84C9.12 9.28 8 10.12 8 11.8Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">We succeed when we make our clients successful.</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-red-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Continuous Growth with Operational Excellence</h3>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-red-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our team is committed with Honesty and Teamwork</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Logo and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Hoplon Infosec Logo"
                width={120}
                height={120}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span className="sr-only">X/Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-gray-300 transition-colors">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Start Using Hoplon Now.</h3>
              <p className="mb-6">
                Total protection has never been more effortless. Take advantage of our services to explore the most
                popular solutions for your business:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Protect against malware with Endpoint Security.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Defend against threats on your mobile devices with our Mobile Security.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Protect your Emails with our Email Security.
                </li>
              </ul>
              <Link
                href="/schedule"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-bold mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/red-teaming" className="hover:text-gray-300 transition-colors">
                    AI-Driven Automated Red Teaming
                  </Link>
                </li>
                <li>
                  <Link href="/products/cloud-storage" className="hover:text-gray-300 transition-colors">
                    Cloud Storage and Disaster Recovery
                  </Link>
                </li>
                <li>
                  <Link href="/products/email-security" className="hover:text-gray-300 transition-colors">
                    Email Security and Anti-phishing
                  </Link>
                </li>
                <li>
                  <Link href="/products/mobile-security" className="hover:text-gray-300 transition-colors">
                    Mobile Security
                  </Link>
                </li>
                <li>
                  <Link href="/products/endpoint-security" className="hover:text-gray-300 transition-colors">
                    Endpoint Security
                  </Link>
                </li>
                <li>
                  <Link href="/products/dark-web-monitoring" className="hover:text-gray-300 transition-colors">
                    Deep and Dark Web Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/products/xdr" className="hover:text-gray-300 transition-colors">
                    XDR-Extended Detection & Response
                  </Link>
                </li>
                <li>
                  <Link href="/products/training-software" className="hover:text-gray-300 transition-colors">
                    Training Software
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/penetration-testing" className="hover:text-gray-300 transition-colors">
                    Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link href="/services/compliance" className="hover:text-gray-300 transition-colors">
                    Cybersecurity Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services/offensive-security" className="hover:text-gray-300 transition-colors">
                    Offensive Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/consultation" className="hover:text-gray-300 transition-colors">
                    Cybersecurity Consultation and Training
                  </Link>
                </li>
                <li>
                  <Link href="/services/incident-response" className="hover:text-gray-300 transition-colors">
                    Incident Response and Digital Forensic Investigation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-bold mb-6">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition-colors">
                    About Hoplon Infosec
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-gray-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-gray-300 transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-gray-300 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-gray-300 transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/contact" className="text-sm hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/cookie-policy" className="text-sm hover:text-gray-300 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="text-sm hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">Copyright © Hoplon InfoSec, LLC and its group of companies.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
