import { ActionType, getType } from 'typesafe-actions';
import { createSelector } from 'reselect';

import * as counters from '../actions/counter';
import {addOne, setUserAsActive, subtractOne} from "../actions/counter";
export type CountersAction = ActionType<typeof counters>;

export interface CounterState {
    user: counters.User;
    counter: number;
}

const initialState: CounterState = {
    user: {id: '', name: ''},
    counter: 0
};

export function counterReducer(state = initialState, action: CountersAction): CounterState {
    switch (action.type) {
        case getType(addOne):
            return{
                ...state,
                counter: state.counter + action.payload
            };
        case getType(subtractOne):
            return{
                ...state,
                counter: state.counter - action.payload
            };
        case getType(setUserAsActive):
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}


export const getCount = (state: CounterState) => {
    console.log('state 1', state.counter);
    console.log('state 2', state);
    console.log('state 3', state.counterReducer)
    return  state.counter
};

export const getActiveUser = (state: CounterState) => state.user;
