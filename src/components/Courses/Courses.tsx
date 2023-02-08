import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button';
import SearchBar from './components/SearchBar';

import { convertAuthorsIdToNames } from 'helpers/authorsString';
import { dateTransform } from 'helpers/dateGenerator';

import { getAllCoursesAction } from 'redux/store/courses/actionCreators';
import { getAllCoursesSelector } from 'redux/store/courses/selectors';

import { getAllAuthorsAction } from 'redux/store/authors/actionCreators';
import { getAllAuthorsSelector } from 'redux/store/authors/selectors';

import s from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const courses = useAppSelector(getAllCoursesSelector);
	const authors = useAppSelector(getAllAuthorsSelector);

	const [filteredCourses, setFilteredCourses] = useState([]);

	useEffect(() => {
		console.log('UseEffect works!');
		console.log(courses);
		console.log(authors);

		dispatch(getAllCoursesAction());
		dispatch(getAllAuthorsAction());

		return () => {
			console.log('I am unmounted!');
		};
	}, [dispatch]);

	const onAddNewCourseClick = () => {
		navigate('/courses/add');
	};

	return (
		!!courses.length &&
		!!authors.length && (
			<section className={s.coursesSection}>
				<div className={s.wrapper}>
					<SearchBar
						filteredCourses={filteredCourses}
						setFilteredCourses={setFilteredCourses}
					/>
					<Button btnText='Add new course' onClick={onAddNewCourseClick} />
				</div>
				<ul>
					{filteredCourses?.map((course) => {
						return (
							<CourseCard
								id={course.id}
								key={course.id}
								title={course.title}
								description={course.description}
								authors={convertAuthorsIdToNames(course.authors, authors)}
								duration={course.duration}
								creationDate={dateTransform(course.creationDate)}
							/>
						);
					})}
				</ul>
			</section>
		)
	);
};

export default Courses;
