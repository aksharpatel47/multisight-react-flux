import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app';
import Default from './default';

import AuthorsPage from './components/author/AuthorsPage';
import AuthorsList from './components/author/AuthorsList';
import AuthorAdd from './components/author/AuthorAdd';
import AuthorEdit from './components/author/AuthorEdit';

import CoursesPage from './components/course/CoursesPage';
import CoursesList from './components/course/CoursesList';
import CourseAdd from './components/course/CourseAdd';

import AboutPage from './components/about/AboutPage';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Default}/>
		<Route path='authors' component={AuthorsPage}>
			<IndexRoute component={AuthorsList}/>
			<Route path='add' component={AuthorAdd} />
			<Route path='edit/:id' component={AuthorEdit} />
		</Route>
		<Route path='courses' component={CoursesPage}>
			<IndexRoute component={CoursesList}/>
			<Route path='add' component={CourseAdd}/>
		</Route>
		<Route path='about' component={AboutPage}/>
	</Route>
);