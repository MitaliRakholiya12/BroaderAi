const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  city: { type: String },
  job_title: { type: String, required: true },
  message: { type: String },
  resume_url: { type: String },
  status: { type: String, default: "pending" },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", ApplicationSchema);
