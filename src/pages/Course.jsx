import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  BookOpen,
  Play,
  Code,
  Brain,
  BarChart3,
  Award,
  Users,
  Clock,
} from "lucide-react";
import "../styles/Course.css";



const CoursePage = () => {

   const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const courseData = [
    {
      id: "python-programming",
      title: "Python Programming",
      link: "/courses/python",
      discount: "40%",
      discountText: "OFF",
      rating: 4.9,
      reviews: 270,
      description: "Learn Python: the complete python programming course",
      fullDescription:
        "Learn A-Z everything about python From the basic to advanced",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Code,
      gradient: "from-green-500 to-emerald-600",
      duration: "12 weeks",
      students: "15,420",
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      link: "/courses/machine",
      discount: "30%",
      discountText: "OFF",
      rating: 4.8,
      reviews: 250,
      description: "Learn Machine Learning: the complete ML course",
      fullDescription:
        "Learn A-Z everything about ML From the basic to advanced",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-600",
      duration: "16 weeks",
      students: "12,890",
    },
    {
      id: "data-science",
      title: "Data Science",
      link: "/courses/science",
      discount: "50%",
      discountText: "OFF",
      rating: 5.0,
      reviews: 320,
      description: "Learn Data Science: the complete Data Science course",
      fullDescription:
        "Learn A-Z everything about Data Science From the basic to advanced",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      duration: "20 weeks",
      students: "18,340",
    },
    {
      id: "natural-language-processing",
      title: "Natural Language Processing",
      link: "/courses/language",
      discount: "50%",
      discountText: "OFF",
      rating: 5.0,
      reviews: 320,
      description: "Learn Natural Language Processing: the complete NLP course",
      fullDescription:
        "Learn A-Z everything about NLP From the basic to advanced",
      image:
        "https://fastdatascience.com/images/12-Fastdatascience-Blog-Natural-Language-Processing.svg",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      duration: "20 weeks",
      students: "18,340",
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      link: "/courses/computer",
      discount: "50%",
      discountText: "OFF",
      rating: 5.0,
      reviews: 320,
      description: "Learn Computer Vision: the complete Computer Vision course",
      fullDescription:
        "Learn A-Z everything about Computer Vision From the basic to advanced",
      image:
        "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/cc5f25f-adb8-6582-e857-b1e6d164f5_Blog-Banner-Computer-Vision.webp",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      duration: "20 weeks",
      students: "18,340",
    },
    {
      id: "DevOps",
      title: "DevOps",
      link: "/courses/devops",
      discount: "50%",
      discountText: "OFF",
      rating: 5.0,
      reviews: 320,
      description: "Learn DevOps: the complete DevOps course",
      fullDescription:
        "Learn A-Z everything about DevOps From the basic to advanced",
      image:
        "https://media.istockphoto.com/id/1404020923/vector/devops-banner-concept-has-8-steps-to-analyze-such-as-plan-code-build-operate-deploy-test.jpg?s=612x612&w=0&k=20&c=KJ90yfWIP3lELbmiTS2Furjv_IOSHrTDYqz-BWhkerU=",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      duration: "20 weeks",
      students: "18,340",
    },
    {
      id: "Cloud Computing",
      title: "Cloud Computing",
      link: "/courses/cloudcomputing",
      discount: "50%",
      discountText: "OFF",
      rating: 5.0,
      reviews: 320,
      description: "Learn Cloud Computing: the complete Cloud Computing course",
      fullDescription:
        "Learn A-Z everything about Cloud Computing From the basic to advanced",
      image:
        "https://media.istockphoto.com/id/1399936043/photo/data-transfer-cloud-computing-technology-concept-there-is-a-large-prominent-cloud-icon-in-the.jpg?s=612x612&w=0&k=20&c=pSrIUkBc6Yf1gT7G0SnjQL4T-PjbC6KmFZavud7To2I=",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-600",
      duration: "20 weeks",
      students: "18,340",
    },
  ];

  return (
    <div className="course-page">
  {/* Courses Section */}
  <section className="course-section">
    <div className="course-header">
      <h2 className="course-main-title">Explore Our Creative Courses</h2>
      <p className="course-description">
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout...
      </p>
    </div>

    <div className="course-grid">
      {courseData.map((course, index) => (
        <motion.div
          key={course.id}
          className="course-card"
          initial={{ opacity: 0, y: 50 }}       // start hidden + below
          whileInView={{ opacity: 1, y: 0 }}   // fade in + slide up
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Course Image */}
          <div className="course-image-container">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-discount-badge">
              <span className="course-discount-percent">
                {course.discount}
              </span>
              <span className="course-discount-text">
                {course.discountText}
              </span>
            </div>
            <div className="course-play-overlay">
              <Play className="course-play-icon" size={24} />
            </div>
          </div>

          {/* Course Content */}
          <div className="course-content">
            <div className="course-tag-container">
              <span
                className={`course-tag bg-gradient-to-r ${course.gradient}`}
              >
                {course.title}
              </span>

              <div className="course-rating">
                <div className="course-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="course-star filled" size={14} />
                  ))}
                </div>
                <span className="course-rating-text">
                  ({course.reviews})
                </span>
              </div>
            </div>

            <h3 className="course-title">{course.description}</h3>
            <p className="course-full-description">
              {course.fullDescription}
            </p>

            <div className="course-details">
              <div className="course-detail">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="course-detail">
                <Users size={16} />
                <span>{course.students} students</span>
              </div>
            </div>
            <button
              className="course-syllabus-button"
              onClick={() => navigate(course.link)}
            >
              <BookOpen size={16} />
              View Syllabus
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
</div>
  );
};

export default CoursePage;
