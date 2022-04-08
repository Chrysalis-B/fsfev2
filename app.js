const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/teapot', (req, res) => {
  res.set('X-Teatime', '5 am');
  res.sendStatus(418);
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
