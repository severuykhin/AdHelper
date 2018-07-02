import { List, Record } from 'immutable';
import categories from '../config/categories.json';
import banners from '../config/banners.json';


export const moduleName = 'banners';
export const ACTION_SET_CATEGORIES      = `${moduleName}/ACTION_SET_CATEGORIES`;
export const ACTION_SET_ACTIVE_CATEGORY = `${moduleName}/ACTION_SET_ACTIVE_CATEGORY`;
export const ACTION_SET_BANNERS         = `${moduleName}/ACTION_SET_BANNERS`;
export const ACTION_SET_IMAGE           = `${moduleName}/ACTION_SET_IMAGE`;
export const ACTION_SET_IMAGE_TO_ALL    = `${moduleName}/ACTION_SET_IMAGE_TO_ALL`;
export const ACTION_SET_IS_TOUCHED      = `${moduleName}/ACTION_SET_IS_TOUCHED`;

const InitialState = new Record({
	isLoading    : false,
	isTouched    : false,
	categories   : new List(categories),
	categorySlug : '',
	banners      : banners
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
					.set('categories', new List(payload)); 

		case ACTION_SET_ACTIVE_CATEGORY:
			return state.set('categorySlug', payload);

		case ACTION_SET_IS_TOUCHED:
			return state.set('isTouched', payload);

		case ACTION_SET_IMAGE:
			let store = {...state.get('banners')};
			store[payload.category] = payload.items;
			return state
					.set('banners', store)
					.set('isTouched', payload.isTouched);

		case ACTION_SET_IMAGE_TO_ALL:
			const banners = {...state.get('banners')};
			let isTouched = payload.data !== '';

			banners[payload.category].map( i => i.img = payload.data );
			return state
					.set('banners', banners)
					.set('isTouched', isTouched);

		default:
			return state;
	}
};

/**
 * Set active categories action
 * @param { array } categories - List of active categories 
 */
export const setCategories = categories => ({
	type : ACTION_SET_CATEGORIES,
	payload : categories
});

/**
 * Set active category slug
 * @param { string } categorySlug - Active category slug 
 */
export const setCategorySlug = categorySlug => ({
	type : ACTION_SET_ACTIVE_CATEGORY,
	payload : categorySlug
});

/**
 * Set active banners action
 * @param { array } banners 
 */
export const setBanners = banners => {

	let isTouched = false;

	// Avoid mutation
	[...banners].forEach( item => {
		if (item.img !== '') isTouched = true;
	});

	return {
		type : ACTION_SET_BANNERS,
		payload : { banners, isTouched }
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

	let isTouched = false;

	banners.forEach( banner => {
		if(banner.id === id) banner.img = data;
		if(banner.img !== '') isTouched = true;
	});

	return {
		type    : ACTION_SET_IMAGE,
		payload : {
			category : slug,
			items : banners,
			isTouched
		}
	}
}

/**
 * Set given image data to all avalible banners
 * @param { string } data  - base64 Image file content
 */
export const setImageToAll = (data, category) => {
	return {
		type : ACTION_SET_IMAGE_TO_ALL,
		payload : {data, category}
	}
}

export const setIsTouched = (categoryBanners) => {

	let isTouched = false;

	[...categoryBanners].forEach( i => {
		if (i.img !== '') isTouched = true;
	});

	return {
		type : ACTION_SET_IS_TOUCHED,
		payload : isTouched
	}

}