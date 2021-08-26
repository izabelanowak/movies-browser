import { call, takeLatest, put, delay } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import { fetchList, fetchListError, fetchListSuccess } from "./listSlice";
import { apiKey, apiBase, language } from "./../common/commonValues";

function* fetchListHandler({ payload: { page, urlQuery, type } }) {

  const activePath =
    type === "movies"
      ? urlQuery
        ? `${apiBase}search/movie?api_key=${apiKey}${language}&query=${urlQuery}&page=${page}`
        : `${apiBase}discover/movie?api_key=${apiKey}${language}&sort_by=popularity.desc&page=${page}`
      : urlQuery
      ? `${apiBase}search/person?api_key=${apiKey}${language}&query=${urlQuery}&page=${page}`
      : `${apiBase}person/popular?api_key=${apiKey}${language}&page=${page}`;

  try {
    yield delay(1000);
    const data = yield call(getApiData, activePath);
    yield put(fetchListSuccess(data));
  } catch (error) {
    yield put(fetchListError());
  }
}

export function* watchFetchList() {
  yield takeLatest(fetchList.type, fetchListHandler);
}
