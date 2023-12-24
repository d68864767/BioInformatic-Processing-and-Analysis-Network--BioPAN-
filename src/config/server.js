const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { PORT, HOST } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const dataRoutes = require('../api/routes/dataRoutes');
const analysisRoutes = require('../api/routes/analysisRoutes');

// Use routes
app.use('/api/data', dataRoutes);
app.use('/api/analysis', analysisRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

module.exports = app;
