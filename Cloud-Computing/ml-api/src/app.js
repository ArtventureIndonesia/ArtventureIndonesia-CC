const express = require('express');

const app = express();
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const PORT = process.env.NODE_ENV !== 'production' ? '3000' : '5000';

const handler = require('./api/ml');

app.get('/', (req, res) => {
  res.send(`You are connected to the Server. Let's Configure it! `);
});

app.post('/predicts', handler.MLHandlers.predictHandlers);

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`);
});
