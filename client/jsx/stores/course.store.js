/**
 * Created by aksharpatel on 21/11/15.
 */
import Dispatcher from '../appDispatcher';
import {INITIALIZE_COURSES, ADD_COURSE, EDIT_COURSE, DELETE_COURSE} from '../constants/actionTypes';
import events from 'events';

let EventEmitter = events.EventEmitter;
let COURSE_CHANGE = 'COURSE_CHANGE';
let _courses = {};

const CourseStore = Object.assign({}, EventEmitter.prototype, {
	onChangeListener(cb) {
		this.on(COURSE_CHANGE, cb);
	},

	removeChangeListener(cb) {
		this.removeListener(COURSE_CHANGE, cb);
	},

	emitChange() {
		this.emit(COURSE_CHANGE);
	},

	getAllCourses() {
		return _courses;
	}
});

Dispatcher.register((action) => {
	switch(action.type) {
		case INITIALIZE_COURSES:
			action.payload.forEach((course) => {
				_courses[course.id] = course;
			});
			break;
		case ADD_COURSE:
			let course = action.payload.course;
			_courses[course.id] = course;
			break;
		case EDIT_COURSE:
			let updatedCourse = action.payload.course;
			_courses[updatedCourse.id] = updatedCourse;
			break;
		case DELETE_COURSE:
			delete _courses[action.payload.id];
			CourseStore.emitChange();
			break;
	}
});