//connect node to mongodb

var MongoClient = require('mongodb').MongoClient;

//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) 
{
  if (err) throw err;

  console.log("Connected to Database");

	db.collection('userProfile').find().toArray(function(err, doc) 
	{
		if (err) throw err;

		console.dir(doc);

		db.close;

	});

});