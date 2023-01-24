import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'common/Button';

import s from './CourseCard.module.css';

import { ICourseBase } from 'Context';
import { durationTransform } from 'helpers/pipeDuration';

interface ICourseCardProps extends ICourseBase {
	authors: string;
}

const CourseCard: FC<ICourseCardProps> = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	const navigate = useNavigate();

	const onShowCourseClickHandle = () => {
		navigate(`/courses/${id}`);
	};

	return (
		<li className={s.courseCard}>
			<div className={s.courseCardLeftSide}>
				<h3 className={s.title}>{title}</h3>
				<p className={s.description}>{description}</p>
			</div>
			<div className={s.courseCardRightSide}>
				<p>
					<span>Author: </span>
					{authors}
				</p>
				<p>
					<span>Duration: </span>
					{durationTransform(duration)} hours
				</p>
				<p>
					<span>Created: </span>
					{creationDate}
				</p>
				<Button
					id={id}
					btnText='Show course'
					onClick={onShowCourseClickHandle}
				/>
			</div>
		</li>
	);
};

export default CourseCard;
