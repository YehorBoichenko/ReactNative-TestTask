/**

Root saga responsible for initializing the worker sagas and watching for actions.
@module rootSaga
*/
import { Alert } from "react-native";
import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { SET_PAGE, CHANGE_PAGE, SET_LOADING } from "./types";
import {
  setCharacters,
  setPage,
  setError,
  setLoading,
} from "./characters/charactersActions";
import { getCharactersApiByPage } from "../services/api";
import { getPage } from "./characters/charactersSelectors"; // updated import


/**

Worker saga responsible for fetching the current page of characters from the API.

@generator

@function workerGetCurrent

@throws {Error} Something went wrong. Try again, please

@yields {Effect} - Effect for setting loading state to true.

@yields {Effect} - Effect for selecting the current page from the state.

@yields {Effect} - Effect for calling the getCharactersApiByPage function with the current page.

@yields {Effect} - Effect for setting characters data in the state.

@yields {Effect} - Effect for setting the current and total page numbers in the state.

@yields {Effect} - Effect for setting error message in the state.

@yields {Effect} - Effect for setting loading state to false.
*/
export function* workerGetCurrent() {
  try {
    yield put(setLoading(true));
    const page = yield select(getPage); // updated usage
    const data = yield call(getCharactersApiByPage(page.current || 1));

    if (!data) {
      Alert.alert("Something went wrong. Try again, please");
      yield put(setError(data.message));
      return;
    }
    if (data) {
      const total = Math.ceil(data.count / 10);
      const current = data.next ? data.next.split("page=")[1] - 1 : total;
      yield put(setCharacters(data.results));
      yield put(setPage({ current, total }));
    }
  } catch (error) {
    Alert.alert("Something went wrong. Try again, please");
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}
/**

Watcher saga responsible for connecting the worker saga to the action types.
@generator
@function watcherSaga
@yields {Effect} - Effect for taking the latest SET_PAGE action and running the workerGetCurrent function.
@yields {Effect} - Effect for taking the latest CHANGE_PAGE action and running the workerGetCurrent function.
*/

export function* watcherSaga() {
  console.log("Connected");
  yield all([
    takeLeading(SET_PAGE, workerGetCurrent),
    takeLatest(CHANGE_PAGE, workerGetCurrent),
  ]);
}
/**

The root saga responsible for initializing the watcher saga.
@generator
@function rootSaga
@yields {Effect} - Effect for running the watcherSaga function.
*/
export default function* rootSaga() {
  yield watcherSaga();
}
