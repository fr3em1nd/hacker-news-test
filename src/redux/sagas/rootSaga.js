import { all } from 'redux-saga/effects'

import NewsSaga from './handlers/News'

export function* watcherSaga() {
  yield all([NewsSaga])
}
