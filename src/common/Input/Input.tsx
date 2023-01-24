import { ChangeEvent, FC } from 'react';

import s from './Input.module.css';

interface IInputProps {
	name?: string;
	placeholder?: string;
	width?: number;
	labelTxt?: string;
	value?: string;
	type?: 'text' | 'password';
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({
	placeholder = '',
	width = 300,
	labelTxt = 'Label text',
	value = '',
	type = 'text',
	onChange,
}) => {
	return (
		<div className={s.wrapper}>
			<label htmlFor='searchText' className={s.labelTxt}>
				{labelTxt}
			</label>
			<input
				name='searchText'
				type={type}
				style={{ width: width + 'px', marginRight: '10px' }}
				className={s.txtInput}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
