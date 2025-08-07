// server/app.js
const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const lessonRoutes = require('./routes/lessonRoutes');
app.use('/api/lessons', lessonRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
