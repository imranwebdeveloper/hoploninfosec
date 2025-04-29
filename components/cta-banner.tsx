import Link from "next/link"

export function CtaBanner() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            We're Here to Secure Your Hard Work
          </h2>
          <p className="text-white text-lg max-w-4xl mx-auto mb-10">
            Protect your system from cyber attacks by utilizing our comprehensive range of services. Safeguard your data
            and network infrastructure with our advanced security measures, tailored to meet your specific needs. With
            our expertise and cutting-edge technology, you can rest assured.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
