/**
 * Created by aksharpatel on 21/11/15.
 */
import React, {Component} from 'react';
import AuthorActions from '../../actions/author.actions';
import LoadingActions from '../../actions/loading.actions';

export default class AuthorAdd extends Component {
	onSubmit(e) {
		e.preventDefault();
		let authorNode = this.refs.authorName;
		let authorName = authorNode.value.trim();
		if (!!authorName) {
			LoadingActions.toggle();
			AuthorActions.add(authorName).then(() => {
				console.log('Promise completed successfully');
				authorNode.value = '';
				authorNode.focus();
				LoadingActions.toggle();
			});
		}
	}

	render() {
		return (
			<div>
				<h3>Author Add</h3>
				<form>
					<label htmlFor="authorName">Author Name</label>
					<input type="text" ref="authorName" id="authorName" autoFocus/>
					<button onClick={e => this.onSubmit(e)}>Add</button>
				</form>
			</div>
		);
	}
}