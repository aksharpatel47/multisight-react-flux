/**
 * Created by aksharpatel on 14/11/15.
 */
var db = require('../knex');

exports.getAllCourses = function (req, res) {
	db.select().from('courses').then((courses) => {
		res.send(courses);
	}).catch((err) => {
		res.status(400).send(err);
	});
};

exports.addCourse = function (req, res) {
	var title = req.body.title,
		author_id = req.body.author_id,
		category = req.body.category,
		length = req.body.length;

	db
		.insert({title: title, author_id: author_id, category: category, length: length}, 'id')
		.into('courses')
		.then((id) => {
			res.status(201).send(id);
		})
		.catch((err) => {
			res.status(400).send(err);
		})
};

exports.editCourse = function (req, res) {
	var id = req.params.id,
		title = req.body.title,
		author_id = req.body.author_id,
		category = req.body.category,
		length = req.body.length;

	db('courses')
		.where('id', id)
		.update({
			title: title,
			author_id: author_id,
			category: category,
			length: length
		})
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

exports.deleteCourse = function (req, res) {
	var id = Number(req.params.id);
	console.log(id);
	db('courses')
		.where('id', id)
		.del()
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};