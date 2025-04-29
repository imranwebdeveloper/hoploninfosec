"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="p-2 text-white focus:outline-none" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow">
            <Link
              href="/"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/resources"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link
              href="/certifications"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Certifications
            </Link>
            <Link
              href="/about"
              className="py-4 text-white text-xl hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="mt-8">
              <Link
                href="/schedule"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
                onClick={toggleMenu}
              >
                Schedule a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
