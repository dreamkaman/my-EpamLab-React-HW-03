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
