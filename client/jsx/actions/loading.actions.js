/**
 * Created by aksharpatel on 21/11/15.
 */
import Dispatcher from '../appDispatcher';
import {TOGGLE_LOADING} from '../constants/actionTypes';

var LoadingActions = {
	toggle() {
		Dispatcher.dispatch({
			type: TOGGLE_LOADING
		});
	}
};

export default LoadingActions;