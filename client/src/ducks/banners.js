import { List, Record } from 'immutable';

export const moduleName = 'banners';
export const ACTION_SET_CATEGORIES = `${moduleName}/ACTION_SET_CATEGORIES`;
export const ACTION_SET_ACTIVE_CATEGORY = `${moduleName}/ACTION_SET_ACTIVE_CATEGORY`;
export const ACTION_SET_BANNERS    = `${moduleName}/ACTION_SET_BANNERS`;


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
	categories : new List(categories),
	banners    : new Record({})
});

/**
 * Banners reducer
 * @param {object} state - Current app state 
 * @param {object} action - New data 
 */
export default function reducer (state = new InitialState(), action ) {
	const { type, payload } = action;
	switch(type) {
		case ACTION_SET_CATEGORIES:
			return state
					.set('categories', new List(payload))
		case ACTION_SET_BANNERS:
			const bannersStore = state.get('banners')().toJS();
			bannersStore[payload.category] = payload.items;
			return state
					.set('banners', new Record(bannersStore));
		default:
			return state;
	}
};

/**
 * Set active categories action
 * @param {array} categories - List of active categories 
 */
export const setCategories = categories => ({
	type : ACTION_SET_CATEGORIES,
	payload : categories
});

/**
 * Set active banners action
 * @param {array} banners 
 */
export const setBanners = banners => {
	return {
		type : ACTION_SET_BANNERS,
		payload : banners
	}
};

