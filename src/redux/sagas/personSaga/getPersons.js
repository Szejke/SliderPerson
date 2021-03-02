import { call, put, takeEvery } from 'redux-saga/effects';
import { getPersonApi } from 'services/persons';

function* fetchPersons(action) {
  try {
    const newPersonApi = yield call(getPersonApi, action.payload);

    const newPerson = {
      id: newPersonApi.id,
      name: newPersonApi.name,
      login: newPersonApi.login,
      avatarUrl: newPersonApi.avatar_url,
    };
    yield put({ type: 'GET_PERSONS_SUCCESS', payload: newPerson });
  } catch (e) {
    yield put({ type: 'GET_PERSONS_FAILED', message: e.message });
  }
}

function* getPersonSaga() {
  yield takeEvery('GET_PERSONS_REQUESTED', fetchPersons);
}

export default getPersonSaga;
