const express = require('express');

const app = express();
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const PORT = process.env.NODE_ENV !== 'production' ? '3000' : '5000';

app.get('/', (req, res) => {
  res.send(`You are connected to the Server. Let's Configure it! `);
});

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`);
});
