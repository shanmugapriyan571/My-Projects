

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000; // You can change this port if needed

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "VillanSanu007$123", // Replace with your MySQL password
  database: "bookshop", // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database.");
});

// API endpoint for user signup
app.post("/api/signup", (req, res) => {
  const { userId, email, password } = req.body;

  if (!userId || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = "INSERT INTO users (userId, email, password) VALUES (?, ?, ?)";
  db.query(sql, [userId, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error." });
    }
    res.status(200).json({ message: "User registered successfully." });
  });
});

// Login endpoint
/*app.post("/api/login", (req, res) => {
  const { userId, password } = req.body;

  const query = "SELECT * FROM users WHERE userId = ? AND password = ?";
  console.log("Request received:", userId, password);
  connection.query(query, [userId, password], (error, results) => {
    if (error) {
      res.status(500).json({ success: false, message: "Database error" });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});*/
app.post("/api/login", (req, res) => {
   
  const { userId, password } = req.body;

  const query = "SELECT * FROM users WHERE userId = ? AND password = ?";
  console.log("Request received:", userId, password);

  db.query(query, [userId, password], (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      return res
        .status(200)
        .json({ success: true, message: "Login successful" });
     
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
