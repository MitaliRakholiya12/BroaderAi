import { useEffect, useState } from "react";
import {
  Brain,
  Cloud,
  Shield,
  Code2,
  Users,
  ChevronLeft,
  ChevronRight,
  Database,
  Smartphone,
  Globe,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import "../styles/Services.css";

function Services() {
  const [solutionsLoaded, setSolutionsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const solutionsSection = document.querySelector(
        ".service-tech-solutions-area"
      );
      if (solutionsSection) {
        const rect = solutionsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setSolutionsLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCount = 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = Math.max(0, offerings.length - visibleCards);
      const next = prev + scrollCount;
      return next > maxSlide ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = Math.max(0, offerings.length - visibleCards);
      const next = prev - scrollCount;
      return next < 0 ? maxSlide : next;
    });
  };

  const offerings = [
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: <Brain className="service-icon-large" />,
      features: [
        {
          title: "Data Analysis & Modeling",
          description:
            "Building predictive models and analytical tools to leverage data insights.",
        },
        {
          title: "Natural Language Processing",
          description:
            "Text analysis, sentiment analysis, and intelligent chatbot development.",
        },
        {
          title: "Computer Vision",
          description:
            "Advanced image and video analysis for various industry applications.",
        },
      ],
      color: "emerald-teal",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      icon: <Cloud className="service-icon-large" />,
      features: [
        {
          title: "Cloud Integration",
          description:
            "Seamless migration and integration with leading cloud platforms.",
        },
        {
          title: "DevOps Services",
          description:
            "CI/CD pipelines, automated deployments, and infrastructure setup.",
        },
        {
          title: "Managed Services",
          description:
            "Continuous monitoring, backup, and maintenance of cloud infrastructure.",
        },
      ],
      color: "blue-cyan",
    },
    {
      id: 3,
      title: "Consulting Services",
      icon: <Users className="service-icon-large" />,
      features: [
        {
          title: "IT Consulting",
          description:
            "Strategic guidance on technology, architecture, and scalability.",
        },
        {
          title: "Data Strategy",
          description:
            "Comprehensive data collection, storage, and analytics strategies.",
        },
        {
          title: "Digital Transformation",
          description:
            "Helping businesses adopt cutting-edge technologies effectively.",
        },
      ],
      color: "emerald-green",
    },
    {
      id: 4,
      title: "Cybersecurity",
      icon: <Shield className="service-icon-large" />,
      features: [
        {
          title: "Vulnerability Assessment",
          description:
            "Comprehensive identification and remediation of security risks.",
        },
        {
          title: "Penetration Testing",
          description:
            "Simulated attacks to identify and address security weaknesses.",
        },
        {
          title: "Security Consulting",
          description:
            "Best practices for data protection and compliance management.",
        },
      ],
      color: "blue-indigo",
    },
    {
      id: 5,
      title: "Software Development",
      icon: <Code2 className="service-icon-large" />,
      features: [
        {
          title: "Web Development",
          description:
            "Full-stack development with modern frameworks and technologies.",
        },
        {
          title: "Mobile Applications",
          description: "Cross-platform apps using React Native and Flutter.",
        },
        {
          title: "Custom Solutions",
          description:
            "Tailored software solutions to meet specific business needs.",
        },
      ],
      color: "teal-emerald",
    },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "AI Recruitment Platform",
      category: "Artificial Intelligence",
      description:
        "Advanced AI-powered talent acquisition system with intelligent matching algorithms and automated screening processes.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Modern fashion e-commerce solution with real-time inventory management and seamless checkout experience.",
      image:
        "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 3,
      title: "Recipe Management System",
      category: "Full Stack Development",
      description:
        "Comprehensive food platform with recipe database, meal planning, and nutritional analysis features.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["Vue.js", "Django", "Redis", "AWS"],
    },
    {
      id: 4,
      title: "Financial Services Platform",
      category: "Fintech",
      description:
        "Secure financial platform with advanced loan management, credit scoring, and payment processing.",
      image:
        "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    },
    {
      id: 5,
      title: "Payment Gateway",
      category: "Fintech Solution",
      description:
        "Enterprise-grade payment processing system with multi-currency support and fraud detection.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["Node.js", "Stripe API", "Redis", "Kubernetes"],
    },
    {
      id: 6,
      title: "Luxury E-Commerce",
      category: "Premium Marketplace",
      description:
        "High-end jewelry platform with 3D product visualization and virtual try-on features.",
      image:
        "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1200",
      technologies: ["React", "Three.js", "GraphQL", "AWS"],
    },
  ];

  return (
    <>
     <div className="service-container">
      <section
        className={`service-tech-solutions-area ${
          solutionsLoaded ? "service-active" : ""
        }`}
      >
        <div className="service-tech-wrapper">
          <div className="service-tech-intro">
            <h2 className="service-tech-main-title">
              OUR <span className="service-gradient-text">Services</span>
            </h2>
            <p className="service-section-description">
              From AI-powered applications to secure cloud infrastructure, we
              deliver excellence across all domains
            </p>
          </div>

          <div className="service-solutions-layout">
            <div className="service-solution-item service-frontend-solution">
              <div className="service-solution-visual">
                <img
                  src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Frontend Development"
                  className="service-visual-image"
                />
                <div className="service-visual-glow"></div>
              </div>
              <div className="service-solution-details">
                <div className="service-solution-header">
                  <div className="service-solution-icon-wrapper service-icon-emerald-teal">
                    <Globe className="service-icon-medium" />
                  </div>
                  <h3 className="service-solution-heading">
                    Frontend{" "}
                    <span className="service-highlight">Development</span>
                  </h3>
                </div>
                <p className="service-solution-summary">
                  Our frontend development services are crafted to create
                  visually stunning, responsive, and user-friendly websites and
                  applications. With expertise in HTML, CSS, JavaScript, and
                  React, our team ensures a seamless user experience across all
                  devices.
                </p>
                <p className="service-solution-summary">
                  We leverage modern JavaScript frameworks and advanced CSS
                  techniques to deliver fast-loading, interactive, and
                  accessible interfaces. By focusing on scalable and efficient
                  code, we help businesses provide an optimal experience for
                  their users while maintaining flexibility for future growth.
                </p>
                <div className="service-solution-features-list">
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-emerald" />
                    <span>
                      Modern JavaScript frameworks (React, Vue, Angular)
                    </span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-emerald" />
                    <span>Responsive and mobile-first design</span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-emerald" />
                    <span>Performance optimization and accessibility</span>
                  </div>
                </div>
                <div className="service-solution-stack">
                  <span className="service-stack-item service-html">HTML5</span>
                  <span className="service-stack-item service-css">CSS3</span>
                  <span className="service-stack-item service-js">
                    JavaScript
                  </span>
                  <span className="service-stack-item service-react">
                    React
                  </span>
                </div>
              </div>
            </div>

            <div className="service-solution-item service-backend-solution">
              <div className="service-solution-details">
                <div className="service-solution-header">
                  <div className="service-solution-icon-wrapper service-icon-blue-cyan">
                    <Database className="service-icon-medium" />
                  </div>
                  <h3 className="service-solution-heading">
                    Backend{" "}
                    <span className="service-highlight">Development</span>
                  </h3>
                </div>
                <p className="service-solution-summary">
                  Our backend development services offer robust, secure, and
                  scalable solutions for businesses of all sizes. Utilizing
                  Python frameworks like Django and Flask, we create efficient
                  architectures that power complex web applications with ease.
                </p>
                <p className="service-solution-summary">
                  We specialize in REST API development, enabling seamless data
                  exchange between the frontend and backend for dynamic,
                  data-driven applications. With a focus on performance,
                  reliability, and security, our backend solutions are built to
                  handle high traffic and adapt as your business grows.
                </p>
                <div className="service-solution-features-list">
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-blue" />
                    <span>RESTful and GraphQL API development</span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-blue" />
                    <span>Database design and optimization</span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-blue" />
                    <span>Microservices architecture</span>
                  </div>
                </div>
                <div className="service-solution-stack">
                  <span className="service-stack-item service-python">
                    Python
                  </span>
                  <span className="service-stack-item service-django">
                    Node.js
                  </span>
                  <span className="service-stack-item service-api">
                    REST API
                  </span>
                  <span className="service-stack-item service-db">
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div className="service-solution-visual">
                <img
                  src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Backend Development"
                  className="service-visual-image"
                />
                <div className="service-visual-glow"></div>
              </div>
            </div>

            <div className="service-solution-item service-mobile-solution">
              <div className="service-solution-visual">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UI/UX Design"
                  className="service-visual-image"
                />
                <div className="service-visual-glow"></div>
              </div>
              <div className="service-solution-details">
                <div className="service-solution-header">
                  <div className="service-solution-icon-wrapper service-icon-teal-emerald">
                    <Smartphone className="service-icon-medium" />
                  </div>
                  <h3 className="service-solution-heading">
                    UI/UX <span className="service-highlight">Design</span>
                  </h3>
                </div>
                <p className="service-solution-summary">
                  Our UI/UX design services create intuitive and visually
                  appealing interfaces tailored to your brand and user needs.
                  Using tools like Figma and Photoshop, we bring ideas to life
                  with precision, ensuring an engaging and seamless user
                  experience across platforms.
                </p>
                <p className="service-solution-summary">
                  We prioritize user-centered design principles, crafting
                  layouts and interactions that simplify user journeys and
                  enhance satisfaction. From wireframing and prototyping to
                  final design, our team ensures every element aligns with your
                  business goals while maintaining a cohesive, modern aesthetic.
                </p>
                <div className="service-solution-features-list">
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-teal" />
                    <span>User research and persona development</span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-teal" />
                    <span>Wireframing and interactive prototypes</span>
                  </div>
                  <div className="service-feature-check">
                    <CheckCircle2 className="service-icon-small service-icon-teal" />
                    <span>Design systems and component libraries</span>
                  </div>
                </div>
                <div className="service-solution-stack">
                  <span className="service-stack-item service-react">
                    Figma
                  </span>
                  <span className="service-stack-item service-ios">
                    Adobe XD
                  </span>
                  <span className="service-stack-item service-android">
                    Sketch
                  </span>
                  <span className="service-stack-item service-native">
                    Framer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-offerings-carousel-container">
            <button
              className="service-carousel-nav service-carousel-nav-prev"
              onClick={prevSlide}
              aria-label="Previous services"
            >
              <ChevronLeft className="service-nav-icon" />
            </button>

            <div className="service-offerings-carousel">
              <div
                className="service-offerings-grid"
                style={{
                  transform: `translateX(-${
                    (currentSlide * 100) / visibleCards
                  }%)`,
                }}
              >
                {offerings.map((offering, index) => (
                  <div
                    key={offering.id}
                    className={`service-offering-card ${
                      activeCard === index ? "service-active" : ""
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    <div className="service-offering-card-inner">
                      <div className="service-offering-header">
                        <div
                          className={`service-offering-icon-wrapper service-icon-${offering.color}`}
                        >
                          {offering.icon}
                        </div>
                        <h3 className="service-offering-title">
                          {offering.title}
                        </h3>
                      </div>
                      <div className="service-offering-features">
                        {offering.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="service-feature-item"
                          >
                            <div className="service-feature-bullet"></div>
                            <div className="service-feature-content">
                              <h4 className="service-feature-title">
                                {feature.title}
                              </h4>
                              <p className="service-feature-description">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="service-carousel-nav service-carousel-nav-next"
              onClick={nextSlide}
              aria-label="Next services"
            >
              <ChevronRight className="service-nav-icon" />
            </button>
          </div>
        </div>
      </section>
  

      <section className="service-portfolio-showcase">
        <header className="service-portfolio-header">
          <h2 className="service-section-title">
            Featured <span className="service-accent-text">Projects</span>
          </h2>
          <p className="service-section-description">
            Explore our latest work and see how we've helped businesses achieve
            their digital goals
          </p>
        </header>

        <div className="service-portfolio-carousel-container">
          <div className="service-portfolio-carousel">
            <div className="service-portfolio-grid">
              {portfolioProjects.map((project) => (
                <div key={project.id} className="service-portfolio-card">
                  <div className="service-portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="service-portfolio-overlay">
                      <div className="service-overlay-content">
                        <h4 className="service-overlay-title">
                          {project.title}
                        </h4>
                        <p className="service-overlay-description">
                          {project.description}
                        </p>
                        <div className="service-overlay-technologies">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="service-overlay-tech"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="service-overlay-button">
                          <ExternalLink className="service-icon-small" />
                          <span>View Case Study</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="service-portfolio-info">
                    <h3 className="service-project-title">{project.title}</h3>
                    <p className="service-project-category">
                      {project.category}
                    </p>
                    <div className="service-project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="service-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Services;
