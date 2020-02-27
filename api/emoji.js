"use strict";
const cheerio = require("cheerio");
const axios = require("axios");

export async function handler ({ queryStringParameters }, context) {
  let { text, emoji, emojiEmpty } = queryStringParameters;

  if(!text || !emoji) {
    return {
      statusCode: 500,
      body: 'You should specify the "text" and "emoji" query parameters'
    }
  }

  if(!emojiEmpty || !emojiEmpty.length) {
    emojiEmpty =':black_square:';
  }

  const { data } = await axios.get(`http://www.network-science.de/ascii/ascii.php?TEXT=${text}&x=50&y=8&FONT=banner&RICH=no&FORM=left&STRE=no&WIDT=80`);

  const $ = cheerio.load(data);

  const pre = $('TABLE PRE');
  const ascii = pre.text();

  const asciiWithoutHash = ascii.replace(/#/g, emoji);
  const asciiWithoutSpaces = asciiWithoutHash.replace(/\ /g, emojiEmpty);

  return {
    statusCode: 200,
    body: asciiWithoutSpaces
  };
};
