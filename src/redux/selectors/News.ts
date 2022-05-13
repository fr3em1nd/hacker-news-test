import { RootState } from '@hackernews/redux/configureStore';
import { createSelector } from 'reselect';

export const selectNews = (state: RootState) => state.News;

export const mainNews = createSelector(
  selectNews,
  news => news.TopNews,
);
