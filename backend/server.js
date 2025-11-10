// server.js (drop-in)
require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const nodeMailer = require("nodemailer");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 5000;

// Security
app.use(helmet());

// Rate limiter
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: "Too many requests, please try again later"
}));

// Whitelist of allowed origins (prod + common dev)
const WHITELIST = new Set([
  "https://visualstech.in",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
]);

// CORS middleware with dynamic origin handling
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (curl, server-to-server)
    if (!origin) return callback(null, true);

    if (WHITELIST.has(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS: origin not allowed"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

// Important: CORS applied early
app.use(cors(corsOptions));

// Explicit preflight handler so we always return proper headers
app.options("*", (req, res) => {
  const origin = req.headers.origin;
  if (WHITELIST.has(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    return res.sendStatus(204);
  }
  // if origin not allowed, still respond 204 without CORS headers (browser will block)
  return res.sendStatus(204);
});

// Extra safety: set dynamic headers for non-preflight responses
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && WHITELIST.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  next();
});

// -------------------- Body Parser -------------------- //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static frontend - keep AFTER CORS middleware
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// sitemap/robots
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.sendFile(path.join(__dirname, "robots.txt"));
});

// Email endpoint
app.post("/api/send_mail", async (req, res) => {
  // Log origin and body for debugging (remove in prod or reduce verbosity)
  console.log("POST /api/send_mail from origin:", req.headers.origin);

  const { name, email, message, phone, subject } = req.body;

  if (!name || !email || !message || !subject || !phone) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Email Error:", err);
    return res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// 404 fallback (keep last)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
