const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker on Azure!');
});
app.get('/demo', (req, res) => {
  res.send('Hello this is a demo text API!');
});

app.get('/users', (req, res) => {
    res.json({name: 'Vidushi'});
});

app.listen(3000);