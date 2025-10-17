import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Save, Briefcase } from "lucide-react";
import "./JobOpenings.css";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    experience: "",
    description: "",
    requirements: "",
    responsibilities: "",
    salary: "",
    perks: "",
    featured: false,
  });

  // Fetch Jobs
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs");
      const data = await res.json();
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      alert("Failed to fetch jobs from server.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Form Input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Add or Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title: formData.title,
      department: formData.department,
      location: formData.location,
      type: formData.type,
      experience: formData.experience,
      description: formData.description,
      requirements: formData.requirements.split("\n").filter(Boolean),
      responsibilities: formData.responsibilities.split("\n").filter(Boolean),
      salary: formData.salary,
      perks: formData.perks.split("\n").filter(Boolean),
      featured: formData.featured,
    };

    try {
      const url = editingJob
        ? `http://localhost:5000/api/jobs/${editingJob._id}`
        : "http://localhost:5000/api/jobs";
      const method = editingJob ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (!res.ok) throw new Error("Failed to save job");

      await fetchJobs();
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Failed to save job. Please try again.");
    }
  };

  // Edit Job
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      description: job.description,
      requirements: job.requirements?.join("\n") || "",
      responsibilities: job.responsibilities?.join("\n") || "",
      salary: job.salary || "",
      perks: job.perks?.join("\n") || "",
      featured: job.featured,
    });
    setShowModal(true);
  };

  // Delete Job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete job");
      await fetchJobs();
    } catch (error) {
      console.error(error);
      alert("Failed to delete job. Please try again.");
    }
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      experience: "",
      description: "",
      requirements: "",
      responsibilities: "",
      salary: "",
      perks: "",
      featured: false,
    });
    setEditingJob(null);
    setShowModal(false);
  };

  if (loading) return <div className="admin-loading">Loading jobs...</div>;

  return (
    <div className="job-openings">
      <div className="job-openings-header">
        <h2>Manage Job Openings</h2>
        <button className="btn-add-job" onClick={() => setShowModal(true)}>
          <Plus size={20} /> Add New Job
        </button>
      </div>

      <div className="jobs-table-container">
        <table className="jobs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Experience</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length ? (
              jobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.title}</td>
                  <td>{job.department}</td>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td>{job.experience}</td>
                  <td>
                    <span
                      className={`badge ${
                        job.featured ? "badge-featured" : "badge-normal"
                      }`}
                    >
                      {job.featured ? "Yes" : "No"}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(job)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(job._id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-jobs">
                  <Briefcase size={48} />
                  <p>No jobs posted yet. Add your first job opening!</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={resetForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingJob ? "Edit Job" : "Add New Job"}</h3>
              <button className="btn-close" onClick={resetForm}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="job-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Department *</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Type *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 2-5 years"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Salary</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g., ₹50,000/month"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>

              <div className="form-group">
                <label>Requirements (one per line)</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label>Responsibilities (one per line)</label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label>Perks (one per line)</label>
                <textarea
                  name="perks"
                  value={formData.perks}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="form-group-checkbox">
                <input
                  type="checkbox"
                  name="featured"
                  id="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <label htmlFor="featured">Featured Job</label>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  <Save size={18} />
                  {editingJob ? "Update Job" : "Create Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobOpenings;
