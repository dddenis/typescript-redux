import { put, all, takeLatest, call } from 'redux-saga/effects';
import { AnyAction } from 'redux'
import {
    addOne,
    addOneInit
} from '../actions/counter';

//editCounter just dispatchs an action which adds one to the counter

//AnyAction means the action can only be of one of the types of actions already made. Not very usefull

export function* editCounter(action : AnyAction) {
    console.log('action', action);
    try {
        yield put(addOne(action.payload));
    } catch (err) {
    }
}

//When an action with type ADD_ONE_INIT is dispatch we trigger editCounter

export default function* rootCounterSaga() {
    yield all([
        takeLatest('ADD_ONE_INIT', editCounter),
    ]);
}