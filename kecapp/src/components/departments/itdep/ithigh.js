import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./highlights.css" // Ensure this file is in the same folder
import IT from './it';
const highlights = [
  "Accredited by NBA three times",
  "Anna University approved Research Centre",
  "Completed 9 funded Research Projects",
  "Conferences organized National : 8 International: 4",
  "20 MoUs signed with leading industries and start-ups",
  "Bagged overall Best department Award in cultural activities twice (2018 & 2019)",
  "Bagged overall Best department Award in 2019",
  "Bagged overall Best department Award in cultural activities twice (2022 & 2023)",
  "Overall Best Implementation of MoUs Award in 2023",
  "Centre of excellence in Data Science",
  "27 Research Scholars completed PhD and 43 are pursuing in the IT Research Centre",
  "Android Application Development and Coding Clubs for Competitive Programming skills",
  "Well qualified and experienced faculty",
  "9 faculty members are recognized as supervisors by Anna University, Chennai",
  "110 Books published; 6 books are referred in leading universities",
  "INSA Summer fellowship undertaken by 4 faculty members",
  "24 Patents obtained",
  "Our Faculty flying Officer A.Jeevanatham got first in order of merit award in All India Pre Commission Training Course for Associate NCC Officers conducted by Ministry of Defence, New Delhi",
  "Consistent Placement track record of 90% with an average CTC of 4.7 Lakhs per annum",
  "Students won first prize (Rs.2 Lakhs) in ThinkAHack! @ KGiSL, Coimbatore",
  "Pranesh represented Tamilnadu, Pondicherry and Andaman Region in 70th Republic day Parade @ New Delhi",
  "One final year student won Gold Medal in Tennis, Khelo India University Games 2022",
  "Organized two national level seminars sponsored by CSIR and DRDO in 2022",
  "Conversion of Projects into Papers",
  "Our student won in silver category of Tamilnadu Startup Mania Thiruvizha Contest",
  "Conducted Thoorigai, a competition for differently-abled children",
]

const milestones = {
  2014: [
    'Conducted two IIT Bombay sponsored programmes on "Computer Networking" and "Cyber Security"',
    'A project titled "Energy Efficient Pollution Monitoring system using Wireless Sensor Networks" sponsored by Computer Society of India',
    "R.Jeya Sri Bagged overall Best Sports Woman Award",
  ],
  2015: [
    'Organized DBT Sponsored National level seminar on "Data Science: Scope of Big Data in Genomic Sequencing and Diagnostic Imaging"',
    'Organized DBT Sponsored National level conference on "Advanced Computational Intelligence Techniques for Big Data in Biomedicine and its Applications"',
    'Organized NBHM sponsored seminar on "Stochastic Modelling and Probabilistic Calculation for Wireless Networks"',
  ],
  2016: [
    'Organized SERB Sponsored National-Level Seminar on "Climate Smart Agriculture: Multi-Disciplinary Approaches using IoT, Cloud and Big Data"',
    'A minor research project on "Pattern Improvement in Rank based Association Rule Mining for Energy Conservation in Wireless Sensor Networks" sponsored by UGC, New Delhi',
    "Conducted 9 self-supported workshops",
    "Sri Meenakshi bagged overall Best student in Extra Curricular Activities",
    "J.Nilafer bagged overall Best outgoing student (Female)",
  ],
  2017: [
    "Wireless Networks Laboratory and Computing Laboratory established",
    "Organized an FDP on Introduction to R Programming sponsored by ICT Academy",
  ],
  2018: [
    "Organized International Conference on Intelligent Computing and Communication for Smart World 2018",
    "Overall Best department Award in Intra college cultural Festival Enthusia'18",
  ],
  2019: [
    'Organized an FDP on "Internet of Things: Vision, Architecture, Building Applications and Research Challenges" sponsored by AICTE',
    "Students won first prize (Rs.2 Lac) in ThinkAHack ! organized by KGiSL, Coimbatore",
    "Our student M.Pranesh represented Tamilnadu, Pondicherry and Andaman Region in 70th Republic day Parade @ New Delhi",
    "Adjudged as Best department of the year",
    "Overall Best department Award in Intra college cultural Festival Enthusia'19",
    "Enterprise Resource Planning cell established",
    "Reaccredited by NBA",
  ],
  2021: [
    "Commencement of B.Tech. Artificial Intelligence and Data Science & B.Tech. Artificial Intelligence and Machine Learning with an intake of 60",
    "Coding Club Started for encouraging Competitive Programming",
    "MoUs Signed with M/s. Mallow Technologies Pvt Ltd Karur, M/s. Schnell Energy Equipments Pvt. Ltd CBE, M/s Terzo USA, M/s.Stepping EDGE & Commerce CBE and M/s.Cetas, Chennai",
  ],
  2022: [
    "Centre of excellence in Data Science established",
    "MoUs Signed with M/s. Codechef, Bangalore and M/s.IntersectIQ Bangalore",
    "Nitin Pranav S M (18ITR065) of IV year won Gold Medal in Tennis, Khelo India University Games 2022 and bagged best outgoing sportsmen award",
    "Overall Best department Award in Intra college cultural Festival Enthusia'22",
    'Conducted a DRDO sponsored national level seminar on "Role of post quantum cryptography in defence and security of future India"',
    'Conducted a CSIR sponsored national level seminar on "Tackling cyber crimes against women and children with latest cyber security techniques"',
  ],
  2023: [
    "Varsha S (21ITR115) of II year won Gold Medal in Table Tennis (Women) of Anna University Zone 12 held at Nandha College of Technology, Perundurai on 01.11.2022",
    "Varsha S (21ITR115) of II year won Gold Medal in Basketball (Women) of Anna University Zone 12 held at Kongu Engineering College, Perundurai on 13.11.2022",
    "Arjun A (21ITR007) of II year won Silver Medal in Basketball (Men) of Anna University Zone 12 held at Kongu Engineering College, Perundurai on 12 & 13.11.2022",
    "MoU signed with M/s. Rural Child Development Trust, Salem",
    "Overall Best Implementation of MoUs Award'23",
    "Overall Best outgoing student(female) and non-teaching staff",
    "Overall Best department Award in Intra college Cultural Festival E",
  ],
}

const DepartmentHighlights = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-id")
            if (itemId && !visibleItems.includes(itemId)) {
              setVisibleItems((prev) => [...prev, itemId])
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    // Observe both highlight items and milestone blocks
    const items = document.querySelectorAll(".highlight-item, .milestoneBlock")
    items.forEach((item) => observer.observe(item))

    return () => {
      items.forEach((item) => observer.unobserve(item))
    }
  }, [visibleItems])

  return (
    <div>
      <IT/>
    <div className="min-h-screen bg-white py-8 px-4 yellow-theme"> {/* Apply yellow theme here */}
      <div className="max-w-6xl mx-auto">

      

        {/* Highlights Section */}
        <div className="mb-16">
        <h2 className="highlights-title">
  Highlights
</h2>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item unique-highlight"
                data-id={`highlight-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={visibleItems.includes(`highlight-${index}`) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <p>{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestones Section */}
        <h2 className="milestones-title">
  Milestones
</h2>


        <div className="timeline-wrapper" ref={timelineRef}>
          {Object.entries(milestones).map(([year, events]) => (
            <div key={year} style={{ marginBottom: "2rem" }}>
              <div className="milestoneYear text-center">{year}</div>
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
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default DepartmentHighlights;