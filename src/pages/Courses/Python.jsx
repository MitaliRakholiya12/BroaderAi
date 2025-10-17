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
  Play,
  Download,
  Rocket,
  Target,
  CheckCircle,
  GraduationCap,
  Projector,
  CreativeCommons,
} from "lucide-react";
import { SiFramework } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { BsQuestion } from "react-icons/bs";

function Python() {
  const [activeSection, setActiveSection] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const learningPoints = [
    { text: "Basic fundamentals of Python programming.", icon: BiLogoPython },
    { text: "Learn FASTAPI, Django and Machine learning.", icon: MdApi },
    { text: "API development using FASTAPI framework", icon: SiFramework },
    { text: "Python programming mock interview preparation.", icon: FaPython },
    { text: "Become zero to hero in Python programming.", icon: GraduationCap },
    {
      text: " Project management, development and deployment.",
      icon: Projector,
    },
    { text: "Python programming interview questions.", icon: BsQuestion },
    { text: "Helping resume creation.", icon: CreativeCommons },
  ];

  const courseStats = [
    { label: "Course Duration", value: "12 Weeks", icon: Clock },
    { label: "Students Enrolled", value: "2,500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Award },
    { label: "Rating", value: "4.9/5", icon: Star },
  ];

  const syllabusItems = [
    { title: " Introduction of course", icon: CheckCircle },
    {
      title: " Introduction of python",
      icon: CheckCircle,
    },
    { title: "Python with strings", icon: CheckCircle },
    {
      title: " Python functions and modules",
      icon: CheckCircle,
    },
    {
      title: "Object oriented programming in python",
      icon: CheckCircle,
    },
    {
      title: "File handling with python",
      icon: CheckCircle,
    },
    {
      title: "Exception handling and multithreading with python",
      icon: CheckCircle,
    },
    { title: "Python with MYSQL", icon: CheckCircle },
    {
      title: "  Introduction of FASTAPI",
      icon: CheckCircle,
    },
    {
      title: " Introduction of Django",
      icon: CheckCircle,
    },
    {
      title: " Introduction of machine learning",
      icon: CheckCircle,
    },
    { title: "Additional knowledge", icon: CheckCircle },
  ];

  const syllabusContent = {
    1: {
      title: "Introduction of course",
      topics: [
        "Course overview",
        "Course outcome",
        "Installing anaconda, jupyter notebook",
        "Working with environments",
      ],
    },
    2: {
      title: ". Introduction of python",

      topics: [
        "Getting started with Python programming",
        "Features of Python programming",
        "Applications of Python programming",
        "Reasons to famous Python programming",
        "Python data type, keywords, literals, operators and comments",
        "Python If…Else statement, break, continue and pass keywordss",
        "While, Do…while and for loops",
        "Arrays, lists, tuples, sets and dictionary in Python",
        "Practical",
      ],
    },
    3: {
      title: "Python with strings",
      topics: [
        "Handling strings with Python",
        "String operators and methods",
        "Splitting and joining strings",
        "Regex functions with Python",
        "Practical",
      ],
    },
    4: {
      title: " Python functions and modules",
      topics: [
        "Getting started with functions",
        "Built-in functions",
        "Creating custom functions",
        "Lambda / anonymous functions",
        "Python modules and packages",
        "Building own modules and packages",
        "Python decorators and generators",
        "Map, reduce and filter functions",
        "Common libraries",
        "Practical",
      ],
    },
    5: {
      title: " Object oriented programming in python",
      topics: [
        "Introduction of object-oriented programming",
        "Defining class and methods",
        "Python constructors and destructor",
        "Python inheritanceg",
        "Method overloading and overriding",
        "Abstraction and interface",
        "Python magic methods",
        "Practical",
      ],
    },
    6: {
      title: " File handling with python",
      topics: [
        "Read, write and append file using Python",
        "Read and write csv file",
        "Read and write excel file",
        "Read and write text file",
        "Read and write json file",
        "Buffered read and write",
        "Practical",
      ],
    },
    7: {
      title: " Exception handling and multithreading with python",
      topics: [
        "Getting Python exceptional handling",
        "Types of exceptional handling",
        "Exception block and assert statement",
        "User defined exceptions",
        "Python threading and multithreading",
        "Deadlock condition",
        "Working with multiprocessing",
        "Practical",
      ],
    },
    8: {
      title: " Python with MYSQL",
      topics: [
        "Introduction about database management System",
        "Database keys",
        "SQL vs NOSQL",
        "Relational database management system",
        "Database connectivity",
        "Create a new database",
        "Create tables",
        "CRUD operations",
        "Join operations",
        "Commit and rollback",
        "Practical",
      ],
    },
    9: {
      title: "Introduction of FASTAPI",
      topics: [
        "Getting started with FASTAPI",
        "Make your first FASTAPI",
        "Overview of API",
        "Understanding asynchronous vs synchronous APIs",
        "Routes and end points",
        "Making simple APIs with various routes",
        "FASTAPI with HTML",
        "Sending post, get, patch, delete requests",
        "Sending request and getting response in json format",
        "Testing with postman",
        "Project 1",
        "Project 2",
      ],
    },
    10: {
      title: "Introduction of Django",
      topics: [
        "Getting started with Django",
        "Django installation and configuration",
        "Django MVT structures",
        "Django admin panel",
        "Django static files handling",
        "Django with database integration",
        "CRUD operation",
        "Project 1",
        "Project 2",
      ],
    },
    11: {
      title: "Introduction of machine learning",
      topics: [
        "Getting started with Machine learning",
        "Types of Machine learning",
        "Supervised learning",
        "Unsupervised learning",
        "Classification and regression",
        "Project 1",
      ],
    },
    12: {
      title: "Additional knowledge",
      topics: ["GitHub management", "Project deployment"],
    },
  };

  return (
    <div className="python-main-container">
      {/* Animated Background */}
      <div className="python-background-blobs">
        <div className="python-blob python-blob-1"></div>
        <div className="python-blob python-blob-2"></div>
        <div className="python-blob python-blob-3"></div>
      </div>

      {/* Hero Section */}
      <div className="python-hero-section">
        <div className="python-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Code className="w-5 h-5" />
              <span>Professional Python Certification Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Master</span>
              <br />
              <span className="python-title-python">Python Programming</span>
            </h1>

            <p className="python-hero-description">
              Learn A-Z everything about python From the basic to advanced.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Python Programming Curriculum.pdf" // path inside public/
                download="Curriculum.pdf" // optional custom file name
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
                Comprehensive curriculum designed by industry experts to make
                you job-ready
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
                            <div className="python-syllabus-duration">
                              {item.duration}
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
                <p className="python-content-description">
                  {syllabusContent[activeSection]?.description}
                </p>

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
                    Carry your own laptop with decent configurations
                  </span>
                </div>
              </div>
            </div>

            <div className="python-cta-card">
              <h3 className="python-cta-title">Ready to Start Your Journey?</h3>
              <p className="python-cta-description">
                We offer both online and offline classes to suit your
                convenience and learning style.
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

export default Python;
