import produce from 'immer';
import { NewsEnums } from '@hackernews/redux/actions/News';
import { MainNewsActions } from '@hackernews/redux/types/News';
import { NewsItem, TopNews } from '@hackernews/interfaces/mainInterfaces';
import { mapNewsItem } from '@hackernews/utils/datahelpers/datamaps';

interface NewsState {
  TopNews: TopNews[],
}
const initState: NewsState = {
  TopNews: [],
};

export default (
  state = initState,
  action: MainNewsActions,
): NewsState => {
  switch (action.type) {

    case NewsEnums.TOP_NEWS:
      return produce(state, draft => {
        draft.TopNews = action.payload;
      });

    default:
      return state;
  }
};
