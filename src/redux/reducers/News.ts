import produce from 'immer';
import { NewsEnums } from '@hackernews/redux/actions/News';
import { MainNewsActions } from '@hackernews/redux/types/News';
import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import { mapNewsItem } from '@hackernews/utils/datahelpers/datamaps';

interface NewsState {
  TopNews: NewsItem[],
}
const initState: NewsState = {
  TopNews: [mapNewsItem({
    news: '',
    by: '',
    score: 0,
    time: 0,
    title: ''
  })
  ]

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
