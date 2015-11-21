/**
 * Created by aksharpatel on 21/11/15.
 */
import {ADD_AUTHOR, DELETE_AUTHOR, EDIT_AUTHOR} from '../constants/actionTypes';
import xhttp from '../libs/xhttp';
import Dispatcher from '../appDispatcher';

var AuthorActions = {
	add(name) {
		return xhttp.post('/api/authors', {name}).then((result) => {
			if (result.status === 201) {
				let id = JSON.parse(result.response);
				Dispatcher.dispatch({
					type: ADD_AUTHOR,
					payload: {
						id: id[0],
						name: name
					}
				});
			}
		});
	},

	delete(id) {
		return xhttp.delete(`/api/authors/${id}`).then((result) => {
			if (result.status === 200) {
				Dispatcher.dispatch({
					type: DELETE_AUTHOR,
					payload: {
						id
					}
				});
			}
		})
	},

	edit(id, newName) {
		return xhttp.put(`/api/authors/${Number(id)}`, {name: newName}).then((result) => {
			if (result.status === 200) {
				Dispatcher.dispatch({
					type: EDIT_AUTHOR,
					payload: {
						id,
						name: newName
					}
				});
			}
		});
	}
};

export default AuthorActions;