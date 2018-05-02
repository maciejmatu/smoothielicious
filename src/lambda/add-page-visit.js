const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'serverless-smoothielicious';

function errorResponse(callback, err) {
  console.error(err);

  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

function successResponse(callback, res) {
  console.log('Saved new page request. Current count:', res.value.requests);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res)
  });
}

exports.handler = function(event, context, callback) {
  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const infoCollection = db.collection('info');
    const updateAction = { $inc: { requests: 1 } };
    const updateOptions = {
      projection: { _id: 0 },
      upsert: true,
      returnOriginal: false
    };

    infoCollection.findOneAndUpdate({}, updateAction, updateOptions, (err, result) => {
      if (err) return errorResponse(callback, err);

      console.log('Saved new page request. Current count:', result.value.requests);

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });
    })
  });
}

