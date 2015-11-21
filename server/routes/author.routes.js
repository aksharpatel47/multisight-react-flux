/**
 * Created by aksharpatel on 14/11/15.
 */
var AuthorControllers = require('../controllers/author.controllers');
var AuthorRoutes = require('express').Router();

AuthorRoutes
	.get('/', AuthorControllers.getAllAuthors)
	.post('/', AuthorControllers.addAuthor)
	.put('/:id', AuthorControllers.editAuthor)
	.delete('/:id', AuthorControllers.deleteAuthor);

module.exports = AuthorRoutes;