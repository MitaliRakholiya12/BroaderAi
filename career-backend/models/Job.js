const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  type: String,
  experience: String,
  description: String,
  requirements: [String],
  responsibilities: [String],
  salary: String,
  perks: [String],
  featured: Boolean,
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
