var express = require('express');
var app = express();

var mongo = require('./routes/mongo.js')

/*
app.get('/Main', function(req, res){
	res.sendfile(__dirname + '/Main/presentation.html');
});
app.get('/Main/js/switch.js', function(req, res){
	res.sendfile(__dirname + '/Main/js/switch.js');
})
app.get('/Main/js/1stCamera.js', function(req, res){
	res.sendfile(__dirname + '/Main/js/1stCamera.js');
})
app.get('/Main/js/2ndCamera.js', function(req, res){
	res.sendfile(__dirname + '/Main/js/2ndCamera.js');
})
app.get('/Main/js/jquery-1.10.2.min.js', function(req, res){
	res.sendfile(__dirname + '/Main/js/jquery-1.10.2.min.js');
})
app.get('/Main/js/bootstrap.min.js', function(req, res){
	res.sendfile(__dirname + '/Main/js/bootstrap.min.js');
})*/

app.get('/test', function(req, res){
	res.sendfile(__dirname + '/views/test.html');
})
app.get('/routes/lol.js', function(req, res){
	res.sendfile(__dirname + '/routes/lol.js');
})

app.get('*', function(req, res){
	res.send("Page not found", 404);
});

function errorHandler( err, req, res, next ) {
	console.error( err.message );
	console.error( err.stack );
	res.status( 500 );
	res.render( 'app_error' , { error: err } );
}

var server = app.listen(8081, function(){
	console.log('Listening on port %d', server.address().port);
});