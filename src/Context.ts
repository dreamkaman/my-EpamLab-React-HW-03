import { createContext } from 'react';

import { IAuthor } from 'helpers/authorsString';

export interface ICourseBase {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
}

export interface ICourse extends ICourseBase {
	authors: string[];
}

export type TonClickHandle = (value: boolean) => void;

interface IContext {
	isLoggined: boolean;
	onClickHandle: TonClickHandle;
	filter: string;
	setFilter: (filter: string) => void;
	courses: ICourse[];
	setCourses: (cb: (prev: ICourse[]) => ICourse[]) => void;
	authors: IAuthor[];
	setAuthors: (cb: (prev: IAuthor[]) => IAuthor[]) => void;
	setIsLoggined: (value: boolean) => void;
}

export const Context = createContext<IContext | null>(null);
