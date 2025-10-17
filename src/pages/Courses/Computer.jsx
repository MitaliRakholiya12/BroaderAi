import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Brain,
  Database,
  Image,
  Cpu,
  Zap,
  Target,
  Globe,
  FileText,
  Code,
  FileCode,
  CheckCircle,
  BookOpen,
  Users,
  Play,
  Download,
  ChevronRight, // ✅ Add this
  User, // ✅ Add this
  Check, // ✅ Add this
  Award, // ✅ Add this
  Clock,
  Star,
} from "lucide-react";

function Computer() {
  const [activeSection, setActiveSection] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const learningPoints = [
    { text: "Basic fundamentals of Computer Vision.", icon: Brain },
    {
      text: "Image and video processing with OpenCV and Mediapipe libraries.",
      icon: Image,
    },
    { text: "Data augmentation and data annotation.", icon: Database },
    {
      text: "CNN architecture, hyperparameter tuning and transfer learning.",
      icon: Cpu,
    },
    { text: "Generative Adversarial Networks (GANs).", icon: Zap },
    {
      text: "Image classification, Object detection, Image segmentation, Face recognition, Pose estimation, Face generation, Image filtering, Art and Painting generation etc.",
      icon: Target,
    },
    { text: "Project management, development and deployment.", icon: FileCode },
    { text: "Web scraping techniques.", icon: Globe },
    { text: "Hands-on experience in real world projects.", icon: CheckCircle },
    { text: "Computer Vision interview questions.", icon: BookOpen },
    { text: "Computer Vision mock interview preparation.", icon: Users },
    { text: "Helping resume creation.", icon: FileText },
  ];
  const courseStats = [
    { label: "Course Duration", value: "12 Weeks", icon: Clock },
    { label: "Students Enrolled", value: "2,500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Award },
    { label: "Rating", value: "4.9/5", icon: Star },
  ];

  const syllabusItems = [
    { title: "Introduction of course", icon: CheckCircle },
    { title: "Introduction of Computer Vision", icon: CheckCircle },
    { title: "Image Processing with OpenCV", icon: CheckCircle },
    { title: "Video Processing with OpenCV", icon: CheckCircle },
    { title: "Working with Mediapipe", icon: CheckCircle },
    { title: "Data Augmentation", icon: CheckCircle },
    { title: "Data Annotation", icon: CheckCircle },
    {
      title: "Introduction of Convolutional Neural Network (CNN)",
      icon: CheckCircle,
    },
    { title: "Transfer Learning", icon: CheckCircle },
    { title: "Object Detection", icon: CheckCircle },
    { title: "Image Segmentation", icon: CheckCircle },
    { title: "Generative Adversarial Network (GANs)", icon: CheckCircle },
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
      title: "Introduction of Computer Vision",
      topics: [
        "Introduction of Computer Vision",
        "Industrial and real-world applications of Computer Vision",
        "Importance of Computer Vision",
        "Computer Vision pipeline",
        "Getting started with images",
        "Getting started with videos",
      ],
    },
    3: {
      title: "Image Processing with OpenCV",
      topics: [
        "Drawing functions",
        "Basic operations on image",
        "Arithmetic operations on images",
        "Changing colorspaces",
        "Geometric transformations of images",
        "Image thresholding",
        "Smoothing images",
        "Morphological transformations",
        "Image gradients",
        "Canny edge detection",
        "Image pyramids",
        "Contours in OpenCV",
        "Template matching",
        "Image segmentation with watershed algorithm",
        "Interactive foreground extraction using grabCut algorithm",
        "Feature detection",
        "Object detection",
        "Project 1",
      ],
    },
    4: {
      title: "Video Processing with OpenCV",
      topics: [
        "Various operations on video",
        "Meanshift and Camshift",
        "Background subtraction",
        "Video filters",
        "Video analysis",
      ],
    },
    5: {
      title: "Working with Mediapipe",
      topics: [
        "Introduction of Mediapipe",
        "Image processing with Mediapipe",
        "Video processing with Mediapipe",
        "Project 1",
        "Project 2",
      ],
    },

    6: {
      title: "Data Augmentation",
      topics: [
        "Introduction of Data augmentation",
        "Importance of Data augmentation",
        "Data augmentation with augmentations",
        "Data augmentation with Scikit-image",
        "Project",
      ],
    },

    7: {
      title: "Data Annotation",
      topics: [
        "Introduction of Data annotation",
        "Importance of Data annotation",
        "Data annotation with VGG annotator",
        "Data annotation with labelImg",
        "Data annotation with MakeSense.AI",
        "Project 1",
      ],
    },
    8: {
      title: "Introduction of Convolutional Neural Network (CNN)",
      topics: [
        "Introduction of CNN",
        "CNN vs ANN",
        "Importance of CNN",
        "Architecture of CNN",
        "Kernels, Channels, Filters, Stride and Padding",
        "Convolutional, pooling and fully connected layers",
        "Dropout, regularization methods",
        "Building custom convolutional neural network",
        "Project 1",
      ],
    },
    9: {
      title: "Transfer Learning",
      topics: [
        "Introduction of Transfer learning",
        "Working flow and importance of Transfer learning",
        "Working with Pretrained models",
        "VGG models",
        "ResNet models",
        "Inception models",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },

    10: {
      title: "Object Detection",
      topics: [
        "Introduction of Object detection",
        "Object localization",
        "Sliding window",
        "Bounding boxes",
        "Intersection over Union (IoU)",
        "Non-Max suppression",
        "Overlapping objects",
        "Single shot detector (SSD)",
        "Region with CNN (RCNN)",
        "Fast RCNN",
        "Faster RCNN",
        "YOLO models",
        "Deeplabv3",
        "Project 1",
        "Project 2",
      ],
    },
    11: {
      title: "Image Segmentation",
      topics: [
        "Introduction of Image segmentation",
        "Type of Image segmentations",
        "Semantic segmentation",
        "Instance segmentation",
        "Mask R-CNN",
        "Detectron2",
        "Project 1",
      ],
    },
    12: {
      title: "Generative Adversarial Network (GANs)",
      topics: [
        "Getting started with GANs",
        "Applications of GANs",
        "Building custom GANs model",
        "Working with DCGAN",
        "Working with CycleGAN",
        "Working with StyleGAN",
        "Working with Pix2PixGAN",
        "Working with SRGAN",
        "Project 1",
      ],
    },
    13: {
      title: "Additional Knowledge",
      topics: [
        "Introduction of Open AI’s Dall E 2 model",
        "Web scraping techniques",
        "FASTAPI development",
        "GitHub management",
        "Project deployment",
        "Level up your Kaggle profile",
      ],
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
        <div className="computer-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Code className="w-5 h-5" />
              <span>Computer vision Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Computer </span>

              <span className="python-title-python"> vision</span>
            </h1>

            <p className="python-hero-description">
              Learn A-Z everything about Computer vision From the basic to
              advanced.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Computer vision Curriculum.pdf" // path inside public/
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
                <div className="python-content-header">
                  <h3 className="python-content-title">
                    {syllabusContent[activeSection]?.title}
                  </h3>
                  <span className="python-module-badge">
                    Module {activeSection}
                  </span>
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
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Knowledge about Python programming language
                  </span>
                </div>
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Machine learning and Deep learning concepts
                  </span>
                </div>
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Familiar with TensorFlow and Pytorch frameworks Inquiry
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

export default Computer;
