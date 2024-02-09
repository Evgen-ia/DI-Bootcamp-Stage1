const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

// GET /tasks
router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(tasksFilePath, 'utf8');
        const tasks = JSON.parse(data);
        res.json(tasks);
    } catch (err) {
        console.error('Error reading tasks file:', err);
        res.status(500).send('Server error');
    }
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const data = await fs.readFile(tasksFilePath, 'utf8');
        const tasks = JSON.parse(data);
        const task = tasks.find(task => task.id === taskId);
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.json(task);
    } catch (err) {
        console.error('Error reading tasks file:', err);
        res.status(500).send('Server error');
    }
});

// POST /tasks
router.post('/', async (req, res) => {
    try {
        const { id, title, description } = req.body;
        if (!id || !title || !description) {
            return res.status(400).send('Missing required fields');
        }
        const data = await fs.readFile(tasksFilePath, 'utf8');
        const tasks = JSON.parse(data);
        tasks.push({ id, title, description });
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
        res.status(201).json({ message: 'Task created successfully' });
    } catch (err) {
        console.error('Error writing tasks file:', err);
        res.status(500).send('Server error');
    }
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send('Missing required fields');
        }
        const data = await fs.readFile(tasksFilePath, 'utf8');
        const tasks = JSON.parse(data);
        const index = tasks.findIndex(task => task.id === taskId);
        if (index === -1) {
            return res.status(404).send('Task not found');
        }
        tasks[index] = { ...tasks[index], title, description };
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
        res.json(tasks[index]);
    } catch (err) {
        console.error('Error writing tasks file:', err);
        res.status(500).send('Server error');
    }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const data = await fs.readFile(tasksFilePath, 'utf8');
        let tasks = JSON.parse(data);
        tasks = tasks.filter(task => task.id !== taskId);
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        console.error('Error writing tasks file:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
