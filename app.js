var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://test:test@ds021969.mlab.com:21969/cloud', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('stockByCategory').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});
