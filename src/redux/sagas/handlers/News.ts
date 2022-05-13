import { all, call, put, takeLatest } from 'redux-saga/effects';
import LoggingService from '@hackernews/utils/logging/LoggingService';

import {

  NewsEnums,
  fetchTopNewsSuccess
} from '@hackernews/redux/actions/News';


import {
  getAuthorKarma,
  getTopStories, getTopStoriesContent
} from '@hackernews/redux/sagas/api/News';

import { NewsItem,Author } from '@hackernews/interfaces/mainInterfaces';
import { getRandom } from '@hackernews/utils/datahelpers/dataparser';
import { mapNewsItem } from '@hackernews/utils/datahelpers/datamaps';

const logError = (error: any) => {
  LoggingService.error(`API REQUEST:  ${error.message}`);
};




function* fetchTopNews() {
  try {
    let topStories: string = yield call(getTopStories);
    let parsedData = getRandom(JSON.parse(topStories), 10); //Create a React Native app that displays 10 randomized Hacker News top stories using the Hacker News API (https://github.com/HackerNews/API).
    let newsDataCompilation: NewsItem[] = [];
    for (let x = 0; parsedData.length > x; x++) {
      let topStories: NewsItem = JSON.parse(yield call(getTopStoriesContent, parsedData[x]));
      let authorKarma: Author = JSON.parse(yield call(getAuthorKarma, topStories.by));
      topStories.authorKarma = authorKarma.karma;
      newsDataCompilation.push(mapNewsItem(topStories))
    }
    newsDataCompilation.sort(function(a,b) {
      return a.score - b.score; //The stories must be listed in ascending order based on the stories score.
  });
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
