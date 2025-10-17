import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Course from "./pages/Course";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Term from "./pages/TermsAndConditions";
import Privacy from "./pages/PrivacyPolicy";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

import Python from "./pages/Courses/Python";
import Machine from "./pages/Courses/Machine";
import Science from "./pages/Courses/Science";
import Computer from "./pages/Courses/Computer.jsx";
import Language from "./pages/Courses/Language";
import DevOps from "./pages/Courses/DevOps.jsx";
import CloudComputing from "./pages/Courses/CloudComputing.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { LazyMotion, domAnimation } from "framer-motion";
import { AdminProvider, useAdmin } from "./contexts/AdminContext";

function App() {
  const location = useLocation(); // 👈 gives current path

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      disable: "mobile",
      throttleDelay: 99,
    });
  }, []);

  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAdmin();
    return isAuthenticated ? children : <Navigate to="/admin" replace />;
  };

  const AuthRoute = ({ children }) => {
    const { isAuthenticated } = useAdmin();
    return !isAuthenticated ? (
      children
    ) : (
      <Navigate to="/admin/dashboard" replace />
    );
  };

  // 👇 define routes where you DON'T want Navbar/Footer
  const hideLayout =
    location.pathname.startsWith("/admin");

  return (
    <LazyMotion features={domAnimation}>
      <AdminProvider>
        <div className="app">
          {/* 👇 Only show Navbar/Footer if not on admin pages */}
          {!hideLayout && <Navbar />}

          <main className="main-content">
            <Routes>
              {/* Admin Routes */}
              <Route
                path="/admin"
                element={
                  <AuthRoute>
                    <AdminLogin />
                  </AuthRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Frontend Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/course" element={<Course />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/termsandconditions" element={<Term />} />
              <Route path="/PrivacyPolicy" element={<Privacy />} />

              {/* Courses */}
              <Route path="/courses/python" element={<Python />} />
              <Route path="/courses/machine" element={<Machine />} />
              <Route path="/courses/science" element={<Science />} />
              <Route path="/courses/language" element={<Language />} />
              <Route path="/courses/computer" element={<Computer />} />
              <Route path="/courses/devops" element={<DevOps />} />
              <Route
                path="/courses/cloudcomputing"
                element={<CloudComputing />}
              />

              {/* Redirect unknown routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* 👇 Only show Footer if not on admin pages */}
          {!hideLayout && <Footer />}
        </div>
      </AdminProvider>
    </LazyMotion>
  );
}

export default App;
