import { FC } from 'react';

import s from './Title.module.css';

interface ITitleProps {
	titleText: string;
}

const Title: FC<ITitleProps> = ({ titleText }) => (
	<h3 className={s.title}>{titleText}</h3>
);

export default Title;
