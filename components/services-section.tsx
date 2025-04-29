import Link from "next/link"
import { Shield, Globe, Bug, ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
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
              Unlike the visible surface web or open web, regular search engines can't find deep web or invisible web or
              hidden web even though more than 90% of all websites are deep web.
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
              Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world cyberattack
              to find weaknesses of your system.
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
  )
}
