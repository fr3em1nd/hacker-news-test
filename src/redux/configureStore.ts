import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../../reactotron-config';
import {watcherSaga} from './sagas/rootSaga';
import News from '@hackernews/redux/reducers/News';
const reducers = combineReducers({
  News: News, 
});

export type RootState = ReturnType<typeof reducers>;
const sagaMonitor = (Reactotron as any).createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware), (Reactotron as any).createEnhancer()),
);

sagaMiddleware.run(watcherSaga);

export default store;
