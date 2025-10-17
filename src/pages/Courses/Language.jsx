import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Brain,
  Database,
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

import { SiTensorflow } from "react-icons/si";
function Language() {
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
    { text: "Basic fundamentals of Natural Language Processing.", icon: Brain },
    {
      text: "NLP components – Natural Language Understanding (NLU) and Natural Language Generation (NLG).",
      icon: Cpu,
    },
    {
      text: "NLP Phases – Lexical, Syntactic, Semantic, Pragmatic analysis, Word Sense Disambiguation.",
      icon: Target,
    },
    {
      text: "Text preprocessing and Feature extraction techniques.",
      icon: Database,
    },
    {
      text: "Recurrent Neural Networks (RNN), LSTM, GRU, Encoder & Decoder, Transformers and Hugging Face Transformers.",
      icon: Zap,
    },
    { text: "API development using FASTAPI framework.", icon: FileCode },
    { text: "Web scraping techniques.", icon: Globe },
    {
      text: "Hands-on experience in real-world NLP projects.",
      icon: CheckCircle,
    },
    { text: "NLP interview questions.", icon: BookOpen },
    { text: "NLP mock interview preparation.", icon: Users },
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
    {
      title: "Fundamental of Natural Language Processing",
      icon: CheckCircle,
    },
    { title: "Phases of NLP", icon: CheckCircle },
    {
      title: "Text Exploration and Preparation",
      icon: CheckCircle,
    },
    {
      title: "Feature Extraction Techniques",
      icon: CheckCircle,
    },
    {
      title: "Recurrent Neural Network (RNN)",
      icon: CheckCircle,
    },
    {
      title: "Long Short-Term Memory (LSTM)",
      icon: CheckCircle,
    },
    {
      title: "Gated Recurrent Units (GRU)",
      icon: CheckCircle,
    },
    {
      title: "Encoder & Decoder Models",
      icon: CheckCircle,
    },
    { title: "Attention Mechanism", icon: CheckCircle },
    { title: "Transformers", icon: CheckCircle },
    {
      title: "Hugging Face Transformers",
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
      title: "Fundamental of Natural Language Processing",
      topics: [
        "Introduction of Natural Language Processing",
        "Components of NLP – NLU and NLG",
        "Importance of NLP",
        "Why NLP is difficult",
        "Industrial and real-world applications of NLP",
        "NLP pipeline",
      ],
    },
    3: {
      title: "Phases of NLP",
      topics: [
        "Lexical / morphological analysis",
        "Syntactic analysis",
        "Semantic analysis",
        "Disclosure integration",
        "Pragmatic analysis",
        "Word Sense Disambiguation",
      ],
    },
    4: {
      title: "Text Exploration and Preparation",
      topics: [
        "Getting started with Text data",
        "Basic operations on Text data",
        "Splitting and joining strings",
        "Working with Regular expression on Text (Re library)",
        "Remove Punctuations, Digits and Stop words",
        "Remove emojis and frequent words",
        "Remove URLs, Unicode, ASCII codes and HTML tags",
        "Spelling correction",
        "Stemming and Lemmatization",
        "Tokenization",
        "Part of speech tagging (POS)",
        "Name entity recognition (NER)",
        "Chunking",
        "Working with NLTK library",
        "Working with SpaCy library",
        "Working with Textblob library",
        "Working with Gensim library",
        "Project 1",
        "Project 2",
      ],
    },
    5: {
      title: "Feature Extraction Techniques",
      topics: [
        "Bag of Word technique",
        "TF-IDF technique",
        "Word embedding – Word2Vec",
        "Text Similarities – Euclidean distance, Cosine similarity and Jaccard similarity",
        "Working with Word2Vec and Glove libraries",
        "Project 1",
        "Project 2",
      ],
    },

    6: {
      title: "Recurrent Neural Network (RNN)",
      topics: [
        "Introduction of RNN",
        "RNN vs ANN",
        "Importance of RNN",
        "Architecture of RNN",
        "Working process of RNN",
        "Building custom RNN model",
        "Model fine tuning",
        "Limitation of RNN",
        "Project 1",
      ],
    },

    7: {
      title: "Long Short-Term Memory (LSTM)",
      topics: [
        "Introduction of LSTM",
        "How LSTM overcome RNN limitation",
        "Architecture of LSTM",
        "Working process of LSTM",
        "Building custom LSTM model",
        "Model fine tuning",
        "Limitation of LSTM",
        "Project 1",
      ],
    },
    8: {
      title: "Gated Recurrent Units (GRU)",
      topics: [
        "Introduction of GRU",
        "Architecture of GRU",
        "Working process of GRU",
        "Building custom GRU",
        "Model fine tuning",
        "Limitation of GRU",
        "Project 1",
      ],
    },
    9: {
      title: "Encoder & Decoder Models",
      topics: [
        "Introduction of sequence-to-sequence Model",
        "Understand the concept of Encoder and Decoder",
        "Importance of Encoder and Decoder",
        "Architecture of Encoder and Decoder",
        "Use cases of Encoder and Decoder",
        "Building custom Encoder and Decoder model",
        "Model fine tuning",
        "Limitation of Encoder and Decoder",
        "Project 1",
      ],
    },

    10: {
      title: "Attention Mechanism",
      topics: [
        "Introduction of Attention models",
        "Types of Attention models",
        "How attention models enhance the accuracy of Encoder and Decoder",
        "Architecture of Attention models",
        "Working process of Attention models",
        "Building custom Attention models",
        "Model fine tuning",
        "Limitation of Attention models",
        "Project 1",
      ],
    },
    11: {
      title: "Transformers",
      topics: [
        "Introduction of Transformer",
        "Architecture of Transformer",
        "Working process of Transformer",
        "Understand BERT Transformer and its architecture",
        "Building custom transformer model",
        "Model fine tuning",
        "Project 1",
        "Project 2",
      ],
    },
    12: {
      title: "Hugging Face Transformers",
      topics: [
        "About hugging face",
        "Introduction of hugging face transformers",
        "Working with Pretrained transformers by hugging face",
        "Model fine tuning",
        "Roberta Transformer",
        "Distil BART Transformer",
        "T5 Transformer",
        "Pegasus Transformer",
        "GPT-J & GPT-2 Transformers",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },
    13: {
      title: "Additional Knowledge",
      topics: [
        "Introduction of Open AI model",
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
        <div className="language-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Code className="w-5 h-5" />
              <span>NLP Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Natural Language </span>

              <span className="python-title-python"> Processing</span>
            </h1>

            <p className="python-hero-description">
              Learn A-Z everything about NLP From the basic to advanced.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Natural Language Processing Curriculum.pdf" // path inside public/
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
                    Knowledge about Python programming language.
                  </span>
                </div>
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Machine learning and Deep learning concepts.
                  </span>
                </div>
                <div className="python-requirement-item">
                  <div className="python-requirement-check">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="python-requirement-text">
                    Familiar with TensorFlow and Pytorch frameworks.
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

export default Language;
