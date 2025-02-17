import React, { useState, useEffect, useCallback } from "react";
import ItBrochure from "./assets/Epoch.jpg";
import rubyBrochure from "./assets/ruby.jpg";
import pongalBrochure from "./assets/pongal.jpg";
import tbiBrochure from "./assets/tbi.jpg";

const events = [
  {
    date: { day: 25, month: "Jan" },
    type: "WEBINAR",
    title: "Higher Education",
    description: "A webinar on higher education: Study Abroad",
    department: "CSE",
    className: "bg-red-600",
    brochureImage: ItBrochure,
  },
  {
    date: { day: 25, month: "Jan" },
    type: "EVENT",
    title: "App Designing Contest",
    description: "Timing: 10AM",
    department: "IT",
    className: "bg-blue-900",
    brochureImage: rubyBrochure,
  },
  {
    date: { day: 23, month: "Jan" },
    type: "SEMINAR",
    title: "The Global and Local Dimensions of Climate Change",
    description: "IEI (India), Coimbatore Local Centre sponsored a two-day seminar on 'Climate Change: Global and Local Mitigation and Adaptation.' Registration Link",
    department: "CIVIL",
    className: "bg-red-600",
    brochureImage: pongalBrochure,
  },
  {
    date: { day: 27, month: "Jan" },
    type: "Interaction",
    title: "Frugal innovation and economy",
    description: "Welcoming guest Navi Radjou",
    department: "TBI KEC",
    className: "bg-blue-900",
    brochureImage: tbiBrochure,
  },
];

const EventCard = React.memo(({ event, onBrochureClick }) => {
  return (
    <div className={`p-8 text-white ${event.className} flex flex-col justify-between min-h-[400px] w-full rounded-lg shadow-xl`}>
      <div className="event-type self-start">
        <div className="event-type-label bg-white text-gray-800 text-xs font-semibold px-3 py-1 uppercase rounded-r-full">
          {event.type}
        </div>
      </div>
      <div className="event-date mb-2">
        <span className="event-day text-2xl md:text-4xl font-medium">{event.date.day}</span>
        <span className="event-month text-xl md:text-2xl font-medium ml-2">{event.date.month}</span>
      </div>
      <h3 className="event-title text-lg md:text-xl font-medium mb-2 leading-tight">{event.title}</h3>
      <p className="event-description text-xs md:text-sm opacity-90 mb-4 flex-grow">{event.description}</p>
      <div className="event-footer flex justify-between items-center">
        <span className="event-department text-xs md:text-sm font-medium uppercase">{event.department}</span>
        <button
          onClick={() => onBrochureClick(event)}
          className="event-brochure-button text-xs md:text-sm font-medium uppercase text-white border-2 border-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={`View brochure for ${event.title}`}
        >
          BROCHURE
        </button>
      </div>
    </div>
  );
});

function EventsCarousel({ events, onBrochureClick }) {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextEvent = useCallback(() => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) => (prevIndex + 1) % events.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [events.length]);

  useEffect(() => {
    const timer = setInterval(nextEvent, 5000);
    return () => clearInterval(timer);
  }, [nextEvent]);

  const getVisibleEvents = () => {
    let visibleEvents = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % events.length;
      visibleEvents.push(events[index]);
    }
    return visibleEvents;
  };

  return (
    <div className="events-carousel relative w-full overflow-hidden" role="region" aria-label="Events carousel">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {getVisibleEvents().map((event, i) => (
          <div
            key={`${startIndex}-${i}`}
            className="transition-all duration-500 transform hover:scale-105"
            style={{
              opacity: isTransitioning ? 0.7 : 1,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <EventCard event={event} onBrochureClick={onBrochureClick} />
          </div>
        ))}
      </div>
     
      <div className="carousel-controls flex justify-center gap-2 mt-4">
        {events.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === startIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => setStartIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBrochureClick = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const handleCloseBrochure = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedEvent) {
        handleCloseBrochure();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent, handleCloseBrochure]);

  return (
    <section className="events-section min-h-screen w-full py-8 px-4 bg-gray-100">
      <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        News and Events
      </h2>
      <div className="max-w-[1400px] mx-auto">
        <EventsCarousel events={events} onBrochureClick={handleBrochureClick} />
      </div>
      {selectedEvent && (
        <div
          className="brochure-overlay fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-title"
          onClick={handleCloseBrochure}
        >
          <div
            className="brochure-content relative max-w-4xl w-full bg-white rounded-xl p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseBrochure}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="Close brochure"
            >
              ×
            </button>
            <div className="brochure-image-container w-full flex justify-center items-center">
              <img
                src={selectedEvent.brochureImage || "/placeholder.svg"}
                alt={`${selectedEvent.department} Brochure`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = "/placeholder.svg";
                  e.target.alt = "Image failed to load";
                }}
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800" id="brochure-title">
                {selectedEvent.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}