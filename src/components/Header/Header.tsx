import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import LogOut from './components/LogOut/LogOut';

import { Context } from 'Context';

import s from './Header.module.css';

const Header = () => {
	const context = useContext(Context);

	return (
		<header>
			<div className={s.wrapper}>
				<Link to='/'>
					<Logo />
				</Link>

				<p className={s.logoText}>courses</p>
			</div>
			{context.isLoggined && <LogOut />}
		</header>
	);
};

export default Header;
