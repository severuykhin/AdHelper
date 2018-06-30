import { Record } from 'immutable';

export const moduleName = 'auth';
export const LOGIN_REQUEST = `${moduleName}/LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${moduleName}/LOGIN_SUCCESS`;

const ReducerRecord = Record({
	user    : null,
	error   : null,
	loading : false
});

export default function reducer(state = new ReducerRecord(), action) {
	const { type, payload } = action;

	switch(type) {
		case LOGIN_SUCCESS:
			return state
						.set('loading', false)
						.set('error', null)
						.set('user', payload);
		case LOGIN_REQUEST: 
			return state
						.set('loading', true);
		default:
			return state;
	}
}

export function login (email, password) {
	return {
		type : LOGIN_REQUEST,
		payload : { email, password }
	}
}

