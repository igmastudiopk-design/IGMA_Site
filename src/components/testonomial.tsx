"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We wanted performance, not just visuals. IGMA blends flawless product photography with a skilled digital strategy. Our product page conversion rate increased dramatically, proving that quality drives sales.",
    author: "Amelia Micheal",
    title: "Media Executive, Buying & Control",
    company: "discord",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote:
      "IGMA is the best company for social media growth. Their team merges viral Reels content with a smart engagement strategy. Since partnering with them, our organic followers and engagement have increased significantly.",
    author: "James Richardson",
    title: "Chief Marketing Officer, Tech Solutions",
    company: "discord",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote:
      "From day one, IGMA demonstrated a deep understanding of our industry challenges. Their innovative approach to content creation and campaign management has set us apart from competitors. We couldn't have asked for better partners.",
    author: "Sarah Chen",
    title: "Head of Digital Strategy, Fashion & Retail",
    company: "discord",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    quote:
      "IGMA's strategic insights and creative excellence have transformed our online presence completely. The measurable results speak for themselves - our ROI has increased substantially. Their team is truly exceptional and professional.",
    author: "Michael Torres",
    title: "VP of Communications, Global Enterprise",
    company: "discord",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    quote:
      "We partnered with IGMA during a critical growth phase for our startup. Their data-driven approach and creative execution helped us establish a strong market presence. Highly recommended for any business serious about digital transformation.",
    author: "Emma Watson",
    title: "Founder & CEO, Innovation Labs",
    company: "discord",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    quote:
      "IGMA's ability to combine strategy with creativity is remarkable. They deliver consistent, high-quality results that drive real business impact. Our partnership has been one of the best investments we've made in our marketing efforts.",
    author: "David Patel",
    title: "Director of Marketing, E-Commerce Leaders",
    company: "discord",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-8 px-4" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Testimonial Card - Added more top padding */}
        <div
          className="rounded-3xl flex flex-col md:flex-row gap-6 md:gap-8 w-[80%] min-h-[300px] md:min-h-[340px]"
          style={{ backgroundImage: "linear-gradient(to right, #172419, #145540)" }}
        >
          {/* Profile Image - Increased top padding */}
          <div className="flex-shrink-0 pt-10 pl-8 md:pt-22 md:pl-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-teal-500">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Increased top padding to match */}
          <div className="flex-1 pr-8 pb-8 pt-22 md:pr-10 md:pb-10 md:pt-22">
            {/* Quote - Smaller text size */}
            <p className="text-white text-sm md:text-base leading-relaxed mb-6">
              {currentTestimonial.quote}
            </p>

            {/* Author Info - Smaller text */}
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h3 className="text-white font-medium text-xs md:text-sm">{currentTestimonial.author}</h3>
                <p className="text-teal-200 text-xs mt-0.5">{currentTestimonial.title}</p>
              </div>
            </div>

            {/* Discord Icon - Smaller */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-teal-800" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .087-.027c.461-.63.87-1.295 1.216-1.994a.077.077 0 0 0-.042-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1 .008-.128 10.7 10.7 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.5-4.761-.838-8.898-3.549-12.571a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.956-2.157 2.157-2.157 1.201 0 2.169.964 2.157 2.157 0 1.19-.956 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.955-2.157 2.157-2.157 1.201 0 2.169.964 2.157 2.157 0 1.19-.956 2.156-2.157 2.156z" />
                </svg>
              </div>
              <span className="text-white text-xs font-medium">DISCORD</span>
            </div>
          </div>
        </div>

        {/* Navigation Dots and Arrows - Reduced spacing */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-teal-500" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}