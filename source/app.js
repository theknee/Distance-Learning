var express = require( 'express' );
var http = require( 'http' );
var fs = require( 'fs' );
var app = express();
var Server = require( 'mongodb' ).Server;
var Db = require( 'mongodb' ).Db;
var server = new Server( 'localhost', 27017, { 
	auto_reconnect : true 
} );

/*
app.get( '/', function( req, res ){

	res.send( req.url );

});



http.createServer( app ).listen( 1234 );
console.log( 'sever listening at port 1234' );
*/

///*
//get html request and connect to database

var server = http.createServer( function( request, response ) {

	console.log( request.url );

	fs.readFile( '.' + request.url , function( err, data ) {

		if ( err ){
			response.writeHead( 404, { 'Content-type':'text/plain' } );
			response.end( '404 file not found' );
		}
		else{
			response.writeHead( 200, { 'Content-type':'text/html' } );
			response.end( data );
		}

	});

	var mongoConnect = require('./routes/mongoConnect.js')

});

server.listen( 1337 );
console.log( 'server listening at port 1337' );
//*/