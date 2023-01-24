export interface IAuthor {
	id: string;
	name: string;
}

type GetAuthorsNameFn = (array: IAuthor[]) => string;

type getAuthorsIdArrayFn = (array: IAuthor[]) => string[];

type convertAuthorsIdToNamesFn = (
	array1: string[],
	array2: IAuthor[]
) => string;

export const getAuthorsName: GetAuthorsNameFn = (allAuthors) => {
	const authorsName = allAuthors.map((author) => author.name);

	return authorsName.join(', ');
};

export const getAuthorsIdArray: getAuthorsIdArrayFn = (allAuthors) => {
	const AuthorsIdArray = allAuthors.map((author) => author.id);

	return AuthorsIdArray;
};

export const convertAuthorsIdToNames: convertAuthorsIdToNamesFn = (
	authorsIdArray,
	allAuthors
) => {
	const authorsName = authorsIdArray.map((authorId) => {
		const foundAuthor = allAuthors.find((author) => author.id === authorId);

		return foundAuthor.name;
	});

	return authorsName.join(', ');
};
