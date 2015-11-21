/**
 * Created by aksharpatel on 21/11/15.
 */
import React, {Component} from 'react';
import history from '../../history';
import AuthorStore from '../../stores/author.store';
import AuthorActions from '../../actions/author.actions';

class AuthorEdit extends Component {
	editAuthor(e) {
		e.preventDefault();
		let newName = this.refs.newName.value.trim();
		if (!!newName) {
			AuthorActions.edit(Number(this.props.params.id), newName).then(() => {
				history.pushState(null, '/authors');
			});
		}
	}

	render() {
		let author = AuthorStore.getAuthorInfo(this.props.params.id);
		return (
			<div>
				{author}
				<form>
					<label htmlFor="newName">New Name</label>
					<input type="text" ref="newName" id="newName" autoFocus/>
					<button onClick={(e) => this.editAuthor(e)}>Change</button>
				</form>
			</div>
		);
	}
}

export default AuthorEdit;