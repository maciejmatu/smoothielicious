const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'serverless-smoothielicious';

function addPageVisit() {
  return MongoClient.connect(DB_URL)
    .then(client => {
      const db = client.db(DB_NAME);

      return db.collection('info')
        .findOneAndUpdate({}, { $inc: { requests: 1 } }, { projection: { _id: 0 }, returnNewDocument: true })
    });
}


exports.handler = function(event, context, callback) {
  addPageVisit()
    .then((res) => {
      console.log('Saved new page request. Current count:', res.value.requests);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    })
    .catch((err) => {
      console.error(err);

      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ errors: ['No db']})
      })
    });
}

