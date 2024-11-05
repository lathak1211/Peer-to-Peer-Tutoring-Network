const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Require and configure dotenv

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: '*', // Allow all origins. For production, specify your frontend URL.
}));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const JWT_SECRET = process.env.JWT_SECRET;

app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [fullName, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.status(200).json({ message: 'User registered successfully!' });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err.message);
  res.status(500).json({ message: 'An internal server error occurred' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
