const express = require("express");
const router = express.Router();
const multer = require("multer");
const Application = require("../models/Application");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// POST /apply - submit application
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { first_name, last_name, email, contact, city, job_title, message } = req.body;

    if (!first_name || !last_name || !job_title) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newApplication = new Application({
      first_name,
      last_name,
      email,
      contact,
      city,
      job_title,
      message,
      resume_url: req.file?.filename,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

// GET / - fetch all applications for admin panel
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ created_at: -1 });
    res.json(applications); // send all fields
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Failed to fetch applications", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedApp = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedApp) return res.status(404).json({ message: "Application not found" });
    res.json(updatedApp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
