require("dotenv").config();

const express = require("express");
const path = require("path");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

const app = express();
const server = http.Server(app);
const PORT = process.env.PORT || 5000;

// -------------------- Security & Limits -------------------- //
app.use(helmet());

const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 5,               // max 5 requests per 10 seconds
  message: "Too many requests, please try again later",
});
app.use(limiter);

const allowedOrigins = [
  "http://localhost:5173",      // for local frontend
  "https://visualstech.in"      // your production frontend
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow requests like Postman or curl
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve sitemap.xml before React routes
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});



// ✅ Serve robots.txt from backend folder
app.get("/robots.txt", (req, res) => {
  const filePath = path.join(__dirname, "robots.txt");
  res.type("text/plain");
  res.sendFile(filePath);
});


// -------------------- Email API -------------------- //
app.post("/api/send_mail", async (req, res) => {
  const { name, email, message, phone, subject } = req.body;
  if (!name || !email || !message || !subject || !phone) {
    return res.status(400).json({ success: false, message: "All fields are required." });
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
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// -------------------- STATIC FRONTEND --------------------
// Serve static frontend AFTER API routes
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// -------------------- 404 for invalid API -------------------- //
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

// -------------------- Start Server -------------------- //
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
