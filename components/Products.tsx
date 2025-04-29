import Link from "next/link";
import { Shield, Globe, Bug, ArrowRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container md:px-8 mx-auto px-4 max-w-7xl text-center">
        <div className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full mb-8">
          Our Products
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Our Products Can Assist You in Addressing Your Cybersecurity
          Challenges.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-gray-900 rounded-lg p-8 text-left">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Email Security and Anti-phishing
            </h3>
            <p className="text-gray-300 mb-6">
              Is your email secure? By default, it’s NOT secure! Protect your
              personal or business email(s) from social engineering now.
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
            <h3 className="text-2xl font-bold mb-4">Mobile Security</h3>
            <p className="text-gray-300 mb-6">
              Do you know that mobile devices are BIG targets for attackers?
              Mobile cybersecurity encompasses the tactics, framework, and
              programs implemented to safeguard smartphone devices.
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
            <h3 className="text-2xl font-bold mb-4">Endpoint Security</h3>
            <p className="text-gray-300 mb-6">
              How secure is your end-user devices? End-point security involves
              the protection of different endpoints within a network, typically
              including end-user devices like mobile devices, laptops, and
              desktops.
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
  );
}
