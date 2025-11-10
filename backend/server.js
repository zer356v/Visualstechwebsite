require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// ---------------- SECURITY ----------------
app.use(helmet());

// ---------------- RATE LIMIT ----------------
app.use(rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50,
  message: "Too many requests, please try again later."
}));

// ---------------- CORS CONFIG ----------------
const WHITELIST = new Set([
  "https://visualstech.in",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5000",
  "http://127.0.0.1:5000"
]);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || WHITELIST.has(origin)) return callback(null, true);
    return callback(new Error("CORS: Origin not allowed"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

// Apply CORS early
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", (req, res) => {
  const origin = req.headers.origin;
  if (WHITELIST.has(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  }
  return res.sendStatus(204);
});

// Always attach headers for valid origins
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && WHITELIST.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  next();
});

// ---------------- PARSING ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---------------- STATIC FRONTEND ----------------
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// ---------------- SITEMAP & ROBOTS ----------------
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.sendFile(path.join(__dirname, "robots.txt"));
});

// ---------------- NODEMAILER EMAIL SETUP ----------------
app.post("/api/send_mail", async (req, res) => {
  console.log("📨 POST /api/send_mail from:", req.headers.origin);

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  // Configure Nodemailer transporter
  const transporter = nodeMailer.createTransport({
    service: "gmail", // or change to 'Zoho', 'Outlook', or custom SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `📩 ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully via Nodemailer");
    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("❌ Nodemailer Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: err.message
    });
  }
});

// ---------------- 404 HANDLER ----------------
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
