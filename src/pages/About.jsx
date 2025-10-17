import "../styles/About.css";
import React, { useEffect } from "react";
import {
  Eye,
  Rocket,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // 👈 Added motion

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-about">
      <div className="about">
        {/* Main Content */}
        <motion.div
          className="main-contentt"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="background-text">BROADERAI</div>
          <div className="overlay-text">
            <h1>Our Story</h1>
          </div>
        </motion.div>
      </div>

      <div className="about-main-container">
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-hero-overlay"></div>
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="about-hero-content1"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -80 }}
              transition={{ duration: 1 }}
            >
              <h1 className="about-hero-title">
                WHO <span className="about-ai-text">WE</span> ARE
              </h1>
              <div className="about-hero-description">
                <p>
                  Welcome to BROADERAI IT Solution! We are a dynamic and
                  forward-thinking IT company committed to empowering businesses
                  through innovative technology solutions. Our team of dedicated
                  software developers and HR professionals collaborates
                  seamlessly to provide comprehensive digital solutions that
                  drive growth, efficiency, and success for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-hero-content2"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 80 }}
              transition={{ duration: 1 }}
            >
              <h1 className="about-hero-title">
                WHAT <span className="about-ai-text">WE</span> DO
              </h1>
              <div className="about-hero-description">
                <p>
                  We simplify custom AI solutions by analyzing your goals,
                  creating a clear roadmap, and rigorously testing prototypes.
                  From development to deployment, we ensure your tailored system
                  meets your needs seamlessly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section className="about-section about-vision-section">
          <div className="purpose-grid">
            <motion.div
              className="glass-card vision-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="card-glow vision-glow"></div>
              <div className="card-header">
                <Eye className="card-icon vision-icon" />
                <h3>
                  Our <span className="vision-text">Vision</span>
                </h3>
              </div>
              <p>
                At BROADERAI IT Solution, our vision is to transform how
                businesses approach digital solutions by harnessing the power of
                cutting-edge technology, artificial intelligence, and
                innovation. We aim to be leaders in reshaping industries,
                creating intelligent systems that enhance productivity, and
                delivering impactful solutions that drive meaningful change.
              </p>
            </motion.div>

            <motion.div
              className="glass-card mission-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="card-glow mission-glow"></div>
              <div className="card-header">
                <Rocket className="card-icon mission-icon" />
                <h3>
                  Our <span className="mission-text">Mission</span>
                </h3>
              </div>
              <p>
                Our mission is to provide reliable, scalable, and tailored IT
                solutions that empower businesses to achieve their goals with
                precision and efficiency. We are dedicated to fostering a
                Collaborative and Client-centered approach, ensuring that every
                solution is aligned with the unique needs of each client.
                Through excellence in service, continuous learning, and a
                commitment to quality, we strive to be the go-to partner for all
                technology and AI-driven transformations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="about-section social-section">
          <div className="about-container">
            <div className="social-header">
              <h2 className="social-title">
                Connect With <span className="social-highlight">Us</span>
              </h2>
              <p className="social-subtitle">
                Join our community and stay updated with the latest innovations
              </p>
            </div>

            <div className="social-grid">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/broaderai?igsh=ZWw3N2lub2RmNGtz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card instagram-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-glow instagram-glow"></div>
                <div className="social-icon-wrapper">
                  <Instagram
                    className="social-icon"
                    style={{ color: "#E1306C" }}
                  />
                </div>
                <h4>Instagram</h4>
                <p>Behind-the-scenes content and company culture</p>
                <div className="social-stats">
                  <span>12.5K Followers</span>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/broader-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card linkedin-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-glow linkedin-glow"></div>
                <div className="social-icon-wrapper">
                  <Linkedin
                    className="social-icon"
                    style={{ color: "#0077B5" }}
                  />
                </div>
                <h4>LinkedIn</h4>
                <p>Professional network and updates</p>
                <div className="social-stats">
                  <span>12.5K Followers</span>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/919265553255?text=Hello%2C%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20services%20and%20offerings.%20Please%20share%20the%20details.%20Thank%20you%21 "
                target="_blank"
                rel="noopener noreferrer"
                className="social-card whatsapp-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-glow whatsapp-glow"></div>
                <div className="social-icon-wrapper">
                  <FaWhatsapp
                    className="social-icon"
                    style={{ color: "#25D366" }}
                  />
                </div>
                <h4>WhatsApp</h4>
                <p>Real-time updates and tech discussions</p>
                <div className="social-stats">
                  <span>15.8K Followers</span>
                </div>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@broaderai4641"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card youtube-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-glow youtube-glow"></div>
                <div className="social-icon-wrapper">
                  <Youtube
                    className="social-icon"
                    style={{ color: "#FF0000" }}
                  />
                </div>
                <h4>YouTube</h4>
                <p>Educational content and tutorials</p>
                <div className="social-stats">
                  <span>28.4K Subscribers</span>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/people/Broader-AI/pfbid0sQKYXf6qspSaxRPYWXjnantJQQKLbafaZjjugZ36JLQ2QnEcEEHsRyXa7AZnngF7l/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card facebook-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="social-glow facebook-glow"></div>
                <div className="social-icon-wrapper">
                  <Facebook
                    className="social-icon"
                    style={{ color: "#1877F2" }}
                  />
                </div>
                <h4>Facebook</h4>
                <p>Community updates and announcements</p>
                <div className="social-stats">
                  <span>22.1K Followers</span>
                </div>
              </motion.a>

              {/* Contact Card */}
              <motion.div
                className="social-card contact-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="contact-icons">
                  <Mail className="contact-icon" />
                  <Phone className="contact-icon" />
                </div>
                <h4>Get in Touch</h4>
                <p>Direct communication for business inquiries</p>
                <div className="contact-info">
                  <span>contact@broaderai.com</span>
                  <span>92655 53255</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
