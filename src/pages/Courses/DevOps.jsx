import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Check,
  ChevronRight,
  Code,
  BookOpen,
  User,
  Star,
  Clock,
  Users,
  Award,
  Download,
  Rocket,
  Target,
  CheckCircle,
  Projector,
  Shield,
  Server,
  GitBranch,
  Activity,
  Cpu,
  Container,
} from "lucide-react";
import { FaDocker, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiHelm } from "react-icons/si";
import { BsCloudCheck } from "react-icons/bs";

function DevOps() {
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
    { text: "Master DevOps principles & culture.", icon: Rocket },
    { text: "Version control with Git & GitHub.", icon: GitBranch },
    { text: "Build CI pipelines with Jenkins & GitHub Actions.", icon: FaJenkins },
    { text: "Containerization using Docker.", icon: FaDocker },
    { text: "Orchestration with Kubernetes & Helm.", icon: SiKubernetes },
    { text: "Infrastructure automation using Terraform.", icon: SiTerraform },
    { text: "Monitoring with Prometheus & Grafana.", icon: Activity },
    { text: "Secure DevOps practices (DevSecOps).", icon: Shield },
  ];

  // Course Stats
  const courseStats = [
    { label: "Course Duration", value: "10 Weeks", icon: Clock },
    { label: "Students Enrolled", value: "1,800+", icon: Users },
    { label: "Success Rate", value: "92%", icon: Award },
    { label: "Rating", value: "4.8/5", icon: Star },
  ];

  // Syllabus Items
  const syllabusItems = [
    { title: "Introduction to DevOps", icon: CheckCircle },
    { title: "Version Control with Git", icon: CheckCircle },
    { title: "Continuous Integration", icon: CheckCircle },
    { title: "Containerization & Orchestration", icon: CheckCircle },
    { title: "Continuous Deployment", icon: CheckCircle },
    { title: "Monitoring & Security", icon: CheckCircle },
    { title: "Capstone Project", icon: CheckCircle },
  ];

  // Syllabus Content
  const syllabusContent = {
    1: {
      title: "Introduction to DevOps",
      topics: [
        "What is DevOps?",
        "Culture & Principles",
        "Tools Overview",
      ],
    },
    2: {
      title: "Version Control with Git",
      topics: [
        "Git Basics",
        "Branching",
        "Merging",
        "GitHub Actions",
      ],
    },
    3: {
      title: "Continuous Integration",
      topics: [
        "Jenkins",
        "GitHub Actions",
        "Testing & Build Automation",
      ],
    },
    4: {
      title: "Containerization & Orchestration",
      topics: [
        "Docker",
        "Kubernetes",
        "Helm Charts",
      ],
    },
    5: {
      title: "Continuous Deployment",
      topics: [
        "Blue-Green & Canary Deployments",
        "Infrastructure as Code",
        "Terraform",
      ],
    },
    6: {
      title: "Monitoring & Security",
      topics: [
        "Prometheus",
        "Grafana",
        "DevSecOps Basics",
      ],
    },
    7: {
      title: "Capstone Project",
      topics: [
        "End-to-end DevOps pipeline",
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
        <div className="devops-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Rocket className="w-5 h-5" />
              <span>Hands-on DevOps Certification Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Master</span>
              <br />
              <span className="python-title-python">DevOps Engineering</span>
            </h1>

            <p className="python-hero-description">
              A hands-on course introducing DevOps culture, CI/CD pipelines, containerization, and infrastructure automation.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/DevOps Engineering Curriculum.pdf"
                download="DevOps_Curriculum.pdf"
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
                Practical, industry-ready DevOps curriculum designed by experts
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
                    Basic programming and Linux knowledge recommended
                  </span>
                </div>
              </div>
            </div>

            <div className="python-cta-card">
              <h3 className="python-cta-title">Ready to Start Your DevOps Journey?</h3>
              <p className="python-cta-description">
                Join our hands-on DevOps course and build real-world CI/CD pipelines with industry tools.
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

export default DevOps;
