import { FC, ReactElement } from 'react';

import { Navigate } from 'react-router-dom';

interface IProtectedRouteProps {
	isLoggined: boolean;
	children: ReactElement;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ isLoggined, children }) => {
	if (isLoggined) {
		return children;
	}
	return <Navigate to='/registration' replace />;
};

export default ProtectedRoute;
