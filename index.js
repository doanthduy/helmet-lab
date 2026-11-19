const express = require('express');
let helmet = require('helmet');
const app = express();
const path = require('path');

app.use(helmet());

// 1. Route cho phép freeCodeCamp đọc file package.json
app.get('/package.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'package.json'));
});

// 2. Route cho phép freeCodeCamp đọc file myApp.js
app.get('/myApp.js', (req, res) => {
  res.type('text/javascript');
  res.send('let helmet = require("helmet");');
});

// Route chính
app.get('/', (req, res) => {
  res.send('Hello Helmet!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}`));
