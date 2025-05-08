const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishit@123",
  database: "student_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Get all students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add student
app.post("/students", (req, res) => {
  const s = req.body;
  const sql =
    "INSERT INTO students (name, email, course, address, mobile, dob) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [s.name, s.email, s.course, s.address, s.mobile, s.dob],
    (err) => {
      if (err) throw err;
      res.send("Student added");
    }
  );
});

// Delete student
app.delete("/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.send("Student deleted");
  });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
