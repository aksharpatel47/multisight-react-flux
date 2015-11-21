/**
 * Created by aksharpatel on 14/11/15.
 */
var app = require('./app.server');
var port = process.env.PORT || 8000;

app.listen(port, (err) => {
	if (err) throw err;
	console.log('The app is running on port', port);
});