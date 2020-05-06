import { createReducer } from 'typesafe-actions';

export type CounterState = typeof initialState;

export type User = CounterState['user'];

const initialState = {
  user: { id: '', name: '' },
  counter: 0,
};

export const counterReducer = createReducer(initialState, {
  ADD_ONE: (state, action) => ({
    ...state,
    counter: state.counter + action.payload,
  }),

  SUBTRACT_ONE: (state, action) => ({
    ...state,
    counter: state.counter - action.payload,
  }),

  SET_USER_AS_ACTIVE: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});

export const getCount = (state: CounterState) => state.counter;

export const getActiveUser = (state: CounterState) => state.user;
