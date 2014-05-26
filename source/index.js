var express = require('express');
var app = express();
var mongo   = require( 'mongodb' );
var MongoClient  = mongo.MongoClient;
var serverString = 'mongodb://127.0.0.1:27017/test';
var http = require('http');
var fs = require('fs');

MongoClient.connect(serverString, function( err, db) {
	if (err) throw err;

	db.collection('profile').find().toArray(function(err, doc) {
		if (err) throw err;
	console.dir(doc);
		
	db.close;
	});

});

fs.readFile('./views/test.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

console.log('Server listening at port 8000');