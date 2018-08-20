
import axios from 'axios';
import {put, takeLatest, all} from 'redux-saga/effects';

function *getNews(){

	let data;
	const json = yield axios('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cee62291e6f04d7e89859dec2c2b4b7e')
                 .then( (response) => {
                 	data = response.data.articles;
                 })
                 .catch(err => err);

     	  yield put({ type: "NEWS_RECEIVED", data: data });
}

function* actionWatcher() {
     yield takeLatest('GET_NEWS', getNews)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
