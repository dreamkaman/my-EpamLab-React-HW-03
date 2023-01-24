import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import Header from 'components/Header';
import Courses from 'components/Courses';
import CourseInfo from 'components/CourseInfo';
import Registration from 'components/Registration';
import Login from 'components/Login';
import CreateCourse from 'components/CreateCourse';
import ProtectedRoute from 'common/ProtectedRoute';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';

import { TonClickHandle } from 'Context';

const initialCoursesSet = db.mockedCoursesList;
const authorsInitial = db.mockedAuthorsList;

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);
	const [courses, setCourses] = useState(initialCoursesSet);
	const [filter, setFilter] = useState('');
	const [authors, setAuthors] = useState(authorsInitial);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			setIsLoggined(true);
		}
	}, []);

	useEffect(() => {
		if (!filter) {
			setCourses(initialCoursesSet);
		}
	}, [filter]);

	const onClickHandle: TonClickHandle = (value) => {
		setIsLoggined(value);
		if (!value) {
			localStorage.setItem('token', '');
		}
	};

	return (
		<>
			<Context.Provider
				value={{
					isLoggined,
					onClickHandle,
					filter,
					setFilter,
					courses,
					setCourses,
					authors,
					setAuthors,
					setIsLoggined,
				}}
			>
				<Header />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />

					<Route path='/' element={isLoggined ? <Courses /> : <Login />} />

					<Route
						path='/courses'
						element={
							<ProtectedRoute isLoggined={isLoggined}>
								<Courses />
							</ProtectedRoute>
						}
					/>

					<Route
						path='/courses/add'
						element={
							<ProtectedRoute isLoggined={isLoggined}>
								<CreateCourse />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/courses/:courseId'
						element={
							<ProtectedRoute isLoggined={isLoggined}>
								<CourseInfo />
							</ProtectedRoute>
						}
					/>

					<Route path='*' element={<p>Something went wrong: 404!</p>} />
				</Routes>
			</Context.Provider>
		</>
	);
};

export default App;
