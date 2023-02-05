import { useState } from 'react';

import Input from 'common/Input';
import Button from 'common/Button';

import s from './SearchBar.module.css';

import { useAppSelector } from 'redux/hooks';
import { getAllCoursesSelector } from 'redux/store/courses/selectors';

const SearchBar = () => {
	const [filter, setFilter] = useState('');

	const courses = useAppSelector(getAllCoursesSelector);

	const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
		setFilter(e.currentTarget.value);
	};

	const onSubmitHandle = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const filterInLowerCase = filter.toLowerCase();
		if (filterInLowerCase) {
			const foundCourses = courses.filter(
				(course) =>
					course.id.toLowerCase().includes(filterInLowerCase) ||
					course.title.toLowerCase().includes(filterInLowerCase)
			);
			console.log(foundCourses);
		}
	};

	return (
		<div>
			<form action='#' className={s.searchForm} onSubmit={onSubmitHandle}>
				<Input
					name='searchText'
					placeholder='Enter course name...'
					onChange={onChangeHandle}
					value={filter}
				/>
				<Button btnText='Search' type='submit' />
			</form>
		</div>
	);
};

export default SearchBar;
