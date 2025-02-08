"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ChevronRight, ChevronLeft, BarChart, Landmark, Leaf, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "../index.css"

// Stats Data
const stats = [
  { number: 1984, label: "Established", icon: Landmark, suffix: "" },
  { number: 170, label: "Acre Green Campus", icon: Leaf, suffix: "" },
  { number: 8000, label: "Students", icon: Users, suffix: "+" },
]

// Rankings Data
const rankings = [
  { title: "NAAC", description: "A++ Grade", year: 2024 },
  { title: "Careers 360 Magazine", description: "KEC graded AAAA", year: 2024 },
  { title: "NIRF – India Ranking", description: "Band of 101 to 150 in the Engineering Category", year: 2024 },
  { title: "NIRF – India Ranking", description: "Band of 51 to 100 in the Innovation Category", year: 2023 },
  {
    title: "Education World",
    description: "65th Position among top Private Engineering Colleges in India including Deemed Universities",
    year: 2023,
  },
  {
    title: "The Week – HANSA Research Survey",
    description:
      "57th Position among Top Engineering Institutions including IIT, NIT, Deemed to be Universities in India",
    year: 2023,
  },
  {
    title: "Times-Annual Top Engineering Institute Survey",
    description:
      "25th Rank among Top 170 Engineering Institutions including Govt., Deemed to be Universities and Private Institutions in India",
    year: 2023,
  },
  {
    title: "India Today - MDRA Survey",
    description: "58th Rank among Top Private Engineering Institutions including Deemed to be Universities in India",
    year: 2023,
  },
  {
    title: "Business World",
    description: "54th Rank among Best Engineering Colleges including IIT, IIM, NIT Deemed to be Universities in India",
    year: 2023,
  },
  {
    title: "CSR - GHRDC Engineering College Survey",
    description: "Eminent and Well-known Engineering Institutes in India",
    year: 2023,
  },
  {
    title: "Reader's Digest",
    description: "58th Rank among Private Engineering Institutions including Deemed to be Universities in India",
    year: 2023,
  },
  {
    title: "Anandha Vikatan Magazine",
    description: "4th Position among Self Financing Colleges in the Western region of Tamilnadu",
    year: 2023,
  },
  {
    title: "The Week – HANSA Research Survey Best B Schools",
    description: "109th Position among Best B Schools in India",
    year: 2023,
  },
  {
    title: "India Today-India's Best B Schools",
    description: "100th Position among Best Private B Schools in India",
    year: 2023,
  },
  {
    title: "Career 360 Magazine - India's Best B School",
    description: "Kongu Engineering College Graded as AAA",
    year: 2023,
  },
  {
    title: "NIRF",
    description: "118th Rank in Engineering Category including IIT, NIT, Deemed to be Universities in India",
    year: 2022,
  },
]

export default function HomePage() {
  const [countedStats, setCountedStats] = useState([0, 0, 0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const statsRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting()
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const startCounting = () => {
    const interval = setInterval(() => {
      setCountedStats((prevState) =>
        prevState.map((stat, index) => {
          if (stat < stats[index].number) {
            return stat + Math.ceil(stats[index].number / 100)
          } else {
            return stats[index].number
          }
        }),
      )
    }, 40)
    return () => clearInterval(interval)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextRanking()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextRanking = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setActiveIndex((prev) => (prev + 1) % rankings.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevRanking = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setActiveIndex((prev) => (prev - 1 + rankings.length) % rankings.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Video Section */}
      <section className="relative h-screen">
  <video
    ref={videoRef}
    src="images/kec_tour.mp4"
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Text Overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
   
  </div>
</section>


      {/* Marquee Section */}
      <section className="bg-[#01013f] py-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee text-white text-lg md:text-xl">
            <span className="mx-4">🎓 Welcome to Kongu Engineering College! 🎓</span>
            <span className="mx-4">🏆 Ranked among the top engineering colleges in India! 🏆</span>
            <span className="mx-4">🌿 170 Acre Green Campus 🌿</span>
            <span className="mx-4">👨‍🎓 8000+ Students 👩‍🎓</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 md:py-16 bg-blue-100">
  <div className="max-w-7xl mx-auto px-4">
    {/* Text Above the Image */}
    <div className="mb-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
        Welcome to Kongu Engineering College
      </h2>
      <p className="text-sm md:text-lg text-gray-700">
        Empowering students with knowledge and innovation for over four decades.
      </p>
    </div>

    {/* Responsive Image */}
    <div className="mb-8">
      <img 
        src="https://rnd.kongu.edu/images/kec.png" 
        alt="Campus Overview" 
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-4 md:p-6 transform hover:scale-105 transition-transform"
        >
          <div className="flex justify-center items-center mb-4">
            <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-900" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            {countedStats[index]}{stat.suffix}
          </h3>
          <p className="text-lg md:text-xl text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Rankings Section */}
      <section className="min-h-screen bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-[#003399] text-3xl md:text-6xl font-bold mb-4">RANKED TOP</h1>
            <p className="text-lg md:text-2xl text-[#003399]">among India's private universities</p>
          </motion.div>

          <div className="relative">
            <button
              onClick={prevRanking}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 z-10 bg-[#FFCC00] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#FFD633] transition-colors transform hover:scale-110"
              aria-label="Previous ranking"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#003399]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-2 border-[#003399] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
                    <h2 className="text-xl md:text-3xl font-bold text-[#003399]">{rankings[activeIndex].title}</h2>
                    <span className="text-lg md:text-xl font-semibold text-white bg-[#003399] px-3 py-1 md:px-4 md:py-2 rounded-full mt-2 md:mt-0">
                      {rankings[activeIndex].year}
                    </span>
                  </div>
                  <div className="bg-[#FFCC00] w-12 md:w-16 h-1 mb-4 md:mb-6"></div>
                  <p className="text-base md:text-xl text-[#003399] leading-relaxed">{rankings[activeIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextRanking}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 z-10 bg-[#FFCC00] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#FFD633] transition-colors transform hover:scale-110"
              aria-label="Next ranking"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#003399]" />
            </button>
          </div>

          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
            {rankings.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#003399]" : "bg-[#003399]/30"
                }`}
                aria-label={`Go to ranking ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#003399] mb-4">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-[#003399] transform hover:scale-105 transition-transform">
              <p className="text-3xl md:text-4xl font-bold text-[#FFCC00] mb-2">40+</p>
              <p className="text-base md:text-lg text-[#003399]">Years of Excellence</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-[#003399] transform hover:scale-105 transition-transform">
              <p className="text-3xl md:text-4xl font-bold text-[#FFCC00] mb-2">50k+</p>
              <p className="text-base md:text-lg text-[#003399]">Alumni Network</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-[#003399] transform hover:scale-105 transition-transform">
              <p className="text-3xl md:text-4xl font-bold text-[#FFCC00] mb-2">100%</p>
              <p className="text-base md:text-lg text-[#003399]">Placement Assistance</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Virtual Campus Tour Button */}
      <div className="fixed right-4 bottom-4">
        <a href="https://naveenkumarr21.github.io/vr-deploy/" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
          >
            <BarChart className="w-4 h-4 md:w-5 md:h-5" /> Virtual Campus Tour
          </motion.button>
        </a>
      </div>
    </div>
  )
}
