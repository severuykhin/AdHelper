import { List, Record } from 'immutable';

export const moduleName = 'banner';
export const ACTION_SET_IMAGE  = `${moduleName}/ACTION_SET_IMAGE`;
export const ACTION_SET_ERRORS = `${moduleName}/ACTION_SET_ERRORS`;

export default function reducer(state, action) {

	const { type, payload } = action;

	switch(type) {
		default: return state;
	}

}