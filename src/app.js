const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const { PORT, HOST } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const dataRoutes = require('./api/routes/dataRoutes');
const analysisRoutes = require('./api/routes/analysisRoutes');

// Use routes
app.use('/api/data', dataRoutes);
app.use('/api/analysis', analysisRoutes);

// Error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// Use error handler
app.use(errorHandler);

// Start server
app.listen(PORT, HOST, () => {
  logger.info(`Server running on http://${HOST}:${PORT}`);
});

module.exports = app;
