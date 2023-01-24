import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import Button from 'common/Button';
import Input from 'common/Input';
import Title from 'common/Title';
import SelectedAuthorsList from './components/SelectedAuthorsList';
import { Context } from 'Context';

import { durationTransform } from 'helpers/pipeDuration';
import { IAuthor, getAuthorsIdArray } from 'helpers/authorsString';

import s from './CreateCourse.module.css';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [authorName, setAuthorName] = useState(''); //state for the new author name input
	const [duration, setDuration] = useState(0);
	const [description, setDescription] = useState('');
	const [selectedAuthors, setSelectedAuthors] = useState<IAuthor[]>([]);

	const context = useContext(Context);
	const navigate = useNavigate();

	const onChangeTitleHandle: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setTitle(e.target.value);
	};

	const onChangeAuthorNameHandle: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setAuthorName(e.target.value);
	};

	const onChangeDurationHandle: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setDuration(Number(e.target.value));
	};

	const onCancelClick = () => {
		context.setAuthors(() => [...context.authors, ...selectedAuthors]);
		navigate('/courses');
	};

	const onSubmitHandle = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (
			title.length < 2 ||
			description.length < 2 ||
			!duration ||
			!selectedAuthors.length
		) {
			alert('Please, fill in all fields');
			return;
		}

		const id = uuidV4();
		const creationDate = new Date().toISOString();

		const authors = getAuthorsIdArray(selectedAuthors);

		context.setCourses((prev) => [
			...prev,
			{
				id,
				title,
				description,
				creationDate,
				duration,
				authors,
			},
		]);

		context.setAuthors(() => [...context.authors, ...selectedAuthors]);

		setSelectedAuthors([]);
		setTitle('');
		setDescription('');
		setDuration(0);
	};

	const onCreateAuthorClickHandle = () => {
		if (authorName && authorName.length > 1) {
			const id = uuidV4();
			context.setAuthors((prev) => [...prev, { id, name: authorName }]);
			setAuthorName('');
			return;
		}
		alert('Please, enter correct author name');
	};

	const onAddAuthorClickHandle: React.MouseEventHandler<HTMLElement> = (e) => {
		const selectedAuthor = context.authors.find(
			(author) => author.id === e.currentTarget.id
		);

		setSelectedAuthors((prev) => [selectedAuthor, ...prev]);

		const restAuthors = context.authors.filter(
			(author) => author.id !== e.currentTarget.id
		);
		context.setAuthors(() => restAuthors);
	};

	const onDeleteAuthorClickHandle: React.MouseEventHandler<
		HTMLButtonElement
	> = (e) => {
		const deletedAuthorId = e.currentTarget.id;
		const deletedAuthor = selectedAuthors.find(
			(author) => author.id === e.currentTarget.id
		);
		setSelectedAuthors((prev) => {
			const newState = prev.filter((author) => author.id !== deletedAuthorId);
			return newState;
		});
		context.setAuthors((prev) => [...prev, { ...deletedAuthor }]);
	};

	const onChangeDescriptionHandle: React.ChangeEventHandler<
		HTMLTextAreaElement
	> = (e) => {
		setDescription(e.currentTarget.value);
	};

	return (
		<form className={s.createCourseForm} onSubmit={onSubmitHandle}>
			<div className={s.courseHeader}>
				<Input
					labelTxt='Title'
					name='title'
					value={title}
					onChange={onChangeTitleHandle}
					placeholder='Enter title'
				/>
				<div className={s.wrapperBtn}>
					<Button btnText='Create course' type='submit' />
					<Button btnText='Cancel' onClick={onCancelClick} />
				</div>
			</div>
			<div className={s.descriptionBlock}>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					className={s.descriptionText}
					placeholder='Enter description'
					onChange={onChangeDescriptionHandle}
					value={description}
				></textarea>
			</div>
			<div className={s.courseProperties}>
				<div className={s.leftSide}>
					<div className={s.addAuthorBlock}>
						<Title titleText='Add author' />
						<Input
							name='authorname'
							labelTxt='Author name'
							value={authorName}
							onChange={onChangeAuthorNameHandle}
							placeholder={'Enter author name...'}
						/>
						<Button
							btnText='Create author'
							onClick={onCreateAuthorClickHandle}
						/>
					</div>
					<div className={s.addDurationBlock}>
						<Title titleText='Duration' />
						<Input
							name='duration'
							labelTxt='Duration'
							value={duration.toString()}
							onChange={onChangeDurationHandle}
							placeholder={'Enter duration in minutes...'}
						/>
						<p className={s.durationTransformed}>
							Duration: <span>{durationTransform(duration)}</span> hours
						</p>
					</div>
				</div>
				<div className={s.rightSide}>
					<div className={s.authorListBlock}>
						<Title titleText='Authors' />
						{!!context.authors.length && (
							<ul className={s.authorsList}>
								{context.authors.map((author) => {
									return (
										<li key={author.id} className={s.authorListItem}>
											{author.name}
											<Button
												id={author.id}
												btnText='Add author'
												onClick={onAddAuthorClickHandle}
											/>
										</li>
									);
								})}
							</ul>
						)}
					</div>
					<div className={s.courseAuthorsBlock}>
						<Title titleText='Course authors' />
						{selectedAuthors.length ? (
							<SelectedAuthorsList
								selectedAuthors={selectedAuthors}
								onClick={onDeleteAuthorClickHandle}
							/>
						) : (
							<p style={{ fontWeight: '500' }}>Author list is empty</p>
						)}
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
