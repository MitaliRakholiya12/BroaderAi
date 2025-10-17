import "../styles/Home.css";
import React, { useRef, useEffect, useState } from "react";

import {
  Brain,
  Eye,
  Cpu,
  MessageSquare,
  BarChart3,
  Network,
  Palette,
  Code,
  BrainCircuit,
  BotMessageSquare,
  EthernetPort,
  ActivitySquare,
  Bot,
  Wallpaper,
  Database,
  Settings,
  GitBranch,
  TrendingUp,
} from "lucide-react";

// Lazy load Spline

function Home() {
  const services = [
    { icon: BrainCircuit, name: "Machine Learning", className: "service-ml" },
    { icon: Eye, name: "Computer Vision", className: "service-cv" },
    {
      icon: BotMessageSquare,
      name: "Artificial Intelligence",
      className: "service-ai",
    },
    { icon: EthernetPort, name: "NLP", className: "service-nlp" },
    { icon: ActivitySquare, name: "Data Science", className: "service-ds" },
    { icon: Network, name: "Deep Learning", className: "service-dl" },
    { icon: Wallpaper, name: "UI/UX Design", className: "service-ui" },
    { icon: Code, name: "Web Development", className: "service-web" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // WhyChooseSection
  const whyChooseRef = useRef(null);
  const whyChooseCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    whyChooseCardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      }
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Advanced Neural Networks",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: 0,
    },
    {
      title: "Quantum Computing Ready",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: 150,
    },
    {
      title: "Machine Learning Expertise",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: 300,
    },
    {
      title: "Deep Learning Solutions",
      image:
        "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      delay: 450,
    },
    {
      title: "AI-Powered Analytics",
      image:
        "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      delay: 600,
    },
    {
      title: "Autonomous Systems",
      image:
        "https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      delay: 750,
    },
  ];

  //skill section
  const skills = [
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Building intelligent systems that learn and adapt from data to enhance decision-making and predictions.",
    },
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description:
        "Crafting advanced AI solutions, including Natural Language Processing (NLP), Computer Vision, and Deep Learning to solve complex real-world problems.",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Driving business growth by turning raw data into meaningful insights through Predictive Analytics, Descriptive Analytics, and Diagnostic Analytics.",
    },
    {
      icon: Settings,
      title: "Automation & Optimization",
      description:
        "Implementing intelligent systems that automate processes, optimize performance, and improve efficiency.",
    },
    {
      icon: GitBranch,
      title: "DevOps Services",
      description:
        "Streamlining development and deployment processes with automation, continuous integration, and reliable infrastructure management.",
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description:
        "Driving business growth by turning raw data into meaningful insights through Predictive Analytics, Descriptive Analytics, and Diagnostic Analytics.",
    },
  ];

  //how we work
  const howsectionRef = useRef(null);
  const howstepsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    if (howsectionRef.current) {
      observer.observe(howsectionRef.current);
    }

    howstepsRef.current.forEach((step, index) => {
      if (step) {
        setTimeout(() => {
          observer.observe(step);
        }, index * 200);
      }
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description:
        "Analyze your requirements and goals with precision AI mapping",
      icon: "🎯",
      color: "#00ffff",
      gradient: "linear-gradient(135deg, #00ffff, #0080ff)",
    },
    {
      number: "02",
      title: "Data Scrutinization",
      description: "Scrutinize provided data using advanced ML algorithms",
      icon: "🔍",
      color: "#ff00ff",
      gradient: "linear-gradient(135deg, #ff00ff, #8000ff)",
    },
    {
      number: "03",
      title: "Technical Roadmap",
      description: "Draw up a comprehensive roadmap with our AI technical team",
      icon: "🗺️",
      color: "#00ff80",
      gradient: "linear-gradient(135deg, #00ff80, #00ff40)",
    },
    {
      number: "04",
      title: "Model Prototyping",
      description:
        "Perform advanced model prototyping and neural implementation",
      icon: "⚡",
      color: "#ffff00",
      gradient: "linear-gradient(135deg, #ffff00, #ff8000)",
    },
    {
      number: "05",
      title: "Testing & Verification",
      description:
        "Test and verify results using quantum-level validation processes",
      icon: "🧪",
      color: "#ff8000",
      gradient: "linear-gradient(135deg, #ff8000, #ff4000)",
    },
    {
      number: "06",
      title: "System Deployment",
      description:
        "Deploy tailored custom AI systems with autonomous monitoring",
      icon: "🚀",
      color: "#8000ff",
      gradient: "linear-gradient(135deg, #8000ff, #4000ff)",
    },
  ];

  return (
    <>
      <div className="home-page">
        <section className="hero-section">
          {/* Background Video */}
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="hero">
            {/* Content */}
            <div
              className="hero-content"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
             >
              <h1>
                Empowering <br />
                business with AI
              </h1>
              <p className="subtext">
                Build hands-on capabilities that translate directly into
                workplace advantage & tangible outcomes.
              </p>

              <div className="hero-buttons">
                <a href="/course" className="primary-btn">
                  Explore Courses
                </a>
                <a href="/contact" className="secondary-btn">
                  For Business
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <div className="vision-section">
          <section className="vision-container">
            {/* Header */}
            <div className="vision">
              <div>
                <div
                  className="vision-header"
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h1 className="vision-main-title">
                    OUR <span className="vision-highlight">VISION</span>
                  </h1>
                  <div className="vision-divider"></div>
                </div>

                {/* Vision Content */}
                <div className="vision-content-grid">
                  {/* Typing description (no card, no title) */}
                  <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <VisionTypingDescription />
                  </div>
                </div>
              </div>
              <div>
                <img src="https://cdn.sanity.io/images/h6toihm1/production/da091deadbf20b57b769d8b2a1ae52ee06e5a2a9-1440x810.png?auto=format&dpr=2&fit=max&q=75&w=1440"></img>
              </div>
            </div>
            {/* Vision Categories Carousel (replaces grid) */}
            <VisionCategories services={services} />
          </section>
        </div>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="skills-container">
            <div className="skills-content">
              {/* Text Section */}
              <div className="skill">
                <div>
                  <img src="https://innovationatwork.ieee.org/wp-content/uploads/2019/11/bigstock-Skill-Levels-Knob-Button-Incr-318203551_1024X684-768x513.png"></img>
                </div>
                <div className="skills-text">
                  <h2 className="vision-main-title">
                    OUR <span className="vision-highlight">SKILLS</span>
                  </h2>
                  <div className="vision-divider"></div>
                  <h3
                    className="skills-subtitle"
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    We are master in Machine learning and{" "}
                    <span className="highlight-ai">AI</span>
                  </h3>
                  <p
                    className="skills-description"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    At BROADER AI, we excel in delivering cutting-edge solutions
                    across Machine Learning, Artificial Intelligence, Data
                    Science, and Data Analytics. Our team of experts brings
                    together a deep understanding of AI technologies and
                    data-driven methodologies to transform your business.
                  </p>
                </div>
              </div>
              {/* Skills Cards */}
              <div className="skill-cards">
                <div className="skills-cards">
                  <div
                    className="skill-card skill-card-left"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">1</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">Machine Learning</h4>
                      </div>
                      <p className="skill-description">
                        Building intelligent systems that learn and adapt from
                        data to enhance decision-making and predictions. Our ML
                        solutions drive automation and provide actionable
                        insights for complex business challenges.
                      </p>
                    </div>
                  </div>

                  <div
                    className="skill-card skill-card-right"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">2</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">Artificial Intelligence</h4>
                      </div>
                      <p className="skill-description">
                        Crafting advanced AI solutions including Natural
                        Language Processing, Computer Vision, and Deep Learning
                        to solve complex real-world problems and transform
                        business operations.
                      </p>
                    </div>
                  </div>

                  <div
                    className="skill-card skill-card-left"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">3</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">Data Science</h4>
                      </div>
                      <p className="skill-description">
                        Driving business growth by turning raw data into
                        meaningful insights through Predictive Analytics,
                        Descriptive Analytics, and Diagnostic Analytics
                        methodologies.
                      </p>
                    </div>
                  </div>

                  <div
                    className="skill-card skill-card-right"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">4</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">
                          Automation & Optimization
                        </h4>
                      </div>
                      <p className="skill-description">
                        Implementing intelligent systems that automate
                        processes, optimize performance, and improve efficiency
                        across various business operations and workflows.
                      </p>
                    </div>
                  </div>

                  <div
                    className="skill-card skill-card-left"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">5</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">DevOps Services</h4>
                      </div>
                      <p className="skill-description">
                        Streamlining development and deployment processes with
                        automation, continuous integration, and reliable
                        infrastructure management for scalable solutions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="skill-card skill-card-right"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <div className="skill-number">6</div>
                    <div className="skill-card-content">
                      <div className="skill-header">
                        <h4 className="skill-title">Data Analytics</h4>
                      </div>
                      <p className="skill-description">
                        Transforming complex datasets into actionable business
                        insights through advanced analytics, visualization, and
                        reporting solutions that drive strategic decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why chhose */}
        <section
          ref={whyChooseRef}
          className="ai-why-choose-section"
          id="why-choose"
        >
          <div className="ai-particles"></div>
          <div className="ai-grid-bg"></div>

          <div className="ai-container">
            <div className="ai-header">
              <div>
                <img src="./src/assets/1.png" className="ai-image"></img>
              </div>

              <h2 className="ai-title">
                Why <span className="ai-highlight-choose">Choose</span>{" "}
                <span className="ai-highlight-broader">BROADERAI</span>?
              </h2>
              <p className="ai-description">
                At BROADERAI IT Solution, we harness cutting-edge artificial
                intelligence to transform your vision into revolutionary
                results. Experience the future of technology with our advanced
                AI solutions.
              </p>
            </div>

            <div className="ai-cards-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (whyChooseCardsRef.current[index] = el)}
                  className="ai-card"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <div className="ai-card-inner">
                    <div
                      className="ai-card-glow"
                      style={{ background: feature.gradient }}
                    ></div>
                    <div className="ai-card-content">
                      <div className="ai-card-image">
                        <img src={feature.image} alt={feature.title} />
                        <div className="ai-image-overlay"></div>
                      </div>
                      <div className="ai-card-info">
                        <h3 className="ai-card-title">{feature.title}</h3>
                        <div className="ai-card-tech-lines">
                          <div className="tech-line"></div>
                          <div className="tech-line"></div>
                          <div className="tech-line"></div>
                        </div>
                      </div>
                    </div>
                    <div className="ai-card-border"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* how */}

        <section
          ref={howsectionRef}
          className="ai-work-flow-section"
          id="how-we-work"
        >
          <div className="flow-background">
            <div className="neural-particles"></div>
            <div className="connection-lines"></div>
          </div>

          <div className="work-flow-container">
            <div className="work-flow-header">
              <h2 className="work-flow-title">
                How We <span className="highlight-work">Work</span>
              </h2>
              <p className="work-flow-description">
                We make it easy to get beneficial custom AI-driven solutions
                through our revolutionary quantum-enhanced development process.
              </p>
            </div>

            <div className="process-flow-timeline">
              <div className="timeline-connector"></div>

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (howstepsRef.current[index] = el)}
                  className={`process-step ${
                    index % 2 === 0 ? "step-left" : "step-right"
                  }`}
                  style={{
                    "--step-color": step.color,
                    "--step-gradient": step.gradient,
                  }}
                >
                  <div className="step-connector">
                    <div className="connector-dot"></div>
                    <div className="connector-pulse"></div>
                  </div>

                  <div className="step-content">
                    <div className="step-number-circle">
                      <span className="step-number">{step.number}</span>
                      <div className="number-ring"></div>
                      <div className="number-glow"></div>
                    </div>

                    <div className="step-info">
                      <div className="step-icon">
                        <span className="icon-symbol">{step.icon}</span>
                        <div className="icon-aura"></div>
                      </div>

                      <div className="step-text">
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                      </div>
                    </div>

                    <div className="step-flow-arrow">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14m-7-7l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="step-energy-field"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

function VisionCategories({ services }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const positions = ["left2", "left1", "front", "right1", "right2"];

  const renderCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const itemIndex = (currentIndex + i + services.length) % services.length;
      const service = services[itemIndex];
      const IconComponent = service.icon;
      cards.push(
        <div
          key={`${service.name}-${i}`}
          className={`vision-carousel-card ${positions[i + 2]}`}
        >
          <div className="vision-carousel-icon">
            <IconComponent size={48} color="#ffffffff" />
          </div>
          <span className="vision-carousel-text">{service.name}</span>
        </div>
      );
    }
    return cards;
  };

  return (
    <div
      className="vision-carousel-section"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="vision-carousel-container">
        <button
          className="vision-arrow left"
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + services.length) % services.length
            )
          }
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="vision-carousel">{renderCards()}</div>
        <button
          className="vision-arrow right"
          onClick={() => setCurrentIndex((currentIndex + 1) % services.length)}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function VisionTypingDescription() {
  const fullText =
    "BROADER AI combines creativity, technical competence, and process-driven development to produce breakthrough products for our clients. We provide a variety of artificial intelligence and machine learning services, employing machine intelligence to capture untapped regions of business models.";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="vision-typing-description">
      {displayed}
      {!done && <span className="vision-typing-caret">█</span>}
    </p>
  );
}
