var Server = require( 'mongodb' ).Server;
var Db = require( 'mongodb' ).Db;
var server = new Server( 'localhost', 27017, { 
	auto_reconnect : true 
} );
/*
var mongoose = require( 'mongoose' );

var teamSchema = new mongoose.Schema( {
	name: String
});
mongoose.model( 'Team')
*/
var db = new Db( 'test', server );
db.open( function( err, db ) {
	if ( !err ) {
		console.log( "Connected to test database" );

		db.collection( 'customers', function( err, collection ) {
		
        	collection.find( {}, { 'name': true, 'age': true, '_id': false } ).toArray( function( err, name ) {
          		if( !err ) {
          		console.dir( name );
          		//res.json( name );
          		db.close();
          		}
        	} );

		} );
	}

} );