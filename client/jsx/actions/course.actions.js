/**
 * Created by aksharpatel on 21/11/15.
 */
import Dispatcher from '../appDispatcher';
import {ADD_COURSE, EDIT_COURSE, DELETE_COURSE} from '../constants/actionTypes';
import * as xhttp from '../libs/xhttp';

let CourseActions = {
	add(data) {
		return xhttp.post('/api/courses', data).then((result) => {
			if (result.status === 201) {
				let id = JSON.parse(result.response)[0];
				data.id = id;
				Dispatcher.dispatch({
					type: ADD_COURSE,
					payload: {
						id: id,
						data
					}
				});
			}
		});
	},

	edit(id, data) {
		return xhttp.put(`/api/courses/${id}`, data).then((result) => {
			if (result.status === 200) {
				Dispatcher.dispatch({
					type: EDIT_COURSE,
					payload: {
						id,
						data
					}
				});
			}
		});
	},

	delete(id) {
		console.log(id);
		return xhttp.del(`api/courses/${id}`).then((result) => {
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