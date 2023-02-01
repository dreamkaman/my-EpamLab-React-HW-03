import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/store';

import Input from 'common/Input';
import Button from 'common/Button';

import { loginUser } from 'api/api';
import { userLoginAction } from 'redux/store/user/actionCreators';

import s from './Login.module.css';
import { Context } from '../../Context';

export interface IReqUser {
	email: string;
	password: string;
}

const Login = () => {
	const navigate = useNavigate();
	const context = useContext(Context);
	const dispatch = useAppDispatch();

	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const onChangeEmailHandle: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setEmailValue(e.target.value);
	};

	const onChangePasswordHandle: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setPasswordValue(e.target.value);
	};

	const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		const reqUser: IReqUser = { email: emailValue, password: passwordValue };

		///----------------
		dispatch(userLoginAction(reqUser));
		///----------------

		const response = await loginUser(reqUser);

		if (response?.status === 201) {
			const token = response?.data?.result.split(' ')[1];

			localStorage.setItem('token', token);

			context.setIsLoggined(true);

			navigate('/courses');
		}
	};

	return (
		<form className={s.loginForm} onSubmit={onSubmitHandle}>
			<h2>Login</h2>
			<Input
				placeholder='Enter email'
				labelTxt='Email'
				value={emailValue}
				onChange={onChangeEmailHandle}
			/>
			<Input
				placeholder='Enter password'
				labelTxt='Password'
				value={passwordValue}
				type='password'
				onChange={onChangePasswordHandle}
			/>
			<Button btnText='Login' type='submit' />
			<p className={s.warning}>
				If you have an account you can{' '}
				<Link to='/registration' className={s.registrationLink}>
					Registration
				</Link>
			</p>
		</form>
	);
};

export default Login;
