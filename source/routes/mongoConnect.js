var Server = require( 'mongodb' ).Server;
var Db = require( 'mongodb' ).Db;
var server = new Server( 'localhost', 27017, { 
	auto_reconnect : true 
} );

var db = new Db( 'test', server );
db.open( function( err, db ) {
	if ( err ) throw err;

	console.log( "Connected to test database" );
/*
db.collection( 'userProfile' ).find().toArray(function(err, doc) 
	{
		if ( err ) throw err;

		console.dir(doc);

		db.close;

	});
*/
} );





