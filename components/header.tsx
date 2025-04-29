import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
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
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
