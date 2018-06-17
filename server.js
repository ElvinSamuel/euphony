var express = require('express'),
    app     = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Eupony App Listening On Port ${process.env.PORT}`);
});
