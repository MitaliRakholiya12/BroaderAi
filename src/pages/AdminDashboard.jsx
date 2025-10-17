import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Briefcase, Users, LogOut, Menu } from 'lucide-react';
import JobOpenings from '../components/admin/JobOpenings';
import AppliedJobs from '../components/admin/AppliedJobs';
import '../styles/AdminDashboard.css';
import logo from "../assets/broader-ai_white.png";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, adminEmail } = useAdmin();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // close sidebar on mobile after click
  };

  return (
    <div className="admin-dashboard">
      {/* Hamburger button for mobile */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay for mobile */}
      <div
        className={`mobile-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <img src={logo} alt="BROADER AI" className="admin-sidebar-logo-img" />
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          <button
            className={`admin-nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => handleTabClick('jobs')}
          >
            <Briefcase size={20} />
            <span>Job Opening</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => handleTabClick('applications')}
          >
            <Users size={20} />
            <span>Applied Jobs</span>
          </button>

          <button
            className="admin-nav-item logout"
            onClick={logout}
          >
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-main-header">
          <h1 className="admin-main-title">
            {activeTab === 'jobs' ? 'Job Openings' : 'Applied Job Details'}
          </h1>
          <div className="admin-user-info">
            <span>{adminEmail}</span>
          </div>
        </div>

        <div className="admin-content">
          {activeTab === 'jobs' ? <JobOpenings /> : <AppliedJobs />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
