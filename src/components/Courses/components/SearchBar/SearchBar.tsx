import { FC, useContext } from 'react';

import Input from 'common/Input';
import Button from 'common/Button';
import { Context } from 'Context';

import s from './SearchBar.module.css';

import * as db from 'helpers/mockedDataBase';

interface ISearchBarProps {
	value: string;
	setFilter: (value: string) => void;
}

const SearchBar: FC<ISearchBarProps> = ({ value = '', setFilter }) => {
	const context = useContext(Context);

	const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
		setFilter(e.currentTarget.value);
	};

	const onSubmitHandle = (e: React.SyntheticEvent) => {
		e.preventDefault();
		context.setCourses(() => db.mockedCoursesList);
		const filter = context.filter.toLowerCase();
		if (filter) {
			const foundCourses = context.courses.filter(
				(course) =>
					course.id.toLowerCase().includes(filter) ||
					course.title.toLowerCase().includes(filter)
			);
			context.setCourses(() => foundCourses);
		}
	};

	return (
		<div>
			<form action='#' className={s.searchForm} onSubmit={onSubmitHandle}>
				<Input
					name='searchText'
					placeholder='Enter course name...'
					onChange={onChangeHandle}
					value={value}
				/>
				<Button btnText='Search' type='submit' />
			</form>
		</div>
	);
};

export default SearchBar;
