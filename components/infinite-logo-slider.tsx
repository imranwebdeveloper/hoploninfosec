"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Logo {
  src: string
  alt: string
}

interface InfiniteLogoSliderProps {
  logos: Logo[]
  speed?: number
  pauseOnHover?: boolean
}

export function InfiniteLogoSlider({ logos, speed = 30, pauseOnHover = true }: InfiniteLogoSliderProps) {
  const [isHovering, setIsHovering] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    if (!sliderRef.current) return

    const slider = sliderRef.current
    const animationDuration = logos.length * speed

    slider.style.animationDuration = `${animationDuration}s`

    if (isHovering && pauseOnHover) {
      slider.style.animationPlayState = "paused"
    } else {
      slider.style.animationPlayState = "running"
    }
  }, [isHovering, logos.length, pauseOnHover, speed])

  return (
    <div
      className="overflow-hidden bg-purple-900 bg-opacity-50 rounded-3xl py-8 px-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={sliderRef} className="flex animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 bg-white rounded-lg p-6 flex items-center justify-center w-48 h-24"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
