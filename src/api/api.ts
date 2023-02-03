import axios from 'axios';

interface ISignUpUserReq {
	name: string;
	email: string;
	password: string;
}

export interface ISignUpUserRes {
	data: { successful: boolean; result: string };
	status: number;
	statusText: string;
}

export interface ILoginUserReq {
	email: string;
	password: string;
}

export interface IData {
	successful: boolean;
	result: string; //token
	user: ILoginUserReq;
}

interface ILoginUserRes {
	status: number;
	data: IData;
}

interface ILogoutUserRes {
	status: number;
}

export type SignUpUserFn = (user: ISignUpUserReq) => Promise<ISignUpUserRes>;

export type LoginUserFn = (user: ILoginUserReq) => Promise<ILoginUserRes>;

export type LogOutUserFn = (token: string) => Promise<ILogoutUserRes>;

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const signUpUser: SignUpUserFn = async ({ name, email, password }) => {
	try {
		const response: ISignUpUserRes = await instance.post('/register', {
			name,
			email,
			password,
		});
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const loginUser: LoginUserFn = async ({ email, password }) => {
	try {
		const response: ILoginUserRes = await instance.post('/login', {
			email,
			password,
		});

		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const logOutUser: LogOutUserFn = async (token) => {
	try {
		const response = await instance.delete('/logout', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getAllCourses = async () => {
	try {
		const response = await instance.get('/courses/all');
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getAllAuthors = async () => {
	try {
		const response = await instance.get('/authors/all');
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
