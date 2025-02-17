import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./highlights.css"; // Ensure this file is in the same folder
import IT from './it';

const DepartmentHighlights = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [milestones, setMilestones] = useState({});
  const timelineRef = useRef(null);

  // Fetch highlights from the API
  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/highlights");
        const data = await response.json();
        console.log("Fetched Highlights:", data); // Debugging
        setHighlights(data.highlights || []); // Handle potential undefined
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };
    fetchHighlights();
  }, []);

  // Fetch milestones from the API
  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/milestones");
        const data = await response.json();
        console.log("Fetched Milestones:", data); // Debugging

        if (!Array.isArray(data)) {
          console.error("Milestones API returned unexpected format", data);
          return;
        }

        const groupedMilestones = data.reduce((acc, milestone) => {
          if (!milestone.year || !milestone.milestone) return acc; // Ignore invalid entries
          const { year, milestone: event } = milestone;
          acc[year] = acc[year] || [];
          acc[year].push(event);
          return acc;
        }, {});

        const sortedMilestones = Object.keys(groupedMilestones)
          .sort((a, b) => a - b)
          .reduce((acc, year) => {
            acc[year] = groupedMilestones[year];
            return acc;
          }, {});

        console.log("Processed Milestones:", sortedMilestones);
        setMilestones(sortedMilestones);
      } catch (error) {
        console.error("Error fetching milestones:", error);
      }
    };

    fetchMilestones();
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-id");
            if (itemId && !visibleItems.includes(itemId)) {
              setVisibleItems((prev) => [...prev, itemId]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const items = document.querySelectorAll(".highlight-item, .milestoneBlock");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [visibleItems, milestones]);

  return (
    <div>
      <IT />
      <div className="min-h-screen bg-white py-8 px-4 yellow-theme">
        <div className="max-w-6xl mx-auto">
          {/* Highlights Section */}
          <div className="mb-16">
            <h2 className="highlights-title">Highlights</h2>
            <div className="highlights-grid">
              {highlights.length > 0 ? (
                highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight._id || index}
                    className="highlight-item unique-highlight"
                    data-id={`highlight-${index}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={visibleItems.includes(`highlight-${index}`) ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{highlight.highlights}</p>
                  </motion.div>
                ))
              ) : (
                <p>No highlights available.</p>
              )}
            </div>
          </div>

          {/* Milestones Section */}
          <h2 className="milestones-title">Milestones</h2>

          <div className="timeline-wrapper" ref={timelineRef}>
            {Object.keys(milestones).length > 0 ? (
              Object.entries(milestones).map(([year, events]) => (
                <div key={year} style={{ marginBottom: "2rem" }}>
                  <div className="milestoneYear text-left">{year}</div>
                  <ul className="milestoneList">
                    {events.map((event, idx) => (
                      <motion.li
                        key={`${year}-${idx}`}
                        className="milestoneBlock"
                        data-id={`${year}-${idx}`}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                        animate={visibleItems.includes(`${year}-${idx}`) ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {event}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No milestones available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHighlights;
