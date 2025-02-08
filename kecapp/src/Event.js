import React, {
  useState,
  useEffect,
  useCallback,
  useTransition,
  useDeferredValue,
} from "react";
import ItBrochure from "./assets/Epoch.jpg";
import rubyBrochure from "./assets/ruby.jpg";
import pongalBrochure from "./assets/pongal.jpg";
import tbiBrochure from "./assets/tbi.jpg";
import { AnimationWrapper } from "react-hover-animation";

const events = [
  {
    date: { day: 25, month: "Mar" },
    type: "National level Technical Symposium",
    title: "Epoch'25",
    description: "Inviting All Engineering Enthusiasts.",
    department: "KEC ITA",
    className: "bg-blue-900",
    brochureImage: ItBrochure,
  },
  {
    date: { day: 24, month: "Jan" },
    type: "Techno-cultural Fest",
    title: "Ruby year celebration",
    description: "Welcoming guest Thiru. Sivarajah Ramanathan",
    department: "KEC",
    className: "bg-teal-600",
    brochureImage: rubyBrochure,
  },
  {
    date: { day: 11, month: "ஜனவரி" },
    type: "திருவிழா கொண்டாட்டம்",
    title: "பொங்கல் திருவிழா",
    description: "தமிழர் திருநாள் கொண்டாட்டம்",
    department: "KEC",
    className: "bg-blue-900",
    brochureImage: pongalBrochure,
  },
  {
    date: { day: 27, month: "Jan" },
    type: "Interaction",
    title: "Frugal innovation and economy",
    description: "Welcoming guest Navi Radjou",
    department: "TBI KEC",
    className: "bg-teal-600",
    brochureImage: tbiBrochure,
  },
];



const EventCard = React.memo(({ event, onBrochureClick }) => {
  return (
    <AnimationWrapper>
      <div
        className={`event-card ${event.className} p-8 text-white rounded-lg shadow-md transition-transform duration-500 hover:scale-105 flex flex-col justify-between h-[400px] w-full max-w-md mx-auto`}
      >
        <div className="event-type self-start">
          <div className="event-type-label bg-white text-gray-700 text-xs font-semibold px-3 py-1 uppercase rounded">
            {event.type}
          </div>
        </div>
        <div className="event-date my-4">
          <span className="event-day text-5xl font-light">{event.date.day}</span>
          <span className="event-month text-3xl font-light ml-2">{event.date.month}</span>
        </div>
        <h3 className="event-title text-2xl font-light mb-4 leading-tight">{event.title}</h3>
        <p className="event-description text-sm opacity-90 mb-8 flex-grow">{event.description}</p>
        <div className="event-footer flex justify-between items-center">
          <span className="event-department text-sm font-medium uppercase">{event.department}</span>
          <button
            onClick={() => onBrochureClick(event)}
            className="event-brochure-button text-sm font-medium uppercase bg-white bg-opacity-20 border-2 border-white text-white px-4 py-2 rounded transition-all duration-300 hover:bg-opacity-30 hover:shadow-md hover:scale-105 focus:bg-opacity-40 focus:shadow-lg focus:-translate-y-1"
            aria-label={`View brochure for ${event.title}`}
          >
            BROCHURE
          </button>
        </div>
      </div>
    </AnimationWrapper>
  );
});

function EventsCarousel({ events, onBrochureClick }) {
  const [startIndex, setStartIndex] = useState(0);
  const nextEvent = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, [events.length]);

  useEffect(() => {
    const interval = setInterval(nextEvent, 5000);
    return () => clearInterval(interval);
  }, [nextEvent]);

  const deferredIndex = useDeferredValue(startIndex);
  const visibleEvents = [
    events[deferredIndex],
    events[(deferredIndex + 1) % events.length],
    events[(deferredIndex + 2) % events.length],
  ];

  return (
    <div className="events-carousel flex flex-wrap justify-center gap-4 overflow-hidden relative">
      {visibleEvents.map((event, i) => (
        <div
          key={i}
          className="event-card-container flex-1 min-w-[250px] md:min-w-[300px] transition-all duration-500 ease-in-out transform-gpu will-change-transform"
          style={{
            transform: `translateX(${i === 0 ? "-10%" : i === 1 ? "0%" : "10%"}) scale(${
              i === 1 ? 1 : 0.9
            })`,
            zIndex: i === 1 ? 2 : 1,
          }}
        >
          <EventCard event={event} onBrochureClick={onBrochureClick} />
        </div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleBrochureClick = useCallback(
    (event) => {
      startTransition(() => {
        setSelectedEvent(event);
      });
    },
    []
  );

  const handleCloseBrochure = useCallback(() => {
    startTransition(() => {
      setSelectedEvent(null);
    });
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
    <section className="events-section p-4 md:p-12 max-w-7xl mx-auto">
      <h2 className="section-title text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-blue-800">
        News and Events
      </h2>
      <EventsCarousel events={events} onBrochureClick={handleBrochureClick} />
      {selectedEvent && (
        <div
          className="brochure-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="brochure-content max-w-3xl w-full bg-transparent p-4 md:p-8 rounded-lg text-center">
            <button
              onClick={handleCloseBrochure}
              className="back-button text-sm font-medium text-white bg-blue-700 px-4 py-2 rounded uppercase transition-all duration-300 hover:bg-blue-800 active:bg-blue-900 mb-4"
              aria-label="Close brochure"
            >
              &larr; Back to Events
            </button>
            <div className="brochure-image">
              <img
                src={selectedEvent.brochureImage || "/placeholder.svg"}
                alt={`${selectedEvent.department} Brochure`}
                className="w-full h-auto rounded-lg mx-auto max-h-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
