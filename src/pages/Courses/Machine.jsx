import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Brain,
  Database,
  BarChart3,
  Target,
  GitBranch,
  Layers,
  Filter,
  Rocket,
  Cpu,
  Activity,
  LineChart,
  Bot,
  Network,
  Zap,
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
function Machine() {
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
    { text: "Basic fundamentals of Machine learning.", icon: Brain },
    {
      text: "Feature engineering and exploratory data analysis.",
      icon: Database,
    },
    { text: "Descriptive and inferential statistics.", icon: BarChart3 },
    {
      text: "Model selection, training, evaluation and prediction.",
      icon: Target,
    },
    {
      text: "Regression, Classification, Clustering, Association rules.",
      icon: GitBranch,
    },
    { text: "Ensemble learning – bagging and boosting.", icon: Layers },
    {
      text: "Content-based filtering and Collaborative filtering.",
      icon: Filter,
    },
    { text: "Adaboost, XGBoost, CatBoost, Gradient boosting.", icon: Rocket },
    {
      text: "Perceptron, Artificial Neural Networks, Feed forward networks.",
      icon: Cpu,
    },
    { text: "Weights, bias and tradeoff.", icon: Activity },
    {
      text: "Activation functions, optimizers, loss/cost functions.",
      icon: LineChart,
    },
    { text: "Project management, development and deployment.", icon: FileCode },
    { text: "API development using Deep Learning framework.", icon: Code },
    { text: "Hands-on experience in real world projects.", icon: CheckCircle },
    { text: "ML mock interview preparation.", icon: Users },

    {
      text: "Data exploration, preprocessing, handling missing values.",
      icon: Database,
    },
    { text: "Data visualization techniques.", icon: BarChart3 },
    { text: "Cross-validation techniques.", icon: Target },
    { text: "Supervised, Unsupervised, Reinforcement learning.", icon: Brain },
    {
      text: "Linear & Logistic regression, SVM, Decision tree, Random forest, KNN.",
      icon: GitBranch,
    },
    { text: "K-means, DBSCAN, Hierarchical clustering.", icon: Network },
    { text: "Recommendation systems and working process.", icon: Bot },
    { text: "Deep learning and Neural networks.", icon: Cpu },
    { text: "Backpropagation algorithm.", icon: Activity },
    { text: "Overfitting and underfitting.", icon: Zap },
    { text: "Epochs, batch size, learning rate tuning.", icon: LineChart },
    { text: "Web scraping techniques.", icon: FileCode },
    {
      text: "Working with Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn, Plotly.",
      icon: SiTensorflow,
    },
    { text: "Machine learning interview questions.", icon: BookOpen },
    { text: "Helping resume creation.", icon: Users },
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
      title: "Fundamental of Machine learning",
      icon: CheckCircle,
    },

    {
      title: "Data exploration & Feature engineering techniques",
      icon: CheckCircle,
    },
    {
      title: "Data visualization",
      icon: CheckCircle,
    },
    {
      title: " Supervised learning",
      icon: CheckCircle,
    },
    {
      title: "   Ensemble learning",
      icon: CheckCircle,
    },
    {
      title: " Unsupervised learning",
      icon: CheckCircle,
    },
    {
      title: " Reinforcement learning",
      icon: CheckCircle,
    },
    {
      title: "  Deep learning",
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
      title: "Fundamental of Machine learning",

      topics: [
        "Introduction of Machine learning",
        "Importance of Machine learning",
        "Industrial applications of Machine learning",
        "Problem statement analysis",
        "Numerical and categorical variables",
        "Types of Machine learning",
        "Machine learning pipeline",
      ],
    },
    3: {
      title: "Data exploration & Feature engineering techniques",
      topics: [
        "Explore various data exploration methods",
        "Handling missing values methods",
        "Working with Pandas, Numpy and Sklearn libraries",
        "One-hot encoder and label encoder",
        "Data normalization, data standardization and quantiles",
        "Handling outliers",
        "Descriptive statistics – mean, mode, median, standard deviation, variance, etc.",
        "Data distributions, skewness and kurtosis",
        "Inferential statistics – various feature selection techniques, statistical tastings, hypothesis testing",
        "Dimensionality reduction techniques – PCA, LDA, etc.",
        "Grid search, random search",
        "Cross – validation techniques",
        "Group by and pivot table",
        "Perform exploratory data analysis (EDA)",
        "Project 1",
        "Project 2",
      ],
    },
    4: {
      title: "Data Visualization",
      topics: [
        "Introduction of Data Visualization",
        "Importance of Data Visualization",
        "Explanation of various Graphs / Charts",
        "Practical with Matplotlib, Seaborn and Plotly libraries",
        "Project 1",
        "Project 2",
      ],
    },
    5: {
      title: "Supervised Learning",
      topics: [
        "Getting started with Supervised learning",
        "Types of Supervised learning",
        "Explanation of Regression technique",
        "Algorithms of Regression technique",
        "Model evaluation methods for regression",
        "Use cases of Regression technique",
        "Explanation of Classification technique",
        "Algorithms of Classification technique",
        "Model evaluation methods for Classification",
        "Use cases of Classification technique",
        "Linear Regression",
        "Logistic Regression",
        "Support vector machine",
        "Naïve Bayes algorithm",
        "Decision tree",
        "Random forest",
        "K-nearest neighbors and others",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },

    6: {
      title: "Ensemble Learning",
      topics: [
        "Introduction of Ensemble learning",
        "Types of Ensemble learning",
        "Workflow of Ensemble learning",
        "Explanation of Bagging technique",
        "Algorithms of Bagging technique",
        "Explanation of Boosting technique",
        "Types of Boosting technique",
        "Algorithms of Boosting technique",
        "Adaboost",
        "XGboost",
        "Catboost",
        "Gradient boosting and others",
        "Project 1",
        "Project 2",
      ],
    },

    7: {
      title: "Unsupervised Learning",
      topics: [
        "Getting started with Unsupervised learning",
        "Types of Unsupervised learning",
        "Explanation of Clustering technique",
        "Algorithms of Clustering technique",
        "Model evaluation methods for Clustering",
        "Use cases of Clustering technique",
        "K-means, DBSCAN, Hierarchical clustering",
        "Explanation of Association rules technique",
        "Algorithms of Association rules technique",
        "Model evaluation methods for Association rules",
        "Use cases of Association rules technique",
        "Content based filtering and Collaborative filtering",
        "Recommendation system and its working process",
        "Project 1",
        "Project 2",
      ],
    },
    8: {
      title: "Reinforcement Learning",
      topics: [
        "Introduction of Reinforcement Learning",
        "Working process of Reinforcement Learning",
        "Algorithms of Reinforcement Learning",
        "Applications of Reinforcement Learning",
        "Practical",
      ],
    },
    9: {
      title: "Deep Learning",
      topics: [
        "Introduction of Deep Learning",
        "Importance of Deep Learning",
        "Explanation about Neural Networks",
        "Types of Neural Networks",
        "Architecture of Neural Networks",
        "Workflow of Neural Networks",
        "Feed forward propagation",
        "Back propagation",
        "Weights and Bias",
        "Weights and Bias initialization techniques",
        "Handling overfitting and underfitting",
        "Regularization and Dropouts",
        "Batch Normalization",
        "Explanation on Activation functions",
        "Various types of Activation functions",
        "Explanation on Loss / Cost functions",
        "Various types of Loss / Cost functions",
        "Explanation on Optimizers functions",
        "Various types of Optimizers functions",
        "Learn about Hyperparameters – epochs, steps per epoch, batch size, validation epochs, learning rate, etc.",
        "Working with TensorFlow library",
        "Building a custom Artificial Neural Network",
        "Project 1",
        "Project 2",
      ],
    },

    10: {
      title: "Additional Knowledge",
      topics: [
        "Introduction of Computer Vision",
        "Introduction of Natural Language Processing",
        "Web scraping techniques",
        "FastAPI development",
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
        <div className="machine-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Code className="w-5 h-5" />
              <span>Machine Learning Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Machine</span>

              <span className="python-title-python"> Learning</span>
            </h1>

            <p className="python-hero-description">
              Learn A-Z everything about ML From the basic to advanced.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Machine Learning Curriculum.pdf" // path inside public/
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

export default Machine;
