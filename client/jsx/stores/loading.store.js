/**
 * Created by aksharpatel on 21/11/15.
 */
import Dispatcher from '../appDispatcher';
import {TOGGLE_LOADING} from '../constants/actionTypes';

import events from 'events';
let EventEmitter = events.EventEmitter;
let LOADING_CHANGE = 'LOADING_CHANGE';

var LoadingStore = Object.assign({}, EventEmitter.prototype, {
	addOnChangeListener(cb) {
		this.on(LOADING_CHANGE, cb);
	},

	removeChangeListener(cb) {
		this.removeListener(LOADING_CHANGE, cb);
	},

	emitChange() {
		this.emit(LOADING_CHANGE);
	}
});

Dispatcher.register((action) => {
	switch(action.type) {
		case TOGGLE_LOADING:
			LoadingStore.emitChange();
			break;
	}
});

export default LoadingStore;