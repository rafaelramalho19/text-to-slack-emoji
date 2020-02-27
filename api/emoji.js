"use strict";
const $ = require("cheerio");

module.exports.handler = (req, res) => {
  const { text } = req.query;
  console.log(text);
  req.text(text);
  //   req.json(newValue);
};
