"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesCarouselProps {
  features: Feature[]
}

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, features.length])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Desktop: Show all features in grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile: Show carousel */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="min-w-full text-center px-4">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full bg-transparent"
            aria-label="Previous feature"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-chint-blue w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full bg-transparent"
            aria-label="Next feature"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
