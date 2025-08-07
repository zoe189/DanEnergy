require('dotenv').config();

const express = require('express');
const app = express();

// Import routes after app is created
const courseRoutes = require('./routes/courseRoutes');

// Middleware to parse JSON (important if you expect JSON requests)
app.use(express.json());

// Use your course routes under /api/courses
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

