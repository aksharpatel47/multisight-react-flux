/**
 * Created by aksharpatel on 14/11/15.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var AuthorRoutes = require('./routes/author.routes');
var CourseRoutes = require('./routes/course.routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/public/assets', express.static('../builds'));

app.use('/api/authors', AuthorRoutes);
app.use('/api/courses', CourseRoutes);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'views/index.html'));
});


module.exports = app;
