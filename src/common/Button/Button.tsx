import { FC } from 'react';

import styles from './Button.module.css';

interface IButtonProps {
	id?: string;
	btnText: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit';
}

const Button: FC<IButtonProps> = ({
	id = '#',
	btnText,
	onClick,
	type = 'button',
}) => {
	return (
		<button id={id} className={styles.btn} type={type} onClick={onClick}>
			{btnText}
		</button>
	);
};

export default Button;
