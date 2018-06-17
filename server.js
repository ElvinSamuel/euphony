var express = require('express'),
    app     = express();

app.use(express.static(__dirname + '/public'));

//====================================================
// Keeping my routes in a separate folder for cleanliness
var myRoutes = require('./routes/index');
app.use(myRoutes);
//=====================================================

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Eupony App Listening On Port ${process.env.PORT}`);
});
