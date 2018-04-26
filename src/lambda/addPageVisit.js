const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'serverless-smoothielicious';

function addPageVisit() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(DB_URL).then(client => {
      const db = client.db(DB_NAME);

      db.collection('info')
        .findOneAndUpdate({}, { $inc: { requests: 1 } }, { projection: { _id: 0 }, returnNewDocument: true })
        .then(result => resolve(result.value))
    })
  })
}


exports.handler = function(event, context, callback) {
  addPageVisit()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    })
    .catch(console.error);
}

