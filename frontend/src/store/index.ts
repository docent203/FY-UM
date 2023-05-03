import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import listReducer from "./listSlice";
import registerReducer from "./registerSlice"

// 스토어 통합관련(리듀서들, 사가들)
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// saga 관리

// 관리하는 슬라이스들

// rootReducers by using combineReducers
const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  user: userReducer,
  list: listReducer,
  register: registerReducer,
});

// rootSaga
function* rootSaga() {
  //   yield all();
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// Store 구성 -> configureStore
// 여러가지 리듀서를 하나로 합칠 수 있음
// 왜냐면 store는 리듀서 하나만 가져야되서 합침
const store = configureStore({
  // 여러 슬라이서의 리듀서를 합침
  reducer: rootReducers,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

// 외부에서 쓰려고
export default store;

export type RootState = ReturnType<typeof rootReducers>;

// react-redux 라이브러리를 깔면
// 귀찮게 subscribe 함수 쓸 필요없음
// import { createStore } from 'redux'
