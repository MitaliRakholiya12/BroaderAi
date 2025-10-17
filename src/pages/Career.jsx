import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Rocket,
  Heart,
  Coffee,
  Trophy,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import "../styles/Career.css";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [sending, setSending] = useState(false);

  const fullText = "Join the Future of Innovation with BROADER AI";
  const formRef = useRef();

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch jobs from backend
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs"); // Make sure this route exists
        const jobsData = await response.json();
        setJobs(jobsData || []);
      } catch (error) {
        console.error("Error loading jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "Work on cutting-edge AI projects that shape the future",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement paths",
    },
  ];

  const culture = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Environment",
      description: "Work with brilliant minds from diverse backgrounds",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Paced Innovation",
      description: "Rapid prototyping and iterative development culture",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence Standard",
      description: "High-quality deliverables and attention to detail",
    },
  ];

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData();
      const elements = formRef.current.elements;

      formData.append("first_name", elements.first_name.value);
      formData.append("last_name", elements.last_name.value);
      formData.append("email", elements.email.value);
      formData.append("contact", elements.contact.value);
      formData.append("city", elements.city.value);
      formData.append("job_title", elements.job_title.value);
      formData.append("message", elements.message.value);
      formData.append("resume", elements.resume.files[0]);

      const response = await fetch("http://localhost:5000/api/applications/apply", {
  method: "POST",
  body: formData, // do NOT set Content-Type manually when using FormData
});


      if (!response.ok) throw new Error("Failed to submit application");

      alert("Application submitted successfully!");
      setShowApplyForm(false);
      setShowJobModal(false);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit application. Check console.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <motion.div
          className="career-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="career-hero-title">
            {displayedText}
            <span className="career-typing-cursor">|</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="p"
          >
            Be part of a revolutionary team building the next generation of AI
            solutions
          </motion.p>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section className="career-openings">
        <div className="career-container">
          <motion.h2
            className="career-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Current Openings
          </motion.h2>

          {loading ? (
            <div className="career-loading-spinner">
              <div className="career-spinner"></div>
              <p>Loading opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <motion.div
              className="career-no-jobs-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="career-no-jobs-content">
                <Briefcase className="career-no-jobs-icon" />
                <h3>Currently, No Openings</h3>
                <p>
                  We're not hiring at the moment, but amazing opportunities are
                  coming soon!
                </p>
                <motion.button
                  className="career-notify-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Notified <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <div className="career-jobs-grid">
              {jobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  className={`career-job-card ${
                    job.featured ? "career-featured" : ""
                  }`}
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {job.featured && (
                    <div className="career-featured-badge">Featured</div>
                  )}
                  <div className="career-job-header">
                    <h3 className="career-job-title">{job.title}</h3>
                    <span className="career-job-department">
                      {job.department}
                    </span>
                  </div>
                  <div className="career-job-meta">
                    <div className="career-job-meta-item">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="career-job-meta-item">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="career-job-meta-item">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <p className="career-job-description">{job.description}</p>
                  <motion.button
                    className="career-apply-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedJob(job);
                      setShowJobModal(true);
                    }}
                  >
                    Apply Now <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      {showJobModal && selectedJob && !showApplyForm && (
        <motion.div
          className="career-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="career-modal-content career-glassmorphism"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="career-modal-header">
              <button
                className="career-close-btn"
                onClick={() => setShowJobModal(false)}
              >
                ❌
              </button>
            </div>
            <h2 className="career-modal-title">{selectedJob.title}</h2>
            <p className="career-modal-dept">
              {selectedJob.department} — {selectedJob.location}
            </p>
            <h3>Requirements</h3>
            <ul>
              {selectedJob.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <h3>Responsibilities</h3>
            <ul>
              {selectedJob.responsibilities?.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
            <h3>Salary</h3>
            <p>{selectedJob.salary}</p>
            <h3>Perks</h3>
            <ul>
              {selectedJob.perks?.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
            <motion.button
              className="career-apply-btn"
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowApplyForm(true)}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {showApplyForm && selectedJob && (
        <motion.div
          className="career-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="career-modal-content career-glassmorphism"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="career-modal-header">
              <button
                className="career-back-btn"
                onClick={() => setShowApplyForm(false)}
              >
                ←
              </button>
              <button
                className="career-close-btn"
                onClick={() => {
                  setShowApplyForm(false);
                  setShowJobModal(false);
                }}
              >
                ❌
              </button>
            </div>
            <h2 className="career-modal-title">
              Apply for {selectedJob.title}
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="career-application-form"
              encType="multipart/form-data"
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                required
              />
              <input type="text" name="city" placeholder="City" required />
              <input
                type="text"
                name="job_title"
                value={selectedJob.title}
                readOnly
              />
              <textarea
                name="message"
                placeholder="Why should we hire you?"
                rows="4"
                required
              ></textarea>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
              />
              <motion.button
                type="submit"
                className="career-apply-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={sending}
              >
                {sending ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Benefits Section */}
      <section className="career-benefits">
        <div className="career-container">
          <motion.h2
            className="career-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <div className="career-benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="career-benefit-card career-glassmorphism"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="career-benefit-icon">{benefit.icon}</div>
                <h3 className="career-benefit-title">{benefit.title}</h3>
                <p className="career-benefit-description">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at BROADER AI */}
      <section className="career-culture">
        <div className="career-container">
          <motion.h2
            className="career-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Life at BROADER AI
          </motion.h2>
          <div className="career-culture-grid">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                className="career-culture-card career-glassmorphism"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="career-culture-icon">{item.icon}</div>
                <div className="career-culture-content">
                  <h3 className="career-culture-title">{item.title}</h3>
                  <p className="career-culture-description">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showJobModal && selectedJob && !showApplyForm && (
        <motion.div
          className="career-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="career-modal-content career-glassmorphism"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="career-modal-header">
              <button
                className="career-close-btn"
                onClick={() => setShowJobModal(false)}
              >
                ❌
              </button>
            </div>
            <h2 className="career-modal-title">{selectedJob.title}</h2>
            <p className="career-modal-dept">
              {selectedJob.department} — {selectedJob.location}
            </p>
            <h3>Requirements</h3>
            <ul>
              {selectedJob.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <h3>Responsibilities</h3>
            <ul>
              {selectedJob.responsibilities?.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
            <h3>Salary</h3>
            <p>{selectedJob.salary}</p>
            <h3>Perks</h3>
            <ul>
              {selectedJob.perks?.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
            <motion.button
              className="career-apply-btn"
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowApplyForm(true)}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Application Form Modal with new fields */}
      {showApplyForm && selectedJob && (
        <motion.div
          className="career-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="career-modal-content career-glassmorphism"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="career-modal-header">
              <button
                className="career-back-btn"
                onClick={() => setShowApplyForm(false)}
              >
                ←
              </button>
              <button
                className="career-close-btn"
                onClick={() => {
                  setShowApplyForm(false);
                  setShowJobModal(false);
                }}
              >
                ❌
              </button>
            </div>
            <h2 className="career-modal-title">
              Apply for {selectedJob.title}
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="career-application-form"
              encType="multipart/form-data"
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                required
              />
              <input type="text" name="city" placeholder="City" required />
              <input
                type="text"
                name="job_title"
                value={selectedJob.title}
                readOnly
              />
              <textarea
                name="message"
                placeholder="Why should we hire you?"
                rows="4"
                required
              ></textarea>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
              />
              <motion.button
                type="submit"
                className="career-apply-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={sending}
              >
                {sending ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Career;
