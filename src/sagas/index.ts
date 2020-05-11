import { all } from 'redux-saga/effects';

import rootCounterSagas from './counter';

export default function* rootSaga() {
    yield all([
        rootCounterSagas(),
    ]);
}