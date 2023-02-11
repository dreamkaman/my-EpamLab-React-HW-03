import { FC } from 'react';

import sprite from 'images/svg/sprite.svg';

import styles from './Button.module.css';

interface IButtonProps {
	id?: string;
	btnText: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit';
	image?: string;
}

const Button: FC<IButtonProps> = ({
	id = '#',
	btnText,
	onClick,
	type = 'button',
	image = '',
}) => {
	return (
		<button id={id} className={styles.btn} type={type} onClick={onClick}>
			{!image && btnText}
			{image && (
				<svg className={styles.svg}>
					<use href={sprite + `#${image}`}></use>
				</svg>
			)}
		</button>
	);
};

export default Button;
