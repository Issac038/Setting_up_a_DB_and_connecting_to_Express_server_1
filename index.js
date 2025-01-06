const express = require('express');
const { resolve } = require('path');
const connectDatabase = require('./DB.js');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  connectDatabase()
  console.log(`Example app listening at http://localhost:${port}`);
});

