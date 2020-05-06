import { createAction } from 'typesafe-actions';

export interface User {
    id: string;
    name: string;
}

export const addOne = createAction('ADD_ONE')<number>();

export const subtractOne = createAction('SUBTRACT_ONE')<number>();

export const setUserAsActive = createAction('SET_USER_AS_ACTIVE')<User>();