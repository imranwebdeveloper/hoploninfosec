import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
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
  )
}
