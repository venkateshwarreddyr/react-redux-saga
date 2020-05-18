import {
  takeLatest,
  all,
  call,
  delay,
  put,
} from "redux-saga/effects";
import { DECREMENT_VALUE, INCREMENT_VALUE } from "./constraint";
import * as actions from "./action"
// import { increment, decrement } from "./action";

export function* incAsyncSaga(action) {
  try {
    //API CALL SIMULATION
    yield delay(1000);
    yield put(actions.increment());
  } catch (err) {
    yield console.log(err);
  }
}
export function* decAsyncSaga(action) {
  try {
    //API CALL SIMULATION
    yield delay(1000);
    yield put(actions.decrement());
  } catch (err) {
    yield console.log(err);
  }
}

export function* inc() {
  yield takeLatest(INCREMENT_VALUE, incAsyncSaga);
}
export function* dec() {
  yield takeLatest(DECREMENT_VALUE, decAsyncSaga);
}

export default function* rootSaga() {
  yield all([call(inc), call(dec), call(incAsyncSaga), call(decAsyncSaga)]);
}
