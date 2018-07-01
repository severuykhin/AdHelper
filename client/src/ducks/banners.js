import { List, Record } from 'immutable';

export const moduleName = 'banners';
export const ACTION_SET_CATEGORIES = `${moduleName}/ACTION_SET_CATEGORIES`;
export const ACTION_SET_ACTIVE_CATEGORY = `${moduleName}/ACTION_SET_ACTIVE_CATEGORY`;
export const ACTION_SET_BANNERS = `${moduleName}/ACTION_SET_BANNERS`;
export const ACTION_SET_IMAGE   = `${moduleName}/ACTION_SET_IMAGE`;
export const ACTION_SET_IMAGE_TO_ALL  = `${moduleName}/ACTION_SET_IMAGE_TO_ALL`;


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
	banners    : {}
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
			let bannersStore = {...state.get('banners')};
			bannersStore[payload.category] = payload.items;
			return state
					.set('banners', bannersStore);
		case ACTION_SET_IMAGE:
			let store = {...state.get('banners')};
			store[payload.category] = payload.items;
			return state
					.set('banners', store);
		case ACTION_SET_IMAGE_TO_ALL:
			const banners = {...state.get('banners')};
			banners[payload.category].map( i => i.img = payload.data );
			return state
					.set('banners', banners)
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

/**
 * Set image data to single banner 
 * @param {string} data Image base64 data
 * @param {string} id - Banner id
 * @param {string} slug - Banner category slug 
 * @param {array} banners - Category banners 
 */
export const setImage = (data, id, slug, banners) => {
	banners.forEach( banner => {
		if(banner.id === id) banner.img = data;
	});

	return {
		type    : ACTION_SET_IMAGE,
		payload : {
			category : slug,
			items : banners
		}
	}
}

/**
 * Set given image data to all avalible banners
 * @param { string } data  - base64 Image file content
 */
export const setImageToAll = (data, category) => {

	console.log(category);

	return {
		type : ACTION_SET_IMAGE_TO_ALL,
		payload : {data, category}
	}
}