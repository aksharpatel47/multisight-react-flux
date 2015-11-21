/**
 * Created by aksharpatel on 21/11/15.
 */
import Dispatcher from '../appDispatcher';
import {ADD_COURSE, EDIT_COURSE, DELETE_COURSE} from '../constants/actionTypes';
import xhttp from '../libs/xhttp';

let CourseActions = {
	add(data) {
		xhttp.post('/api/courses', data).then((result) => {
			if (result.status === 201) {
				Dispatcher.dispatch({
					type: ADD_COURSE,
					payload: data
				});
			}
		});
	},

	edit(id, data) {
		xhttp.put(`/api/courses/${id}`, data).then((result) => {
			if (result.status === 200) {
				Dispatcher.dispatch({
					type: EDIT_COURSE,
					payload: data
				});
			}
		});
	},

	delete(id) {
		xhttp.delete(`api/courses/${id}`).then((result) => {
			if (result.status === 200) {
				Dispatcher.dispatch({
					type: DELETE_COURSE,
					payload: {
						id
					}
				});
			}
		});
	}
};

export default CourseActions;