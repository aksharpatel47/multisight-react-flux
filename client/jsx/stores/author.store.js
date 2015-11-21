/**
 * Created by aksharpatel on 20/11/15.
 */
import Dispatcher from '../appDispatcher';
import events from 'events';
import {INITIALIZE_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR, EDIT_AUTHOR} from '../constants/actionTypes';

let EventEmitter = events.EventEmitter;
let AUTHOR_CHANGE = 'AUTHOR_CHANGE';
let _authors = {};

let AuthorStore = Object.assign({}, EventEmitter.prototype, {
	addOnChangeListener(cb) {
		this.on(AUTHOR_CHANGE, cb);
	},

	removeOnChangeListener(cb) {
		this.removeListener(AUTHOR_CHANGE, cb);
	},

	emitChange() {
		this.emit(AUTHOR_CHANGE);
	},

	getAllAuthors() {
		return _authors;
	},

	getAuthorInfo(id) {
		return _authors[Number(id)];
	}
});

Dispatcher.register((action) => {
	switch(action.type) {
		case INITIALIZE_AUTHORS:
			action.payload.forEach((author) => {
				_authors[author.id] = author.name
			});
			break;
		case ADD_AUTHOR:
			_authors[action.payload.id] = action.payload.name;
			AuthorStore.emitChange();
			break;
		case DELETE_AUTHOR:
			delete _authors[action.payload.id];
			AuthorStore.emitChange();
			break;
		case EDIT_AUTHOR:
			_authors[action.payload.id] = action.payload.name;
			AuthorStore.emitChange();
			break;
	}
});

export default AuthorStore;
