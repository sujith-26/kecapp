"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import "../index.css";
import l1 from '../assets/WITH BG.png'
import l2 from '../assets/WITHOUT BG.png'
const TopNavLinks = [
  { name: "Home", href: "/" },
  { name: "Library", href: "/faculty" },
  { name: "Parents", href: "/parent" },
  { name: "Facilities", href: "/visitors" },
  { name: "Academic", href: "/alumni" },
  { name: "COE", href: "/examinations" },
  { name: "R&D", href: "/campus" },
  { name: "IEF", href: "/campus" },
  { name: "Placement", href: "/campus" },
  { name: "IIPC", href: "/campus" },
  { name: "Alumni", href: "https://alumni.kongu.edu/" },
  { name: "Online Payment", href: "/campus" },
  { name: "Contact", href: "/campus" },
]

const MainNavLinks = [
  {
    name: "About Us",
    href: "#",
    submenu: [
      { name: "About KEC", href: "/research-centers" },
      { name: "Vision Mission & Quality Policy", href: "/publications" },
      { name: "KVITT Office Bearers", href: "/funding" },
      { name: "Head of the Institution", href: "/funding" },
      { name: "Governing Council", href: "/funding" },
      { name: "Academic Council", href: "/funding" },
      { name: "University Ranks", href: "/funding" },
      { name: "Endowments", href: "/funding" },
      { name: "College Rules", href: "/funding" },
    ],
  },
  {
    name: "Departments",
    href: "#",
    submenu: [
      {
        name: "Engineering",
        submenu: [
          { name: "Civil Engineering", href: "/civil-engineering" },
          { name: "Mechanical Engineering", href: "/mechanical-engineering" },
          { name: "Mechatronics Engineering", href: "/mechatronics-engineering" },
          { name: "Automobile Engineering", href: "/automobile-engineering" },
          { name: "Chemical Engineering", href: "/chemical-engineering" },
          { name: "Food Technology", href: "/food-technology" },
          { name: "Electrical and Electronics Engineering", href: "/eee" },
          { name: "Electronics and Instrumentation Engineering", href: "/eie" },
          { name: "Electronics and Communication Engineering", href: "/ece" },  
          { name: "Computer Science and Engineering", href: "/cse" },
          { name: "Information Technology", href: "/departments/itdep/ithome" },
          { name: "Computer Science and Design", href: "/csd" },
          { name: "Artificial Intelligence and Data Science", href: "/aids" },
          { name: "Artificial Intelligence and Machine Learning", href: "/aiml" },
        ],
      },
      { name: "Management Studies", href: "/management-studies" },
      { name: "Computer Application", href: "/computer-application" },
      {
        name: "Computer Technology",
        submenu: [
          { name: "Software Engineering", href: "/software-engineering" },
          { name: "Cybersecurity", href: "/cybersecurity" },
        ],
      },
      { name: "Science and Humanities", href: "/science-humanities" },
    ],
  },
  {
    name: "Programmes",
    href: "#",
    submenu: [
      { name: "Undergraduate", href: "/student-organizations" },
      { name: "Postgraduate", href: "/housing" },
      { name: "Applied Sciences", href: "/sports" },
    ],
  },
  {
    name: "Accreditation",
    href: "#",
    submenu: [
      { name: "Autonomous", href: "/history" },
      { name: "University", href: "/history" },
      { name: "NBA", href: "/leadership" },
      { name: "NAAC", href: "/campus-map" },
      { name: "NIRF", href: "/history" },
      { name: "AICTE E&T", href: "/history" },
      { name: "AICTE MCA", href: "/history" },
      { name: "AICTE MBA", href: "/history" },
    ],
  },
  {
    name: "Careers",
    href: "#",
    submenu: [
      { name: "Teaching", href: "/history" },
      { name: "Non Teaching", href: "/leadership" },
    ],
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index)
  }

  const handleMouseLeave = () => {
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index)
  }

  const toggleNestedSubmenu = (index) => {
    setActiveNestedSubmenu(activeNestedSubmenu === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Set the scroll threshold
      setIsScrolled(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveSubmenu(null)
        setActiveNestedSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      {/* Top Navigation */}
      <nav
        className={`transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden" : "h-auto"} md:block`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-end gap-4 py-2 text-sm text-white">
            {TopNavLinks.map((link) => (
              <li key={link.name} className="hidden md:block">
                <Link
                  to={link.href}
                  className="hover:text-gray-800 transition-colors px-2 py-1 rounded-md hover:bg-blue-800 font-bold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="#"
                className="bg-yellow-500 text-black px-4 py-1 rounded-md hover:bg-yellow-400 transition-colors font-medium"
              >
                Admissions 2025
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 transition-all duration-300">
  <img
    src={isScrolled ? l1 : l2}
    alt="Kongu Engineering College"
    className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-16"} w-auto`}
  />
</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1 relative" ref={dropdownRef}>
              {MainNavLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                      to={link.href}
                      className={`px-4 py-2 ${isScrolled ? "text-blue-600" : "text-white"} hover:text-blue-600 rounded-md hover:bg-gray-50 transition-all flex items-center gap-1 text-sm font-bold ${
                      activeSubmenu === index ? "bg-gray-100" : ""
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.submenu && (
                    <div
                      className={`submenu-dropdown absolute left-0  bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-400 ${
                        activeSubmenu === index
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-0 pointer-events-none"
                      }`}
                      style={{
                        transform: activeSubmenu === index ? "translateY(0)" : "translateY(-10px)",
                        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
                        zIndex: 50,
                      }}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${link.name}-menu`}
                    >
                      {link.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group">
                          {subItem.submenu ? (
                            <div
                              className="relative"
                              onMouseEnter={() => setActiveNestedSubmenu(subIndex)}
                              onMouseLeave={() => setActiveNestedSubmenu(null)}
                            >
                              <button
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-800 flex items-center justify-between whitespace-nowrap"
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded={activeNestedSubmenu === subIndex}
                              >
                                {subItem.name}
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </button>

                              <div
                                className={`submenu-dropdown absolute top-0 ml-2 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-900 ${
                                  activeNestedSubmenu === subIndex
                                    ? "opacity-100 translate-x-0 pointer-events-auto"
                                    : "opacity-0 translate-x-2 pointer-events-none"
                                }`}
                                style={{
                                  left: "180px",
                                  zIndex: 50,
                                }}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby={`${subItem.name}-menu`}
                              >
                                {subItem.submenu.map((nestedItem, nestedIndex) => (
                                  <Link
                                    key={nestedIndex}
                                    to={nestedItem.href}
                                    className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-800 whitespace-nowrap"
                                    role="menuitem"
                                  >
                                    {nestedItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-800 whitespace-nowrap"
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
              <img
                src="/images/unnamed.png"
                alt="Kongu Engineering College"
                className="h-12 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* Top Navigation Links */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 px-2 mb-2">Quick Links</h3>
                {TopNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Main Navigation Links */}
              <div className="space-y-1">
                {MainNavLinks.map((link, index) => (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex justify-between items-center w-full px-3 py-2 text-sm text-blue-900 hover:bg-gray-100 rounded-md transition-colors"
                      aria-expanded={activeSubmenu === index}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {link.submenu && activeSubmenu === index && (
                      <div className="pl-4 space-y-1">
                        {link.submenu.map((subItem, subIndex) => (
                          <div key={subItem.name} className="space-y-1">
                            {subItem.submenu ? (
                              <>
                                <button
                                  onClick={() => toggleNestedSubmenu(subIndex)}
                                  className="flex justify-between items-center w-full px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                  aria-expanded={activeNestedSubmenu === subIndex}
                                >
                                  {subItem.name}
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-300 ${
                                      activeNestedSubmenu === subIndex ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {activeNestedSubmenu === subIndex && (
                                  <div className="pl-4 space-y-1">
                                    {subItem.submenu.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.href}
                                        className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Admissions Button */}
              <Link
                to="#"
                className="block px-3 py-2 mt-4 text-sm bg-yellow-500 text-black hover:bg-yellow-400 rounded-md transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admissions 2025
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}