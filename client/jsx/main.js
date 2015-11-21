/**
 * Created by aksharpatel on 14/11/15.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';
import history from './history';
import InitializeActions from './actions/initialize.actions';

InitializeActions.init().then(() => {
	ReactDOM.render(
		<Router history={history}>{routes}</Router>, document.getElementById('react-render')
	);
});

