const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'feedback_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Route for submitting feedback
app.post('/submit-feedback', (req, res) => {
  const { email, review } = req.body;
  const sql = 'INSERT INTO feedback (email, review) VALUES (?, ?)';
  db.query(sql, [email, review], (err, result) => {
    if (err) throw err;
    res.send('Feedback submitted successfully');
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
