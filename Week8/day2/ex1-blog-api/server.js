const express = require('express');
const app = express();
const PORT = 3000;

// database
let data = [
  { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Second Blog Post', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' }
];

app.use(express.json());

// Routes
// GET Return a list of all blog posts.
app.get('/posts', (req, res) => {
  res.json(data);
});

// GET Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(post => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

// POST Create a new blog post.
app.post('/posts', (req, res) => {
  const post = req.body;
  data.push(post);
  res.status(201).json(post);
});

// PUT Update an existing blog post.
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPost = req.body;
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedPost };
    res.json(data[index]);
  } else {
    res.status(404).send('Post not found');
  }
});

// DELETE Delete a blog post.
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    const deletedPost = data.splice(index, 1);
    res.json(deletedPost);
  } else {
    res.status(404).send('Post not found');
  }
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
