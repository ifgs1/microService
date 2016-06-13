var MongoClient = require('mongodb').MongoClient;
module.exports = function service(options) {

  this.add({ type: 'calculadora', function: 'stockByCategory' }, stockByCategory)

  function stockByCategory(msg, respond) {
    MongoClient.connect('mongodb://test:test@ds021969.mlab.com:21969/cloud', function(err, db) {
      if (err) {
        throw err;
        respond( null, { respond: err });
      }
      db.collection('stockByCategory').find().toArray(function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        respond( null, { respond: result });
      });
    });
  }
}
