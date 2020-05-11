import { createAction } from 'typesafe-actions';
import { User } from '../reducers/counter';

export const addOneInit = createAction('ADD_ONE_INIT')<number>();

export const addOne = createAction('ADD_ONE')<number>();

export const subtractOne = createAction('SUBTRACT_ONE')<number>();

export const setUserAsActive = createAction('SET_USER_AS_ACTIVE')<User>();
