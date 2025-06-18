require("dotenv").config();

const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const exp = require("constants");

const app = express();
const server = http.createServer(app);
const Port = process.env.Port || 5000
//
// -------------------- MIDDLEWARE --------------------
//

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
  message: "Too many requests, please try again later."
});
app.use(limiter);

// Cors Methods
app.use(cors(
    {
        origin: "*", // Allow all origins, change this in production
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
    }
))

// body parser 
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// -------------------- STATIC FRONTEND --------------------
//

// Serve static frontend files
const frontendPath = path.join(__dirname, "frontend/dist");
app.use(express.static(frontendPath));

// Redirect all requests to index.html (important for React Router!)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});



app.use((req,res)=>{
    res.status(404).json({success:false,message:"End Point not founded"})
})

server.listen(Port,() =>{
    console.log(`Server is running on port ${Port}`);
})