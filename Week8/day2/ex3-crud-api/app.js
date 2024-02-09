const express = require('express');
const app = express();
const PORT = 5000;

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Posts fetched successfully');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
