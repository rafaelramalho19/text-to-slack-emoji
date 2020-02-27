"use strict";
const $ = require("cheerio");

exports.handler = function(event, context, callback) {
  const { queryStringParameters } = event;
  console.log(queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: queryStringParameters
  });
};
