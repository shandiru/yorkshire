import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { NavbarLogo } from "../global";

const Navbar = ({ logo = NavbarLogo.logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showPopup, setShowPopup] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about", popup: true },
    { name: "OUR SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing", popup: true },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        if (link.popup) return; // skip popup links in scroll tracking

        const section = document.querySelector(link.href);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    if (link.popup) {
      setShowPopup(true);
      return;
    }

    setActiveLink(link.href);
    setIsMenuOpen(false);

    // Smooth scroll for normal links
    const section = document.querySelector(link.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-8xl px-8 mx-auto">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <img src={logo} alt="Logo" className="h-20 object-contain" />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.popup ? "#" : link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="relative text-white font-semibold tracking-widest group"
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-2 h-1 bg-white transition-all duration-300
                      ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 text-sm font-bold tracking-widest rounded"
              >
                GET A QUOTE
              </a>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className="block text-white font-bold tracking-widest border-b border-white/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        )}
      </nav>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-9999">
          <div className="bg-white rounded-xl p-6 max-w-md w-[90%] text-center">
            <h2 className="text-xl font-bold mb-4">Normally…</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This button would take you to the full page experience.
              <br /><br />
              But since this is just a sample, building the entire thing here would take us a little too long.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-primary px-6 py-2 rounded-lg font-semibold text-white"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;