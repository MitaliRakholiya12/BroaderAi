const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema for contact info
const contactInfoSchema = new mongoose.Schema({
  address: String,
  phone: String,
  email: String,
});

// Model name must match your collection: "contactinfos"
const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema, "contactinfos");

// ✅ GET route to fetch contact info
router.get("/", async (req, res) => {
  try {
    const info = await ContactInfo.findOne(); // Fetch first record
    if (!info) {
      return res.status(404).json({ message: "No contact info found" });
    }
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contact info" });
  }
});

// ✅ POST route (optional - add new info)
router.post("/", async (req, res) => {
  try {
    const newInfo = new ContactInfo(req.body);
    await newInfo.save();
    res.status(201).json({ message: "Contact info added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding contact info" });
  }
});

module.exports = router;
