/**
 * Created by aksharpatel on 22/11/15.
 */
import React, {Component} from 'react';
import CourseForm from './CourseForm';
import CourseStore from '../../stores/course.store';
import CourseActions from '../../actions/course.actions';
import history from '../../history';

class CourseEdit extends Component {
	constructor(props) {
		super(props);
		this.state = CourseStore.getCourseInfo(this.props.params.id);
	}

	valuesChanged(title, author_id, category, length) {
		this.setState({
			title,
			author_id,
			category,
			length
		});
	}

	saveChanges(e) {
		e.preventDefault();
		CourseActions.edit(this.props.params.id, this.state).then(() => {
			console.log('Course Updated');
			history.pushState(null, '/courses');
		});
	}

	render() {
		return (
			<CourseForm data={this.state}
			            valuesChanged={this.valuesChanged.bind(this)}
						save={this.saveChanges.bind(this)}/>
		);
	}
}

export default CourseEdit;