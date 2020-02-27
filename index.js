'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const $ = require('cheerio');

app.get('/', (req, res) => {
    res.sendFile('index.html');
});
app.get('/emoji', (req, res) => {
  const { text } = req.query;
  console.log(text);
//   req.json(newValue);
});

module.exports.handler = serverless(app);