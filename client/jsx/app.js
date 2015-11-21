import React from 'react';
import {Link} from 'react-router';
import LoadingStore from './stores/loading.store';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	toggleLoading() {
		this.setState({loading: !this.state.loading});
	}

	componentDidMount() {
		LoadingStore.addOnChangeListener(this.toggleLoading.bind(this));
	}

	componentWillUnmount() {
		LoadingStore.removeChangeListener(this.toggleLoading.bind(this));
	}

	render() {
		let loading;
		if (this.state.loading) {
			loading = <div>Loading...</div>
		}
		return (
			<div>
				<h1>MultipleSight</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/authors">Authors</Link></li>
					<li><Link to="/courses">Courses</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				{loading}
				{this.props.children}
			</div>
		);
	}
}