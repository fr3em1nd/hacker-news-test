import {
  TopNewsAction,
  TopNewsActionSuccess,
} from '@hackernews/redux/types/News';
import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import { createAction } from '@hackernews/redux/types/common';


export enum NewsEnums {
  TOP_NEWS = 'TOP_NEWS',

}

export const fetchTopNews = (): TopNewsAction =>
  createAction(NewsEnums.TOP_NEWS, null);


export const fetchTopNewsSuccess = (
  topNews: NewsItem[],
): TopNewsActionSuccess =>
  createAction(NewsEnums.TOP_NEWS, topNews);


