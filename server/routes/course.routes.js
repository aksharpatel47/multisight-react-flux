/**
 * Created by aksharpatel on 14/11/15.
 */
var CourseRoutes = require('express').Router();
var CourseControllers = require('../controllers/course.controllers');

CourseRoutes
	.get('/', CourseControllers.getAllCourses)
	.post('/', CourseControllers.addCourse)
	.put('/:id', CourseControllers.editCourse)
	.delete('/:id', CourseControllers.deleteCourse);

module.exports = CourseRoutes;