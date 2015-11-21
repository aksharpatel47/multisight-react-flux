/**
 * Created by aksharpatel on 21/11/15.
 */
import React, {Component} from 'react';
import history from '../../history';

import AuthorStore from '../../stores/author.store';

class CourseAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			authorId: null,
			category: '',
			length: ''
		}
	}

	valuesChange() {
		let title = this.refs.title.value.trim();
		let authorId = this.refs.authorId.value.trim();
		let category = this.refs.category.value.trim();
		let length = this.refs.length.value.trim();
		this.setState({
			title,
			authorId,
			category,
			length
		});
	}

	addCourse(e) {
		e.preventDefault();

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
					       value={this.state.title} onChange={() => this.valuesChange()}/>
					<br/>
					<label htmlFor="author">Author</label>
					<select id="author" ref="authorId" value={this.state.authorId}
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
					<button onClick={(e) => this.addCourse(e)}>Add</button>
				</form>
			</div>
		);
	}
}

export default CourseAdd;