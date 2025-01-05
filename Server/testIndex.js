const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection configuration
// const db = mysql.createConnection({
//   host: "sql12.freemysqlhosting.net",
//   user: "sql12754864",
//   password: "Mj52PVM8SX",
//   database: "sql12754864",
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

// Endpoint to register a new user
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, hashedPassword], (err, results) => {
    if (err) {
      return res.status(500).send("Error registering user");
    }
    res.status(201).send("User registered successfully");
  });
});

// Endpoint to log in a user and return a token
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send("Invalid email or password");
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  });
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, "your_jwt_secret", (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

// Endpoint to access the dashboard, protected by token authentication
app.get("/dashboard", authenticateToken, (req, res) => {
  const query = "SELECT name, email FROM users WHERE id = ?";
  db.query(query, [req.user.userId], (err, results) => {
    if (err) {
      return res.status(500).send("Error fetching user data");
    }
    if (results.length === 0) {
      return res.status(404).send("User not found");
    }
    const user = results[0];
    res.json(user);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
