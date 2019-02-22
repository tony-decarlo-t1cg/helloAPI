const express = require('express');

const app = express();

const router = express.Router();

app.get('/hello', (req, res) => res.json({ msg: 'Hello World' }));
app.get('/publicHello', (req, res) => res.json({ msg: 'Public Hello World' }));
app.get('/privateHello', (req, res) =>
  res.json({ msg: 'Private Hello World' })
);

const port = 8044;

app.listen(port, () => console.log(`Server running on port ${port}`));
