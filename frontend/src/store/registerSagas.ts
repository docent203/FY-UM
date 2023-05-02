import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

// actions import
import { registerActions } from "./registerSlice";

// api import
import { createDrawingApi } from "./api";

// 그림 등록 saga
function* onCreateDrawingStartAsync({ payload }: any): Generator<any, void, any> {
  const { formRequestSuccess, formRequestError } = registerActions;
  console.log("사가보내기전 payload", payload);
  try {
    const response = yield call(createDrawingApi, payload)
    console.log("응답성공!!", response)
    if (response.status === 200) {
        yield put(formRequestSuccess(response.data))
    }
  } catch (error: any) {
    yield put(formRequestError(error.response.data));
    return;
  }
}


// 사가들을 작동시킬 saga
function* onCreateDrawing() {
    const { formRequestStart } = registerActions;
    yield takeLatest(formRequestStart, onCreateDrawingStartAsync)
}


// 사가 export
export const registerSagas = [
    fork(onCreateDrawing),
]