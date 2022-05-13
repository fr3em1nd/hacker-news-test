import produce from 'immer';
import { NewsEnums } from '@hackernews/redux/actions/News';
import { MainNewsActions } from '@hackernews/redux/types/News';
import { NewsItem, TopNews } from '@hackernews/interfaces/mainInterfaces';
import { mapNewsItem } from '@hackernews/utils/datahelpers/datamaps';

interface NewsState {
  TopNews: TopNews[],
  NewsItem: NewsItem,
}
const initState: NewsState = {
  TopNews: [],
  NewsItem: mapNewsItem({
    news: '',
    by: '',
    score: 0,
    time: 0,
    title: ''
  }),
};

export default (
  state = initState,
  action: MainNewsActions,
): NewsState => {
  switch (action.type) {

    case NewsEnums.TOP_NEWS:
      return produce(state, draft => {
        draft.Profile = action.payload;
      });

    default:
      return state;
  }
};
