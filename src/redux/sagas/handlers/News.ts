import { all, call, put, takeLatest } from 'redux-saga/effects';
import LoggingService from '@hackernews/utils/logging/LoggingService';

import {

  NewsEnums,
  fetchTopNewsSuccess
} from '@hackernews/redux/actions/News';


import {
  getTopStories, getTopStoriesContent
} from '@hackernews/redux/sagas/api/News';

import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import { getRandom } from '@hackernews/utils/datahelpers/dataparser';
import { mapNewsItem } from '@hackernews/utils/datahelpers/datamaps';

const logError = (error: any) => {
  LoggingService.error(`API REQUEST:  ${error.message}`);
};




function* fetchTopNews() {
  try {
    let topStories: string = yield call(getTopStories);
    let parsedData = getRandom(JSON.parse(topStories), 10)
    let newsDataCompilation: NewsItem[] = [];
    for (let x = 0; parsedData.length > x; x++) {
      let topStories: NewsItem = JSON.parse(yield call(getTopStoriesContent, parsedData[x]));
      newsDataCompilation.push(mapNewsItem(topStories))
    }
    yield put(fetchTopNewsSuccess(newsDataCompilation));
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
