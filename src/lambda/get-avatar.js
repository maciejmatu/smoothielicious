'use strict';

const cheerio = require('cheerio');
const request = require('request');

export function handler(event, context, callback) {

  // grab the parameters from the request
  var size = event.queryStringParameters['size'];
  var user = event.queryStringParameters['user'];

  // transform the size parameter into the image URL pattern needed in the request
  var option = {
    "small" : "_normal",
    "medium" : "_96",
    "large" : "_400x400"
  };

  // Report back to our logs
  console.log(`Fetch avatar URL for ${user} with these size parameters of ${option[size]}`);

  // Make the request to twitter and parse the response
  request('https://mobile.twitter.com/' + user, function(err, response, body){
    if(!err && response.statusCode === 200){
      const $ = cheerio.load(body);
      const avatar = ($('.avatar img').attr('src') || '').replace('_normal', option[size]);
      return callback(null, {
          statusCode: 200,
          headers: {"Content-Type": "application/json"},
          body: avatar
        })
      } else {
        return callback(null, {
          statusCode: 404,
          body: err
        })
      }
    })
}
