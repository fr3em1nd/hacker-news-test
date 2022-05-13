import {
  TopNewsActionSuccess,
} from '@hackernews/redux/types/News';
import { TopNews } from '@hackernews/interfaces/mainInterfaces';
import { createAction } from '@hackernews/redux/types/common';


export enum NewsEnums {
  TOP_NEWS = 'TOP_NEWS',

}

export const fetchTopNewsSuccess = (
  topNews: TopNews[],
): TopNewsActionSuccess =>
  createAction(NewsEnums.TOP_NEWS, topNews);


