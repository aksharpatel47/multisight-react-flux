import React from 'react';
import AuthorStore from '../../stores/author.store';

const AuthorsPage = React.createClass({
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
});

export default AuthorsPage;
