// server/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
// Implement your routes here...

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start the Express app
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
