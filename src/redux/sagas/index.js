import { all } from 'redux-saga/effects';
import getPersonSaga from './personSaga/getPersons';

export default function* rootSaga() {
  yield all([getPersonSaga()]);
}
