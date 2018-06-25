import { List, Record } from 'immutable';

export const moduleName = 'banners';
export const ACTION_SET_CATEGORIES = `${moduleName}/ACTION_SET_CATEGORIES`;

const categories = [
	{
		id    : 1,
		count : 3,
		name  : 'VK',
		slug  : 'vk'
	},
	{
		id    : 2,
		count : 10,
		name  : 'РСЯ',
		slug  : 'rsya'
	}
];

const InitialState = new Record({
	isLoading : false,
	categories : new List(categories)
});

export default function reducer (state = new InitialState(), action ) {
	const { type, payload } = action;

	console.log(action);

	switch(type) {
		case ACTION_SET_CATEGORIES:
			return state
					.set('categories', new List(payload))
		default:
			return state;
	}
};

export const setCategories = (categories) => ({
	type : ACTION_SET_CATEGORIES,
	payload : categories
});

