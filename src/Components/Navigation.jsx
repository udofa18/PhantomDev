import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Button from "./Button";

function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/publications", label: "Publications" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/40 backdrop-blur-xl border-b border-lime-500/20 dark:border-lime-500/20 shadow-lg shadow-lime-500/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 group transition-all duration-300"
          >
            <span className="text-2xl font-bold text-lime-400 group-hover:text-lime-300 transition-colors">
              PhantomDev
            </span>
            <span className="text-gray-600 dark:text-white/50 text-lg">&lt;/&gt;</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-lime-600 dark:text-lime-400 bg-lime-500/10 border border-lime-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-lime-500/5"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-lime-400 hover:bg-lime-500/10 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>

            {/* Contact CTA */}
            <Button
              href="mailto:danieludofa452@gmail.com"
              variant="cta"
              size="sm"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-lime-400 hover:bg-lime-500/10 border border-lime-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              aria-label="Toggle theme"
              type="button"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-lime-400 hover:bg-lime-500/10 border border-lime-500/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-lime-500/20 mt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-lime-400 bg-lime-500/10 border border-lime-500/30"
                    : "text-gray-300 hover:text-lime-400 hover:bg-lime-500/5"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Button
                href="mailto:danieludofa452@gmail.com"
                variant="cta"
                size="md"
                className="w-full"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
