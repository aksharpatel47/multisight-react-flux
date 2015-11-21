import React from 'react';
import {Link} from 'react-router';

const CoursesPage = React.createClass({
	render() {
		return (
			<div>
				<h3>Course Page</h3>
				<Link to='/courses/add'>Add Courses</Link>
				{this.props.children}
			</div>
		);
	}
});

export default CoursesPage;
