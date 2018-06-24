var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/public'));

// ====================================================
// In order to use MongoDB with my server
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/albums', {useMongoClient: true});
// ====================================================

// ====================================================
// Keeping my routes in a separate folder for cleanliness
var myRoutes = require('./routes/index');
app.use(myRoutes);
//=====================================================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Eupony App Listening On Port ${process.env.PORT}`);
});
