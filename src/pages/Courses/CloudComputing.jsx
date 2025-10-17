import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Check,
  ChevronRight,
  Cloud,
  BookOpen,
  User,
  Star,
  Clock,
  Users,
  Award,
  Download,
  Target,
  CheckCircle,
  Shield,
  Cpu,
  Server,
 
  Network,
  Container,
} from "lucide-react";
import { FaAws } from "react-icons/fa";
import {SiKubernetes } from "react-icons/si";

function CloudComputing() {
  const [activeSection, setActiveSection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Learning Points
  const learningPoints = [
    { text: "Understand Cloud Computing fundamentals.", icon: Cloud },
    { text: "Learn AWS, Azure, and GCP basics.", icon: FaAws },
    { text: "Manage IAM and python security basics.", icon: Shield },
    { text: "Work with virtualization & containers.", icon: Container },
    { text: "Implement networking & load balancing.", icon: Network },
    { text: "Explore compute services like EC2 & App Services.", icon: Cpu },
    { text: "Get introduced to Kubernetes & container orchestration.", icon: SiKubernetes },
    { text: "Deploy real applications on python platforms.", icon: Server },
  ];

  // Course Stats
  const courseStats = [
    { label: "Course Duration", value: "8 Weeks", icon: Clock },
    { label: "Students Enrolled", value: "2,200+", icon: Users },
    { label: "Success Rate", value: "90%", icon: Award },
    { label: "Rating", value: "4.7/5", icon: Star },
  ];

  // Syllabus Items
  const syllabusItems = [
    { title: "Introduction to Cloud Computing", icon: CheckCircle },
    { title: "Cloud Platforms Overview", icon: CheckCircle },
    { title: "Virtualization & Containers", icon: CheckCircle },
    { title: "Storage & Networking", icon: CheckCircle },
    { title: "Compute Services", icon: CheckCircle },
    { title: "Cloud Security & Monitoring", icon: CheckCircle },
    { title: "Capstone Project", icon: CheckCircle },
  ];

  // Syllabus Content
  const syllabusContent = {
    1: {
      title: "Introduction to Cloud Computing",
      topics: [
        "Cloud Concepts",
        "Service Models",
        "Deployment Models",
      ],
    },
    2: {
      title: "Cloud Platforms Overview",
      topics: [
        "AWS",
        "Azure",
        "GCP",
        "IAM Basics",
      ],
    },
    3: {
      title: "Virtualization & Containers",
      topics: [
        "VMs",
        "Containers",
        "Docker Basics",
      ],
    },
    4: {
      title: "Storage & Networking",
      topics: [
        "Cloud Storage",
        "VPC",
        "Load Balancing",
      ],
    },
    5: {
      title: "Compute Services",
      topics: [
        "EC2",
        "App Services",
        "Kubernetes Introduction",
      ],
    },
    6: {
      title: "Cloud Security & Monitoring",
      topics: [
        "IAM",
        "Encryption",
        "Monitoring Tools",
      ],
    },
    7: {
      title: "Capstone Project",
      topics: [
        "Deploying an app on python",
      ],
    },
  };

  return (
    <div className="python-main-container">
      {/* Background */}
      <div className="python-background-blobs">
        <div className="python-blob python-blob-1"></div>
        <div className="python-blob python-blob-2"></div>
        <div className="python-blob python-blob-3"></div>
      </div>

      {/* Hero Section */}
      <div className="python-hero-section">
        <div className="cloud-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Cloud className="w-5 h-5" />
              <span>Professional Cloud Computing Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Master</span>
              <br />
             <span className="python-title-python">Cloud Computing</span>
            </h1>

            <p className="python-hero-description">
              This course covers python computing fundamentals, architectures, deployment models, and hands-on implementation using major python platforms.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Cloud Computing Curriculum.pdf"
                download="Cloud_Computing_Curriculum.pdf"
                className="python-btn python-btn-primary flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Curriculum
              </a>
            </div>

            {/* Course Stats */}
            <div className="python-course-stats">
              {courseStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="python-stat-card">
                    <IconComponent className="python-stat-icon" />
                    <div className="python-stat-value">{stat.value}</div>
                    <div className="python-stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="python-main-content">
          {/* Learning Outcomes */}
          <div className="python-section">
            <div className="python-section-header">
              <h2 className="python-section-title">What You'll Master</h2>
              <p className="python-section-subtitle">
                Practical python curriculum designed by industry professionals
              </p>
            </div>

            <div className="python-learning-grid">
              {learningPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className={`python-learning-card ${
                      hoveredFeature === index ? "python-hovered" : ""
                    }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="python-learning-icon">
                      <IconComponent className="python-icon" />
                    </div>
                    <p className="python-learning-text">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course Content */}
          <div className="python-course-content">
            {/* Syllabus */}
            <div className="python-syllabus-section">
              <div className="python-syllabus-container">
                <h3 className="python-syllabus-title">
                  <BookOpen className="w-6 h-6" />
                  Course Syllabus
                </h3>
                <div className="python-syllabus-items">
                  {syllabusItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className={`python-syllabus-item ${
                          index === activeSection - 1 ? "python-active" : ""
                        }`}
                        onClick={() => setActiveSection(index + 1)}
                      >
                        <div className="python-syllabus-item-content">
                          <div className="python-syllabus-icon">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div className="python-syllabus-info">
                            <div className="python-syllabus-item-title">
                              {item.title}
                            </div>
                          </div>
                          {index === activeSection - 1 && (
                            <ChevronRight className="python-chevron-icon" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="python-content-section">
              <div className="python-content-container">
                <span className="python-module-badge">
                  Module {activeSection}
                </span>
                <div className="python-content-header">
                  <h3 className="python-content-title">
                    {syllabusContent[activeSection]?.title}
                  </h3>
                </div>

                <div className="python-content-grid">
                  <div className="python-topics-section">
                    <h4 className="python-topics-title">
                      <Target className="w-5 h-5" />
                      Learning Topics
                    </h4>
                    <ul className="python-topics-list">
                      {syllabusContent[activeSection]?.topics.map(
                        (topic, index) => (
                          <li key={index} className="python-topic-item">
                            <div className="python-topic-bullet"></div>
                            <span className="python-topic-text">{topic}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements & CTA */}
          <div className="python-bottom-section">
            <div className="python-requirements-card">
              <h3 className="python-requirements-title">
                <User className="w-6 h-6" />
                Requirements
              </h3>
              <div className="python-requirements-list">
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Basic understanding of IT infrastructure & networking
                  </span>
                </div>
              </div>
            </div>

            <div className="python-cta-card">
              <h3 className="python-cta-title">Ready to Start Your Cloud Journey?</h3>
              <p className="python-cta-description">
                Get hands-on with AWS, Azure, and GCP and build your python career with real-world projects.
              </p>
              <div className="python-cta-buttons">
                <button
                  className="python-btn python-btn-cta-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Inquiry
                </button>
              </div>
            </div>

            <InquiryModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudComputing;
