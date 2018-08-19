
import axios from 'axios';
import {put, takeLatest, all} from 'redux-saga/effects';

function *getNews(){
	const json = yield axios('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
                 .then(response => response.json())
                 .catch(err => err);

     	  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
