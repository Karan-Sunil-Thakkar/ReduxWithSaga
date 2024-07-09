import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

function* userlist() {
  // console.warn('Saga Function called ');
  // Yield is used to do aync await function into genrator function that is (function*)
  const url = 'https://fakestoreapi.com/products';
  let payload = yield fetch(url);
  payload = yield payload.json();
  // console.log(data, 'data in saga ' )
  yield put({type:SET_USER_DATA, payload})
}

function* SagaData() {
  yield takeEvery(USER_LIST, userlist);
}
export default SagaData;
