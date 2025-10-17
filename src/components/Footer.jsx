import React from 'react';
import { 
  Bot, 
  Facebook, 
  Instagram, 
  Linkedin,

  ExternalLink
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description Section */}
          <div className="footer-logo-section">
            <div className="footer-brand">
              
              <div className="footer-brand-text">
               <img src="/src/assets/broader-ai_white.png" alt="BROADER AI" className="footer-logo" />
              </div>
            </div>
            <p className="footer-description">
              Our company is dedicated to helping your business soar to new heights, using
              the power of advanced AI to unlock your true potential with personalized care
              and innovation.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <a 
                href="https://www.facebook.com/people/Broader-AI/pfbid0sQKYXf6qspSaxRPYWXjnantJQQKLbafaZjjugZ36JLQ2QnEcEEHsRyXa7AZnngF7l/" 
                className="footer-social-link facebook"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a 
                href="https://www.instagram.com/broaderai" 
                className="footer-social-link instagram"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/broader-ai/" 
                className="footer-social-link linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
               <a 
                href="https://wa.me/919265553255?text=Hello%2C%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20services%20and%20offerings.%20Please%20share%20the%20details.%20Thank%20you%21 " 
                className="footer-social-link whatsapp"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="footer-links">
            {/* Company Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul>
                <li>
                  <a href="/" className="footer-link">
                    Home
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/services" className="footer-link">
                    Services
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/course" className="footer-link">
                    Course
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/career" className="footer-link">
                    Career
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    Contact
                    <ExternalLink />
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Courses Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Courses</h3>
              <ul>
                <li>
                  <a href="/courses/python" className="footer-link">
                    Python
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/courses/machine" className="footer-link">
                    Machine Learning
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/courses/science" className="footer-link">
                    Data Science
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/courses/computer" className="footer-link">
                    Computer Vision
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/courses/language" className="footer-link">
                    Natural Language Processing
                    <ExternalLink />
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Policy Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Policy</h3>
              <ul>
                <li>
                  <a href="/PrivacyPolicy" className="footer-link">
                    Privacy Policy
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/termsandconditions" className="footer-link">
                    Terms & Condition
                    <ExternalLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 BROADER.AI - Towards Automation. All rights reserved.
          </p>
          <div className="footer-made-with">
            Made with <span className="footer-heart">♥</span> for AI Innovation
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;