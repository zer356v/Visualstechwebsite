require("dotenv").config();

const express = require("express");
const path = require("path");
const http = require("http");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const nodeMailer = require("nodemailer");

const app = express();
const server = http.Server(app);
const PORT = process.env.PORT || 5000;

// -------------------- Security & Limits -------------------- //
app.use(helmet());

// Rate limiter (10 seconds window, 20 requests max)
const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 20,
  message: "Too many requests, please try again later",
});
app.use(limiter);

// -------------------- CORS -------------------- //
const allowedOrigins = [
  "http://localhost:5173",    // local dev
  "https://visualstech.in"    // production frontend
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  if (req.method === "OPTIONS") return res.sendStatus(200); // handle preflight
  next();
});

// -------------------- Body Parser -------------------- //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------- Email API -------------------- //
app.post("/api/send_mail", async (req, res) => {
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
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// -------------------- Serve Static Frontend -------------------- //
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// Serve sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

// Serve robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.sendFile(path.join(__dirname, "robots.txt"));
});

// SPA fallback (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// -------------------- 404 Handler (API only) -------------------- //
app.use("/api/*", (req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

// -------------------- Start Server -------------------- //
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
