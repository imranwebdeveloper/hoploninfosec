"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Sheet Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-[280px] bg-purple-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 text-white rounded-full hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100%-64px)]">
          <Link
            href="/"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/products"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/resources"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <Link
            href="/certifications"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            Certifications
          </Link>
          <Link
            href="/about"
            className="py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>

          <div className="mt-8 border-t border-purple-800 pt-6">
            <Link
              href="/schedule"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md text-center transition-colors"
              onClick={toggleMenu}
            >
              Schedule a Consultation
            </Link>

            <div className="mt-4 space-y-3">
              <Link
                href="/contact"
                className="flex items-center py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="flex items-center py-3 px-4 text-white hover:bg-purple-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Client Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
