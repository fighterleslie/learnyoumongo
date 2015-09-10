var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var lowestAge = parseInt(process.argv[2], 10)

mongo.connect(url, function(err, db) {
  if (err) {
    return console.error(err)
  }

  // query
  db.collection('parrots').find({
    age: {
      $gt: lowestAge
    }
  }).toArray(function(err, documents) {
    if (err) return console.error(err)

    console.log(documents)
    db.close()
  })
})
