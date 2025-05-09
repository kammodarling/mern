const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishit@123",
  database: "management",
});

// Register API
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query(
    "INSERT INTO login (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword],
    (err) =>
      err
        ? res.status(500).json({ error: err })
        : res.status(201).json({ message: "User registered" })
  );
});

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM login WHERE username = ?",
    [username],
    async (err, results) => {
      if (err || results.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });
      const valid = await bcrypt.compare(password, results[0].password);
      if (!valid) return res.status(403).json({ error: "Wrong password" });

      res.json({ message: "Login successful" });
    }
  );
});

// Get all students (no authentication)
app.get("/api/students", (req, res) => {
  db.query(
    `SELECT student.*, courses.name AS courseName
    FROM student JOIN courses ON student.course_id = courses.id`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// Delete student by ID (no authentication)
app.delete("/api/students/:id", (req, res) => {
  db.query("DELETE FROM student WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Student deleted" });
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
