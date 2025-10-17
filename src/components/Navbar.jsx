import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Course", path: "/course" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <div className="logo-icon-wrapper">
              <div className="logo-icon-container">
                {/* Replace Zap with your logo */}
                <img
                  src="/src/assets/broader-ai-white-text.png" // apne logo ka path yaha daalna
                  alt="Broader AI Logo"
                  className="logo-icon"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              <span className="nav-link-text">{item.name}</span>
              <div className="nav-link-bg"></div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="cta-section">
          <Link to="/contact" className="cta-button">
            <div className="cta-button-bg"></div>
            <div className="cta-content">
              <span className="cta-text">Get Started</span>
              <ArrowRight className="cta-icon" />
            </div>

            {/* Shimmer effect */}
            <div className="shimmer-container">
              <div className="shimmer"></div>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="mobile-menu-button">
          {isOpen ? (
            <X className="mobile-menu-icon" />
          ) : (
            <Menu className="mobile-menu-icon" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`mobile-nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mobile-cta">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mobile-cta-button"
            >
              <span>Get Started</span>
              <ArrowRight className="mobile-cta-icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
