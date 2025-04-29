"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

interface Logo {
  src: string
  alt: string
}

interface PartnerLogoSliderProps {
  logos: Logo[]
}

export function PartnerLogoSlider({ logos }: PartnerLogoSliderProps) {
  // This ensures Swiper works correctly with SSR
  useEffect(() => {
    // This is just to ensure Swiper initializes properly in Next.js
  }, [])

  return (
    <div className="bg-purple-900 bg-opacity-50 rounded-3xl py-8 px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="partner-slider"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
