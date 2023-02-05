import { Link } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import LogOut from './components/LogOut/LogOut';

import s from './Header.module.css';

import { useAppSelector } from 'redux/hooks';
import { getIsAuth, getUserName } from 'redux/store/user/selectors';

const Header = () => {
	const userName = useAppSelector(getUserName);
	const isLoggined = useAppSelector(getIsAuth);

	return (
		<header>
			<div className={s.wrapper}>
				<Link to='/'>
					<Logo />
				</Link>

				<p className={s.logoText}>courses</p>
			</div>
			{isLoggined && <LogOut userName={userName} />}
		</header>
	);
};

export default Header;
