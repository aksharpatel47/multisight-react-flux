/**
 * Created by aksharpatel on 22/11/15.
 */
import React, {Component} from 'react';
import AuthorStore from '../../stores/author.store';

class Form extends Component {
	valuesChanged() {
		let title = this.refs.title.value;
		let author_id = this.refs.author_id.value;
		let category = this.refs.category.value;
		let length = this.refs.length.value;

		this.props.valuesChanged(title, author_id, category, length);
	}

	render() {
		let authors = AuthorStore.getAllAuthors();
		let authorList = Object.keys(authors).map((key) => {
			return <option key={key} value={key}>{authors[key]}</option>;
		});

		return (
			<form>
				<label htmlFor="title">Title</label>
				<input type="text" ref="title" id="title"
				       value={this.props.data.title} onChange={() => this.valuesChanged()} autoFocus/>
				<br/>
				<label htmlFor="author">Author</label>
				<select id="author" ref="author_id" value={this.props.data.author_id}
				        onChange={() => this.valuesChanged()}>
					{authorList}
				</select>
				<br/>
				<label htmlFor="category">Category</label>
				<input type="text" ref="category" id="category"
				       value={this.props.data.category} onChange={() => this.valuesChanged()} />
				<br/>
				<label htmlFor="length">Length</label>
				<input type="text" ref="length" id="length"
				       value={this.props.data.length} onChange={() => this.valuesChanged()} />
				<br/>
				<button onClick={(e) => this.props.save(e)}>Save</button>
			</form>
		);
	}
}

export default Form;