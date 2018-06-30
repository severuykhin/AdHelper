import { combineReducers } from 'redux';
import createHistory from "history/createBrowserHistory";
import {
	routerReducer as router,
	routerMiddleware
  } from "react-router-redux";

import { reducer as form } from 'redux-form';

import bannersReducer, { moduleName as bannersModule } from '../ducks/banners';
import authReducer, { moduleName as authModule } from '../ducks/auth';


export const history = createHistory();

export const browserRouterMiddleware = routerMiddleware(history);

export default combineReducers({
	[bannersModule] : bannersReducer,
	[authModule]    : authReducer,
	router,
	form
});