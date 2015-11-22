/**
 * Created by aksharpatel on 21/11/15.
 */
import React, {Component} from 'react';
import history from '../../history';
import CourseActions from '../../actions/course.actions';
import AuthorStore from '../../stores/author.store';

class CourseAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author_id: null,
			category: '',
			length: ''
		}
	}

	valuesChange() {
		let title = this.refs.title.value;
		let author_id = this.refs.author_id.value;
		let category = this.refs.category.value;
		let length = this.refs.length.value;
		this.setState({
			title,
			author_id,
			category,
			length
		});
	}

	addCourse(e) {
		e.preventDefault();
		let {title, author_id, category, length} = this.refs;
		CourseActions.add({
			title: title.value.trim(),
			author_id: author_id.value.trim(),
			category: category.value.trim(),
			length: length.value.trim()
		}).then(() => {
			history.pushState(null, '/courses');
			console.log('course created');
		});
	}

	render() {
		let authors = AuthorStore.getAllAuthors();
		let authorList = Object.keys(authors).map((key) => {
			return <option key={key} value={key}>{authors[key]}</option>;
		});

		return (
			<div>
				<h4>Course Add</h4>
				<form>
					<label htmlFor="title">Title</label>
					<input type="text" ref="title" id="title"
					       value={this.state.title} onChange={() => this.valuesChange()} autoFocus/>
					<br/>
					<label htmlFor="author">Author</label>
					<select id="author" ref="author_id" value={this.state.author_id}
							onChange={() => this.valuesChange()}>
						{authorList}
					</select>
					<br/>
					<label htmlFor="category">Category</label>
					<input type="text" ref="category" id="category"
							value={this.state.category} onChange={() => this.valuesChange()} />
					<br/>
					<label htmlFor="length">Length</label>
					<input type="text" ref="length" id="length"
							value={this.state.length} onChange={() => this.valuesChange()} />
					<br/>
					<button onClick={(e) => this.addCourse(e)}>Add</button>
				</form>
			</div>
		);
	}
}

export default CourseAdd;