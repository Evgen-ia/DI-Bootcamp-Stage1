const express = require('express');
const app = express();
const tasksRouter = require('./tasks');

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start the Express app
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
