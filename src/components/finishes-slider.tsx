"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

// Register Swiper web components
register()

// Add TypeScript declarations for Swiper custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        init?: string
      }
      "swiper-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

interface Image {
  src: string
  alt: string
}

interface FinishesSliderProps {
  images: Image[]
  id: string
  autoplay?: boolean
}

export default function FinishesSlider({ images, id, autoplay = false }: FinishesSliderProps) {
  const swiperElRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Get the current swiper element
    const swiperEl = swiperElRef.current

    if (swiperEl) {
      // Configure Swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: `.${id}-next`,
          prevEl: `.${id}-prev`,
        },
        pagination: {
          el: `.${id}-pagination`,
          clickable: true,
        },
        loop: true,
      }

      // Add autoplay if specified
      if (autoplay) {
        Object.assign(swiperParams, {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 600,
        })
      }

      // Assign parameters to swiper element
      Object.assign(swiperEl, swiperParams)

      // Initialize Swiper
      swiperEl.initialize()
    }
  }, [id, autoplay])

  return (
    <div className="swiper-container">
      <swiper-container ref={swiperElRef} init="false">
        {images.map((image, index) => (
          <swiper-slide key={index}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="img-fluid" />
          </swiper-slide>
        ))}
      </swiper-container>
      <div className={`swiper-button-next ${id}-next`}></div>
      <div className={`swiper-button-prev ${id}-prev`}></div>
      <div className={`swiper-pagination ${id}-pagination`}></div>
    </div>
  )
}
