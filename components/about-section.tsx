export function AboutSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container md:px-8 mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold mb-6">
          About Us
          <div className="w-48 md:w-96 h-1 bg-red-600 mt-2 mb-8"></div>
        </h2>

        <p className="text-lg mb-16 max-w-5xl">
          At Hoplon Infosec, our extensive over decade of experience enables us
          to effectively combat the present-day cybersecurity challenges. With
          our innovative deep web & dark web monitoring, cyber threat
          intelligence, attack surface management, risk management,
          vulnerability management, incident response, penetration testing, red
          teaming, brand intelligence, takedown & disruption, consulting
          services, and cybersecurity training; we provide unmatched guidance to
          organizations across industries, regions, and the globe, regardless of
          their size. As a dependable partner and seasoned authority, we
          cultivate robust partnerships with our clients, guaranteeing enduring
          triumph through our collaborative efforts.
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
              <h3 className="text-2xl font-bold mb-2">
                World Class Professional Cybersecurity team
              </h3>
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
              <h3 className="text-2xl font-bold mb-2">
                We succeed when we make our clients successful.
              </h3>
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
              <h3 className="text-2xl font-bold mb-2">
                Continuous Growth with Operational Excellence
              </h3>
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
              <h3 className="text-2xl font-bold mb-2">
                Our team is committed with Honesty and Teamwork
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
