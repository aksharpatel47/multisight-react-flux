/**
 * Created by aksharpatel on 14/11/15.
 */
var db = require('../knex');

exports.getAllAuthors = function (req, res) {
	db.select().from('authors').then((rows) => {
		res.send(rows);
	});
};

exports.addAuthor = function (req, res) {
	console.log(req.body);
	var name = req.body.name;

	db('authors').insert({name: name}, 'id').then((id) => {
		res.status(201).send(id);
	}).catch((err) => {
		res.status(400).send(err);
	});
};

exports.editAuthor = function (req, res) {
	var id = req.params.id;
	var name = req.body.name;

	db('authors').where('id', id).update({
		name: name
	}).then(() => {
		res.sendStatus(200);
	}).catch(err => {
		res.status(400).send(err);
	});
};

exports.deleteAuthor = function (req, res) {
	var id = req.params.id;

	db('authors').where('id', id).del().then(() => {
		res.sendStatus(200);
	}).catch((err) => {
		res.status(400).send(err);
	});
};