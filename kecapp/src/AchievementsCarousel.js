import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/custom2.jpg",
    title: "Outstanding Placement Achievement",
    description: "Rubrik Placement with 21 LPA Package",
  },
  {
    image: "/images/custom5.jpg",
    title: "KPIT Sparkle Award",
    description: "Winner of Most Popular Project Award - ₹1,00,000",
  },
  {
    image: "/images/custom3.jpg",
    title: "Placement Achievements 2024",
    description: "Multiple students placed in top companies with excellent packages",
  },
  {
    image: "/images/custom1.jpg",
    title: "Multiple Team Achievements",
    description: "Students securing various awards and recognition at national level",
  },
  {
    image: "/images/custom4.jpg",
    title: "HEXCORP Team Victory",
    description: "Winner of Smart India Hackathon Software Edition",
  },
];

function AchievementsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 relative">
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-white rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-5 bg-blue-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-xs">
        <h3 className="text-lg font-bold text-blue-800">{slides[currentSlide].title}</h3>
        <p className="text-sm text-gray-600">{slides[currentSlide].description}</p>
      </div>
    </section>
  );
}

export default AchievementsCarousel;