import React, { useState, useEffect } from "react";
import { FileText, Search, Filter, Download } from "lucide-react";
import "./AppliedJobs.css";

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetchApplications();
  }, []);

  // ✅ Fetch applications from MongoDB backend
  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/applications");
      const data = await res.json();
      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update status
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/applications/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      await fetchApplications(); // refresh table
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  // ✅ Search and Filter
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.job_title?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // ✅ Export CSV
  const exportToCSV = () => {
    const headers = [
      "Sr. No.",
      "Name",
      "Job Position",
      "Email",
      "Contact No.",
      "Status",
      "City",
      "Resume",
      "Applied Date",
      "Message",
    ];

    const rows = filteredApplications.map((app, index) => [
      index + 1,
      `${app.first_name || "-"} ${app.last_name || "-"}`,
      app.job_title || "-",
      app.email || "-",
      app.contact || "-",
      app.status || "-",
      app.city || "-",
      app.resume_url ? `http://localhost:5000/uploads/${app.resume_url}` : "-",
      app.created_at ? new Date(app.created_at).toLocaleDateString() : "-",
      app.message || "-",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (loading) {
    return <div className="admin-loading">Loading applications...</div>;
  }

  return (
    <div className="applied-jobs">
      <div className="applied-jobs-header">
        <div className="search-filter-container">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <Filter size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <button className="btn-export" onClick={exportToCSV}>
          <Download size={18} />
          Export CSV
        </button>
      </div>

      <div className="applications-stats">
        <div className="stat-card">
          <div className="stat-number">{applications.length}</div>
          <div className="stat-label">Total Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {applications.filter((app) => app.status === "pending").length}
          </div>
          <div className="stat-label">Pending Review</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {applications.filter((app) => app.status === "shortlisted").length}
          </div>
          <div className="stat-label">Shortlisted</div>
        </div>
      </div>

      <div className="applications-table-container">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Job Position</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Status</th>
              <th>City</th>
              <th>Resume</th>
              <th>Applied Date</th> {/* NEW */}
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app, i) => (
              <tr key={app._id || i}>
                <td>{i + 1}</td>
                <td>{`${app.first_name || "-"} ${app.last_name || "-"}`}</td>
                <td>{app.job_title || "-"}</td>
                <td>{app.email || "-"}</td>
                <td>{app.contact || "-"}</td>
                <td>
                  <td>
                    <select
                      value={app.status || "pending"}
                      onChange={(e) =>
                        handleStatusChange(app._id.toString(), e.target.value)
                      }
                      className={`status-dropdown ${app.status || "pending"}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </td>
                <td>{app.city || "-"}</td> {/* City */}
                <td>
                  {app.resume_url ? (
                    <a
                      href={`http://localhost:5000/uploads/${app.resume_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={18} /> View
                    </a>
                  ) : (
                    <span className="no-resume">No resume</span>
                  )}
                </td>
                <td>
                  {app.created_at
                    ? new Date(app.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "-"}
                </td>
                <td>{app.message || "-"}</td> {/* Message */}
              </tr>
            ))}
          </tbody>
        </table>

        {filteredApplications.length === 0 && (
          <div className="no-applications">
            <FileText size={48} />
            <p>
              {searchTerm || filterStatus !== "all"
                ? "No applications match your filters"
                : "No applications received yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
