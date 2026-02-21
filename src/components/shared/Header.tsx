"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "summary", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("summary");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offset: element?.offsetTop ?? 0,
        };
      });

      const scrollPosition = window.scrollY + 100;
      const active = sectionOffsets.reduce((acc, curr) => {
        if (scrollPosition >= curr.offset) return curr.id;
        return acc;
      }, "summary");

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 no-print ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Name/Logo */}
          <button
            onClick={() => scrollToSection("summary")}
            className="text-lg font-bold text-slate-900 hover:font-bold transition-colors"
          >
            Bamidele Ayomide Precious
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-menu ${
                  activeSection === section.id
                    ? "font-bold bg-slate-50"
                    : "text-slate-600"
                }`}
                aria-label={`Navigate to ${section.label} section`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:font-bold"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              mobileMenu?.classList.toggle("hidden");
            }}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className={`block w-full text-left px-4 py-2 text-sm rounded ${
                activeSection === section.id
                  ? "font-bold bg-slate-50"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
