import { useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button';
import SearchBar from './components/SearchBar';
import { Context } from 'Context';

import { convertAuthorsIdToNames } from 'helpers/authorsString';
import { dateTransform } from 'helpers/dateGenerator';

import { getAllCoursesAction } from 'redux/store/courses/actionCreators';
import { getAllCoursesSelector } from 'redux/store/courses/selectors';

import s from './Courses.module.css';
import { getAllAuthorsAction } from 'redux/store/authors/actionCreators';

const Courses = () => {
	const context = useContext(Context);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const courses = useAppSelector(getAllCoursesSelector);

	useEffect(() => {
		console.log('UseEffect works!');
		// eslint-disable-next-line no-debugger
		debugger;
		dispatch(getAllCoursesAction());
		dispatch(getAllAuthorsAction());

		return () => {
			console.log('I am unmounted!');
		};
	}, []);

	const onAddNewCourseClick = () => {
		navigate('/courses/add');
	};

	return (
		<section className={s.coursesSection}>
			<div className={s.wrapper}>
				<SearchBar value={context.filter} setFilter={context.setFilter} />
				<Button btnText='Add new course' onClick={onAddNewCourseClick} />
			</div>
			<ul>
				{courses?.map((course) => {
					return (
						<CourseCard
							id={course.id}
							key={course.id}
							title={course.title}
							description={course.description}
							authors={convertAuthorsIdToNames(course.authors, context.authors)}
							duration={course.duration}
							creationDate={dateTransform(course.creationDate)}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Courses;
