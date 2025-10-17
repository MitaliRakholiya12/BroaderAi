import "../../styles/Python.css";
import InquiryModal from "./InquiryModal";

import React, { useState, useEffect } from "react";
import {
  Rocket,
  Database,
  BarChart3,
  Layers,
  PieChart,
  LineChart,
  GitBranch,
  CheckCircle,
  ListChecks,
  Binary,
  Brain,
  Cpu,
  Atom,
  Network,
  GitMerge,
  Shapes,
  Lightbulb,
  Compass,
  Box,
  Puzzle,
  Cloud,
  Image as ImageIcon,
  PenTool,
  Grid,
  Layers3,
  Palette,
  Search,
  Text,
  BookOpen,
  MessageSquare,
  Globe,
  FileCode,
  Terminal,
  Code,
  Settings,
  Briefcase,
  Clock,
  Award,
  Star,
  Play,
  Download,
  ChevronRight,
  Target,
  User,
  Check,
  Users,
} from "lucide-react";

function Science() {
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
    { text: "Basic Fundamentals of Data Science, ML, CV, NLP", icon: Database },
    { text: "Course Foundation", icon: Rocket },
    { text: "Data Exploration & Preprocessing", icon: Search },
    { text: "Handling Missing Values", icon: ListChecks },
    { text: "Feature Engineering & EDA", icon: Layers },
    { text: "Data Visualization Techniques", icon: BarChart3 },
    { text: "Statistics & Probability", icon: LineChart },
    { text: "Working with Tableau & Power BI", icon: PieChart },
    { text: "Cross–Validation Techniques", icon: GitBranch },
    {
      text: "Model Selection, Training, Evaluation & Prediction",
      icon: CheckCircle,
    },
    { text: "Supervised, Unsupervised & Reinforcement Learning", icon: Binary },
    {
      text: "Regression, Classification, Clustering, Association Rules",
      icon: Brain,
    },
    { text: "Algorithms: LR, SVM, Naive Bayes, Trees, RF, KNN", icon: Cpu },
    { text: "Ensemble Learning – Bagging & Boosting", icon: GitMerge },
    { text: "Clustering: K-means, DBSCAN, Hierarchical", icon: Shapes },
    { text: "Recommendation Systems", icon: Lightbulb },
    {
      text: "Advanced Boosting: AdaBoost, XGBoost, CatBoost, GBoost",
      icon: Compass,
    },
    { text: "Deep Learning & Neural Networks", icon: Atom },
    { text: "Perceptron & ANN Basics", icon: Network },
    { text: "Backpropagation, Weights & Bias", icon: Box },
    { text: "Overfitting & Underfitting", icon: Puzzle },
    {
      text: "Activation Functions, Optimizers & Loss Functions",
      icon: Settings,
    },
    { text: "Training Parameters (Epochs, Batch, LR, etc.)", icon: Cloud },
    { text: "Image & Video Processing (OpenCV, Mediapipe)", icon: ImageIcon },
    { text: "Data Augmentation & Annotation", icon: PenTool },
    { text: "CNNs, Hyperparameter Tuning & Transfer Learning", icon: Grid },
    { text: "GANs & Generative Models", icon: Layers3 },
    {
      text: "Image Tasks: Classification, Detection, Segmentation, etc.",
      icon: Palette,
    },
    { text: "NLP Components – NLU & NLG", icon: MessageSquare },
    { text: "NLP Phases & WSD", icon: BookOpen },
    { text: "Text Preprocessing & Feature Extraction", icon: Text },
    { text: "RNN, LSTM, GRU, Encoder–Decoder, Transformers", icon: Brain },
    {
      text: "NLP Tasks: Classification, Summarization, QA, Chatbots",
      icon: Globe,
    },
    { text: "Project Management, Development & Deployment", icon: Briefcase },
    { text: "Web Scraping Techniques", icon: FileCode },
    { text: "API Development (FastAPI)", icon: Terminal },
    {
      text: "Working with ML Libraries (Sklearn, TF, Pandas, etc.)",
      icon: Code,
    },
    { text: "Hands-on Real World Projects", icon: Users },
    { text: "ML Interview Questions", icon: MessageSquare },
    { text: "Mock Interview Preparation", icon: Users },
    { text: "Resume Creation Help", icon: PenTool },
  ];

  const courseStats = [
    { label: "Course Duration", value: "12 Weeks", icon: Clock },
    { label: "Students Enrolled", value: "2,500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Award },
    { label: "Rating", value: "4.9/5", icon: Star },
  ];

  const syllabusItems = [
    { title: "Introduction of Course", icon: CheckCircle },
    { title: "Fundamental of Machine Learning", icon: CheckCircle },
    {
      title: "Data exploration & Feature engineering techniques",
      icon: CheckCircle,
    },
    { title: "Statistical techniques", icon: CheckCircle },
    { title: "Data Visualization", icon: CheckCircle },
    { title: "Supervised Learning", icon: CheckCircle },
    { title: "Ensemble Learning", icon: CheckCircle },
    { title: "Unsupervised Learning", icon: CheckCircle },
    { title: "Reinforcement Learning", icon: CheckCircle },
    { title: "Deep Learning", icon: CheckCircle },
    { title: "Fundamental of Computer Vision", icon: CheckCircle },
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
    { title: "Fundamental of Natural Language Processing", icon: CheckCircle },
    { title: "Phases of NLP", icon: CheckCircle },
    { title: "Text Exploration and Preparation", icon: CheckCircle },
    { title: "Feature Extraction Techniques", icon: CheckCircle },
    { title: "Recurrent Neural Network (RNN)", icon: CheckCircle },
    { title: "Long Short-Term Memory (LSTM)", icon: CheckCircle },
    { title: "Gated Recurrent Units (GRU)", icon: CheckCircle },
    { title: "Encoder & Decoder Models", icon: CheckCircle },
    { title: "Attention Mechanism", icon: CheckCircle },
    { title: "Transformers", icon: CheckCircle },
    { title: "Hugging Face Transformers", icon: CheckCircle },
    {
      title: "Generative AI : LLMs, Stable Diffusions, RAG and Langchain",
      icon: CheckCircle,
    },
    { title: "Additional Knowledge", icon: CheckCircle },
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
      title: "Fundamental of Machine Learning",
      topics: [
        "Introduction of Machine Learning",
        "Importance of Machine Learning",
        "Industrial Applications of Machine Learning",
        "Problem Statement Analysis",
        "Numerical and Categorical Variables",
        "Machine Learning Pipeline",
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
        "Grid search, random search",
        "Cross–validation techniques",
        "Group by and pivot table",
        "Perform exploratory data analysis (EDA)",
        "Project 1",
        "Project 2",
      ],
    },

    4: {
      title: "Statistical techniques",
      topics: [
        "Descriptive statistics - mean, mode, median, standard deviation, variance, etc.",
        "Data distributions, skewness and kurtosis",
        "Inferential statistics - various feature selection techniques, statistical testings, hypothesis testing",
        "Probability",
        "Handling outliers",
        "Dimensionality reduction techniques – PCA, LDA, etc.",
        "Practical",
      ],
    },

    5: {
      title: "Data Visualization",
      topics: [
        "Introduction of Data Visualization",
        "Importance of Data Visualization",
        "Explanation of various graphs / charts",
        "Working with Tableau and PowerBI",
        "Practical with Matplotlib, Seaborn and Plotly libraries",
        "Project 1",
      ],
      number: "5",
    },

    6: {
      title: "Supervised Learning",
      topics: [
        "Getting started with Supervised Learning",
        "Types of Supervised Learning",
        "Explanation of Regression technique",
        "Algorithms of Regression technique",
        "Model evaluation methods for Regression",
        "Use cases of Regression technique",
        "Explanation of Classification technique",
        "Algorithms of Classification technique",
        "Model evaluation methods for Classification",
        "Use cases of Classification technique",
        "Linear Regression",
        "Logistic Regression",
        "Support Vector Machine",
        "Naïve Bayes Algorithm",
        "Decision Tree",
        "Random Forest",
        "K-Nearest Neighbors and others",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },

    7: {
      title: "Ensemble Learning",
      topics: [
        "Introduction of Ensemble Learning",
        "Types of Ensemble Learning",
        "Workflow of Ensemble Learning",
        "Explanation of Bagging technique",
        "Algorithms of Bagging technique",
        "Explanation of Boosting technique",
        "Types of Boosting technique",
        "Algorithms of Boosting technique",
        "AdaBoost",
        "XGBoost",
        "CatBoost",
        "Gradient Boosting and others",
        "Project 1",
        "Project 2",
      ],
    },

    8: {
      title: "Unsupervised Learning",
      topics: [
        "Getting started with Unsupervised Learning",
        "Types of Unsupervised Learning",
        "Explanation of Clustering technique",
        "Algorithms of Clustering technique",
        "Model evaluation methods for Clustering",
        "Use cases of Clustering technique",
        "K-means, DBSCAN, Hierarchical Clustering",
        "Explanation of Association Rules technique",
        "Algorithms of Association Rules technique",
        "Model evaluation methods for Association Rules",
        "Use cases of Association Rules technique",
        "Content-based Filtering and Collaborative Filtering",
        "Recommendation System and its working process",
        "Project 1",
        "Project 2",
      ],
    },

    9: {
      title: "Reinforcement Learning",
      topics: [
        "Introduction of Reinforcement Learning",
        "Working process of Reinforcement Learning",
        "Algorithms of Reinforcement Learning",
        "Applications of Reinforcement Learning",
        "Practical",
      ],
    },

    10: {
      title: "Deep Learning",
      topics: [
        "Introduction of Deep Learning",
        "Importance of Deep Learning",
        "Explanation about Neural Networks",
        "Types of Neural Networks",
        "Architecture of Neural Networks",
        "Workflow of Neural Networks",
        "Feed Forward Propagation",
        "Back Propagation",
        "Weights and Bias",
        "Weights and Bias Initialization Techniques",
        "Handling Overfitting and Underfitting",
        "Regularizations and Dropouts",
        "Batch Normalization",
        "Explanation on Activation Functions",
        "Various Types of Activation Functions",
        "Explanation on Loss / Cost Functions",
        "Various Types of Loss / Cost Functions",
        "Explanation on Optimizers Functions",
        "Various Types of Optimizers Functions",
        "Learn about Hyperparameters – epochs, step per epochs, batch size, val epochs, learning rate, etc.",
        "Working with TensorFlow library",
        "Building a Custom Artificial Neural Networks",
        "Project 1",
        "Project 2",
      ],
    },

    11: {
      title: "Fundamental of Computer Vision",
      topics: [
        "Introduction of Computer Vision",
        "Industrial and Real-world Applications of Computer Vision",
        "Importance of Computer Vision",
        "Computer Vision Pipeline",
        "Getting Started with Images",
        "Getting Started with Videos",
      ],
    },

    12: {
      title: "Image Processing with OpenCV",
      topics: [
        "Drawing Functions",
        "Basic Operations on Image",
        "Arithmetic Operations on Images",
        "Changing Colorspaces",
        "Geometric Transformations of Images",
        "Image Thresholding",
        "Smoothing Images",
        "Morphological Transformations",
        "Image Gradients",
        "Canny Edge Detection",
        "Image Pyramids",
        "Contours in OpenCV",
        "Template Matching",
        "Image Segmentation with Watershed Algorithm",
        "Interactive Foreground Extraction using GrabCut Algorithm",
        "Feature Detection",
        "Object Detection",
        "Project 1",
      ],
    },

    13: {
      title: "Video Processing with OpenCV",
      topics: [
        "Various Operations on Video",
        "Meanshift and Camshift",
        "Background Subtraction",
        "Video Filters",
        "Video Analysis",
      ],
    },
    14: {
      title: "Working with Mediapipe",
      topics: [
        "Introduction of Mediapipe",
        "Image Processing with Mediapipe",
        "Video Processing with Mediapipe",
        "Project 1",
        "Project 2",
      ],
    },
    15: {
      title: "Data Augmentation",
      topics: [
        "Introduction of Data Augmentation",
        "Importance of Data Augmentation",
        "Data Augmentation with Augmentations",
        "Data Augmentation with Scikit-image",
        "Project 1",
      ],
    },
    16: {
      title: "Data Annotation",
      topics: [
        "Introduction of Data Annotation",
        "Importance of Data Annotation",
        "Data Annotation with VGG Annotator",
        "Data Annotation with labelImg",
        "Data Annotation with MakeSense.AI",
        "Project 1",
      ],
    },
    17: {
      title: "Introduction of Convolutional Neural Network (CNN)",
      topics: [
        "Introduction of CNN",
        "CNN vs ANN",
        "Importance of CNN",
        "Architecture of CNN",
        "Kernels, Channels, Filters, Stride and Padding",
        "Convolutional, Pooling and Fully Connected Layers",
        "Dropout, Regularizations Methods",
        "Building Custom Convolutional Neural Network",
        "Project 1",
      ],
    },
    18: {
      title: "Transfer Learning",
      topics: [
        "Introduction of Transfer Learning",
        "Working Flow and Importance of Transfer Learning",
        "Working with Pretrained Models",
        "VGG Models",
        "ResNet Models",
        "Inception Models",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },
    19: {
      title: "Object Detection",
      topics: [
        "Introduction of Object Detection",
        "Object Localization",
        "Sliding Window",
        "Bounding Boxes",
        "Intersection over Union (IoU)",
        "Non-Max Suppression",
        "Overlapping Objects",
        "Single Shot Detector (SSD)",
        "Region with CNN (RCNN)",
        "Fast RCNN",
        "Faster RCNN",
        "YOLO Models",
        "Deeplabv3",
        "Project 1",
        "Project 2",
      ],
    },
    20: {
      title: "Image Segmentation",
      topics: [
        "Introduction of Image Segmentation",
        "Type of Image Segmentations",
        "Semantic Segmentation",
        "Instance Segmentation",
        "Mask R-CNN",
        "Detectron2",
        "Project 1",
      ],
    },
    21: {
      title: "Generative Adversarial Network (GANs)",
      topics: [
        "Getting Started with GANs",
        "Applications of GANs",
        "Building Custom GANs Model",
        "Working with DCGAN",
        "Working with CycleGAN",
        "Working with StyleGAN",
        "Working with Pix2PixGAN",
        "Working with SRGAN",
        "Project 1",
      ],
    },
    22: {
      title: "Fundamental of Natural Language Processing",
      topics: [
        "Introduction of Natural Language Processing",
        "Components of NLP – NLU and NLG",
        "Importance of NLP",
        "Why NLP is Difficult",
        "Industrial and Real-world Applications of NLP",
        "NLP Pipeline",
      ],
    },
    23: {
      title: "Phases of NLP",
      topics: [
        "Lexical / Morphological Analysis",
        "Syntactic Analysis",
        "Semantic Analysis",
        "Disclosure Integration",
        "Pragmatic Analysis",
        "Word Sense Disambiguation",
      ],
    },
    24: {
      title: "Text Exploration and Preparation",
      topics: [
        "Getting Started with Text Data",
        "Basic Operations on Text Data",
        "Splitting and Joining Strings",
        "Working with Regular Expression on Text (Re library)",
        "Remove Punctuations, Digits and Stop Words",
        "Remove Emojis and Frequent Words",
        "Remove URLs, Unicode, ASCII Codes and HTML Tags",
        "Spelling Correction",
        "Stemming and Lemmatization",
        "Tokenization",
        "Part of Speech Tagging (POS)",
        "Named Entity Recognition (NER)",
        "Chunking",
        "Working with NLTK library",
        "Working with SpaCy library",
        "Working with TextBlob library",
        "Working with Gensim library",
        "Project 1",
        "Project 2",
      ],
    },
    25: {
      title: "Feature Extraction Techniques",
      topics: [
        "Bag of Word technique",
        "TF-IDF technique",
        "Word Embedding – Word2Vec",
        "Text Similarities – Euclidean distance, Cosine similarity and Jaccard similarity",
        "Working with Word2Vec and GloVe libraries",
        "Project 1",
        "Project 2",
      ],
    },
    26: {
      title: "Recurrent Neural Network (RNN)",
      topics: [
        "Introduction of RNN",
        "RNN vs ANN",
        "Importance of RNN",
        "Architecture of RNN",
        "Working Process of RNN",
        "Building Custom RNN Model",
        "Model Fine Tuning",
        "Limitation of RNN",
        "Project 1",
      ],
    },
    27: {
      title: "Long Short-Term Memory (LSTM)",
      topics: [
        "Introduction of LSTM",
        "How LSTM Overcomes RNN Limitation",
        "Architecture of LSTM",
        "Working Process of LSTM",
        "Building Custom LSTM Model",
        "Model Fine Tuning",
        "Limitation of LSTM",
        "Project 1",
      ],
    },
    28: {
      title: "Gated Recurrent Units (GRU)",
      topics: [
        "Introduction of GRU",
        "Architecture of GRU",
        "Working Process of GRU",
        "Building Custom GRU",
        "Model Fine Tuning",
        "Limitation of GRU",
        "Project 1",
      ],
    },
    29: {
      title: "Encoder & Decoder Models",
      topics: [
        "Introduction of Sequence-to-Sequence Model",
        "Understand the Concept of Encoder and Decoder",
        "Importance of Encoder and Decoder",
        "Architecture of Encoder and Decoder",
        "Use Cases of Encoder and Decoder",
        "Building Custom Encoder and Decoder Model",
        "Model Fine Tuning",
        "Limitation of Encoder and Decoder",
        "Project 1",
      ],
    },
    30: {
      title: "Attention Mechanism",
      topics: [
        "Introduction of Attention Models",
        "Types of Attention Models",
        "How Attention Models Enhance the Accuracy of Encoder and Decoder",
        "Architecture of Attention Models",
        "Working Process of Attention Models",
        "Building Custom Attention Models",
        "Model Fine Tuning",
        "Limitation of Attention Models",
        "Project 1",
      ],
    },
    31: {
      title: "Transformers",
      topics: [
        "Introduction of Transformer",
        "Architecture of Transformer",
        "Working Process of Transformer",
        "Understand BERT Transformer and its Architecture",
        "Building Custom Transformer Model",
        "Model Fine Tuning",
        "Project 1",
        "Project 2",
      ],
    },
    32: {
      title: "Hugging Face Transformers",
      topics: [
        "About Hugging Face",
        "Introduction of Hugging Face Transformers",
        "Working with Pretrained Transformers by Hugging Face",
        "Model Fine Tuning",
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
    33: {
      title: "Generative AI: LLMs, Stable Diffusions, RAG and Langchain",
      topics: [
        "About Gen AI",
        "Introduction of LLMs, RAG and Stable Diffusion",
        "Building LLM Applications using Prompt Engineering",
        "Fine Tuning LLMs from Scratch",
        "Building RAG (Retrieval-Augmented Generation) System with Langchain",
        "Getting Started with Stable Diffusion",
        "Project 1",
        "Project 2",
        "Project 3",
      ],
    },
    34: {
      title: "Additional Knowledge",
      topics: [
        "Introduction of OpenAI Model",
        "Web Scraping Techniques",
        "FASTAPI Development",
        "GitHub Management",
        "Project Deployment",
        "Level up your Kaggle Profile",
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
        <div className="science-hero-background">
          <div className="python-hero-overlay"></div>

          <div
            className={`python-hero-content ${
              isVisible ? "python-hero-visible" : ""
            }`}
          >
            <div className="python-hero-badge">
              <Code className="w-5 h-5" />
              <span>Data Science Course</span>
              <div className="python-status-dot"></div>
            </div>

            <h1 className="python-hero-title">
              <span className="python-title-master">Data </span>

              <span className="python-title-python"> Science</span>
            </h1>

            <p className="python-hero-description">
              Learn A-Z everything about Data Science From the basic to
              advanced.
            </p>

            <div className="python-hero-buttons">
              <a
                href="../../../public/Data Science Curriculum.pdf" // path inside public/
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

export default Science;
