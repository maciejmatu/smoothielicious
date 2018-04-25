const db = require('./modules/db');

exports.handler = function(event, context, callback) {
  db.addPageVisit()
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    })
    .catch(console.error);
}

