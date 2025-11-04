const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Existing routes
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/applications", require("./routes/applications"));

// ✅ NEW route for contact info
app.use("/api/contact-info", require("./routes/contactInfo"));


// ✅ MongoDB connection
mongoose.connect("mongodb://localhost:27017/adminPortal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
