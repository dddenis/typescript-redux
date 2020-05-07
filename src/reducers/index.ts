import { combineReducers } from 'redux';
import { counterReducer } from './counter';
//We combine the different reducers we are going to use

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
