const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Register routes
app.use('/api', userRoutes);

module.exports = app;
