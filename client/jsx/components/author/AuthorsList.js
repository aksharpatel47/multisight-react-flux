import React from 'react';
import AuthorStore from '../../stores/author.store';
import AuthorActions from '../../actions/author.actions';
import {Link} from 'react-router';
import LoadingActions from '../../actions/loading.actions';

const AuthorsList = React.createClass({
	getInitialState() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	onAuthorsChange() {
		this.setState({authors: AuthorStore.getAllAuthors()});
	},

	componentDidMount() {
		AuthorStore.addOnChangeListener(this.onAuthorsChange);
	},

	componentWillUnmount() {
		AuthorStore.removeOnChangeListener(this.onAuthorsChange);
	},

	removeAuthor(id) {
		LoadingActions.toggle();
		AuthorActions.delete(id).then(() => {
			LoadingActions.toggle();
		});
	},

	render() {
		let authors = [];
		Object.keys(this.state.authors).forEach((key) => {
			authors.push(
				<li key={key}>
					{this.state.authors[key]}
					{' '}
					<Link to={`/authors/edit/${key}`}>Edit</Link>
					{' '}
					<button onClick={() => this.removeAuthor(key)}>X</button>
				</li>
			);
		});

		return (
			<div>
				<h3>Authors List</h3>
				<Link to="/authors/add">Add Author</Link>
				<ul>
					{authors}
				</ul>
			</div>
		);
	}
});

export default AuthorsList;
