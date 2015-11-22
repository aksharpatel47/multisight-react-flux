import React, {Component} from 'react';
import CourseStore from '../../stores/course.store';
import CourseActions from '../../actions/course.actions';
import AuthorStore from '../../stores/author.store';
import {Link} from 'react-router';

class CoursesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: CourseStore.getAllCourses()
		};
		this.changeFunction = this.onCourseChange.bind(this);
	}

	deleteCourse(id) {
		console.log('delete');
		CourseActions.delete(id);
	}

	onCourseChange() {
		this.setState({courses: CourseStore.getAllCourses()});
	}

	componentDidMount() {
		CourseStore.addChangeListener(this.changeFunction);
	}

	componentWillUnmount() {
		CourseStore.removeChangeListener(this.changeFunction);
	}

	render() {
		let CourseRows = Object.keys(this.state.courses).map(key => (
			<TableRow key={key} course={this.state.courses[key]} deleteCourse={this.deleteCourse.bind(this)}/>
		));
		return (
			<div>
				<h3>Courses List</h3>
				<table>
					<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
					</thead>
					<tbody>
					{CourseRows}
					</tbody>
				</table>
			</div>
		);
	}
}

const TableRow = (props) => (
	<tr>
		<td>{props.course.id}</td>
		<td>{props.course.title}</td>
		<td>{AuthorStore.getAuthorInfo(props.course.author_id)}</td>
		<td>{props.course.category}</td>
		<td>{props.course.length}</td>
		<td><Link to={`/courses/edit/${props.course.id}`}>Edit</Link></td>
		<td><button type="button" onClick={() => props.deleteCourse(props.course.id)}>Delete</button></td>
	</tr>
);

export default CoursesList;
