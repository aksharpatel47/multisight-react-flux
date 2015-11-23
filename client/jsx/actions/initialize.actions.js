/**
 * Created by aksharpatel on 20/11/15.
 */
import Dispatcher from '../appDispatcher';
import {INITIALIZE_AUTHORS, INITIALIZE_COURSES} from '../constants/actionTypes';
import * as xhttp from '../libs/xhttp';

let initializeActions = {
	init() {
		let promises = [
			xhttp.get('/api/authors'),
			xhttp.get('/api/courses')
		];
		return Promise.all(promises).then((results) => {
			let authorsResult = results[0];
			if (authorsResult.status === 200) {
				Dispatcher.dispatch({
					type: INITIALIZE_AUTHORS,
					payload: JSON.parse(authorsResult.response)
				});
			}
			let coursesResult = results[1];
			if (coursesResult.status === 200) {
				Dispatcher.dispatch({
					type: INITIALIZE_COURSES,
					payload: JSON.parse(coursesResult.response)
				});
			}
		});
	}
};

export default initializeActions;