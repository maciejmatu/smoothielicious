const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'serverless-smoothielicious';

function connect() {
  return MongoClient.connect(DB_URL)
}

module.exports.addPageVisit = () => {
  return new Promise((resolve, reject) => {
    connect().then(client => {
      const db = client.db(DB_NAME);

      db.collection('info')
        .findOneAndUpdate({}, { $inc: { requests: 1 } }, { projection: { _id: 0 }, returnNewDocument: true })
        .then(result => resolve(result.value))
    })
  })
}

module.exports.getPageVisits = () => {
  return new Promise((resolve, reject) => {
    connect().then(client => {
      const db = client.db(DB_NAME);

      db.collection('info')
        .findOne({}, { projection: { _id: 0 }})
        .then(result => resolve(result))
    })
  })
}
