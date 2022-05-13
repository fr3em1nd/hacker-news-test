import { all, call, put, takeLatest } from 'redux-saga/effects';
import LoggingService from '@hackernews/utils/logging/LoggingService';

import {
  PushMainProfileAction,
} from '@hackernews/redux/types/News';


import { mapPreferences, mapProfile } from '@hackernews/utils/dbhelpers/dbMaps';

import {
 
  NewsEnums,
  fetchTopNewsSuccess
} from '@hackernews/redux/actions/News';

 
import {
  getTopStories
} from '@hackernews/redux/sagas/api/News';

 
import { TopNewsAction } from '@hackernews/redux/types/News';
import { TopNews } from '@hackernews/interfaces/mainInterfaces';

const logError = (error: any) => {
  LoggingService.error(`Device Settings :: error: ${error.message}`);
  LoggingService.error('Stack', error.stack);
};
 

function* fetchTopNews(action: TopNewsAction) {
  try {
    let registrationResponse: TopNews = yield call(getTopStories, action.payload);
    
    yield put(fetchTopNewsSuccess(mapMainAuthentication(data)));
    yield call(requestUpdateLoginInfo, data); //update the storage so the user will automatically login once they close the app.
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
