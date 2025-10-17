import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // your Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("❌ FAILED...", error);
          alert("❌ Failed to send. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9265553255",
      href: "tel:+919265553255",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@broaderai.com",
      href: "mailto:contact@broaderai.com",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Address",
      value:
        "547, Hubtown, Adajan bus depot, Adajan Patiya, Surat, Gujarat - 395009",
      href: "https://maps.google.com/?q=547+Hubtown+Adajan+bus+depot+Adajan+Patiya+Surat+Gujarat+395009",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="contact-page">
      {/* Background Particles */}
      <div className="contact-bg-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 3}`}></div>
        ))}
      </div>

      <div className="contact-container">
        {/* Hero Section */}
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="contact-title">
            Contact <span className="title-highlight">Us</span>
          </h1>
          <p className="contact-subtitle">
            Let's discuss how we can transform your business with cutting-edge
            AI solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-gradient">Connect</span> With Us
            </h2>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.title === "Address" ? "_blank" : "_self"}
                  rel={info.title === "Address" ? "noopener noreferrer" : ""}
                  className="contact-card glassmorphism"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div
                      className={`icon-container bg-gradient-to-r ${info.gradient}`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="card-text">
                      <h3 className="card-title">{info.title}</h3>
                      <p className="card-value">{info.value}</p>
                    </div>
                  </div>
                  <div className="card-border"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-section" variants={itemVariants}>
            <h2 className="section-title">
              Send <span className="title-gradient">Message</span>
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form glassmorphism"
            >
              <input
                type="hidden"
                name="name"
                value={`${formData.first_name} ${formData.last_name}`}
              />

              <div className="form-roww">
                <div className="form-groupp">
                  <div className="input-container">
                    <User className="input-icon" />
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                      className="form-inputt"
                    />
                  </div>
                </div>

                <div className="form-groupp">
                  <div className="input-container">
                    <User className="input-icon" />
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                      className="form-inputt"
                    />
                  </div>
                </div>
              </div>

              <div className="form-roww">
                <div className="form-groupp">
                  <div className="input-container">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="form-inputt"
                    />
                  </div>
                </div>

                <div className="form-groupp">
                  <div className="input-container">
                    <Phone className="input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                      className="form-inputt"
                    />
                  </div>
                </div>
              </div>

              <div className="form-groupp">
                <div className="input-container">
                  <MessageSquare className="input-icon message-icon" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                    rows="5"
                    className="form-inputt form-textarea"
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="btn-content">
                  <span className="btn-text">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <div className="btn-icon">
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
