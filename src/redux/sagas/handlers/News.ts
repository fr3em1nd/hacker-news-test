import { all, call, put, takeLatest } from 'redux-saga/effects';
import LoggingService from '@hackernews/utils/logging/LoggingService';

import {

  NewsEnums,
  fetchTopNewsSuccess
} from '@hackernews/redux/actions/News';


import {
  getTopStories
} from '@hackernews/redux/sagas/api/News';


import { TopNewsAction } from '@hackernews/redux/types/News';
import { NewsItem } from '@hackernews/interfaces/mainInterfaces';

const logError = (error: any) => {
  LoggingService.error(`Device Settings :: error: ${error.message}`);
  LoggingService.error('Stack', error.stack);
};


function* fetchTopNews(action: TopNewsAction) {
  try {
    let topStories: any = yield call(getTopStories, null);
    const shuffleNews = topStories.sort(() => 0.5 - Math.random());
    let selectedTopTenNews = shuffleNews.slice(0, 10);
    console.log('selectedTopTenNews', selectedTopTenNews);

    // yield put(fetchTopNewsSuccess(mapMainAuthentication(data)));

  } catch (error) {
    logError(error);
  }
}


export default all([
  takeLatest(
    NewsEnums.TOP_NEWS,
    fetchTopNews,
  ),
]);
