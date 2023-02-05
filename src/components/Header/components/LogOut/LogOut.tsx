import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';

import Button from 'common/Button';

import { getToken } from 'redux/store/user/selectors';
import { useAppDispatch } from 'redux/hooks';
import { userLogoutAction } from 'redux/store/user/actionCreators';

import s from './LogOut.module.css';

interface ILogoOutProps {
	userName?: string;
}

const LogOut: FC<ILogoOutProps> = ({ userName = 'Anonymous' }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = useAppSelector(getToken);

	useEffect(() => {
		if (!token) {
			localStorage.setItem('token', '');
			navigate('/login');
		}
	}, [token]);

	const onClickHandler = () => {
		dispatch(userLogoutAction(token));
	};

	return (
		<div className={s.wrapper}>
			<p className={s.userName}>{userName}</p>
			<Button btnText='Logout' onClick={onClickHandler} />
		</div>
	);
};

export default LogOut;
