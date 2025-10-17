import { X } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/InquiryModal.css";

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    contactNumber: "",
    education: "",
    collegeName: "",
    preferredTraining: [],
  });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚡ Send email using EmailJS
    emailjs
      .send(
        "service_o5luxie", // 🔑 Replace with your Service ID
        "template_rk1h4sv", // 🔑 Replace with your Template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          gender: formData.gender,
          contactNumber: formData.contactNumber,
          education: formData.education,
          collegeName: formData.collegeName,
          preferredTraining: formData.preferredTraining.join(", "),
        },
        "wozxL2Vy-VMx722W5" // 🔑 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          alert("Your inquiry has been submitted successfully!");
          setFormData({
            fullName: "",
            email: "",
            gender: "",
            contactNumber: "",
            education: "",
            collegeName: "",
            preferredTraining: [],
          });
          onClose();
        },
        (error) => {
          console.error("❌ Failed to send email:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      preferredTraining: prev.preferredTraining.includes(value)
        ? prev.preferredTraining.filter((item) => item !== value)
        : [...prev.preferredTraining, value],
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>

        <div className="modal-headerr">
          <h2 className="modal-title">
            Get in <span className="text-accent">touch</span>
          </h2>
          <p className="modal-subtitle">
            BROADERAI combines creativity, technical competence, and
            process-driven development to produce breakthrough products for our
            clients.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-groupp">
              <label className="form-label">
                Full Name <span className="text-required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-input"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="form-groupp">
              <label className="form-label">
                Email <span className="text-required">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-groupp">
              <label className="form-label">
                Gender <span className="text-required">*</span>
              </label>
              <select
                className="form-input form-select"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                required
              >
                <option value="">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-groupp">
              <label className="form-label">
                Contact Number <span className="text-required">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your number"
                className="form-input"
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
                required
              />
            </div>

            <div className="form-groupp">
              <label className="form-label">Education</label>
              <input
                type="text"
                placeholder="Enter your education"
                className="form-input"
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
              />
            </div>

            <div className="form-groupp">
              <label className="form-label">College Name</label>
              <input
                type="text"
                placeholder="Enter your college name"
                className="form-input"
                value={formData.collegeName}
                onChange={(e) =>
                  setFormData({ ...formData, collegeName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group-full">
            <label className="form-label">
              Preferred Training and Internship{" "}
              <span className="text-required">*</span>
            </label>
            <div className="checkbox-grid">
              {[
                { id: "python", label: "Python Programming" },
                { id: "ml", label: "Machine Learning" },
                { id: "ds", label: "Data Science" },
                { id: "cv", label: "Computer Vision" },
                { id: "nlp", label: "Natural Language Processing" },
                { id: "devops", label: "DevOps" },
                { id: "cloud", label: "Cloud Computing" },
                { id: "other", label: "Other" },
              ].map((item) => (
                <label key={item.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={formData.preferredTraining.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <span className="checkbox-text">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
