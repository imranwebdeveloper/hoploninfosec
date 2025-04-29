import Link from "next/link";

export function CtaBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-black py-16 ">
      <div className="container md:px-8 mx-auto px-4 max-w-7xl ">
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-white text-lg max-w-4xl mx-auto mb-10">
            {description}
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
  );
}
