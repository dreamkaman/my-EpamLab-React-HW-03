import { useContext, useEffect } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button';
import SearchBar from './components/SearchBar';
import { Context } from 'Context';

import { convertAuthorsIdToNames } from 'helpers/authorsString';
import { dateTransform } from 'helpers/dateGenerator';

import s from './Courses.module.css';
import { getAllCoursesAction } from 'redux/store/courses/actionCreators';

const Courses = () => {
	const context = useContext(Context);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCoursesAction());
	}, [dispatch]);

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
				{context.courses.map((course) => {
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
