import { NewsItem } from '@hackernews/interfaces/mainInterfaces';
import { NewsEnums } from '@hackernews/redux/actions/News';
import { IAction } from './common';

export enum regularVariables {
  normalString =
  'normalString',
  numbers = 'numbers'
}

export interface normalStringData {
  [regularVariables.normalString]: string;
  [regularVariables.numbers]: number;

}

export type TopNewsAction = IAction<
  typeof NewsEnums.TOP_NEWS,
  NewsItem[]
>;

export type TopNewsActionSuccess = IAction<
  typeof NewsEnums.TOP_NEWS_SUCCESS,
  NewsItem[]
>;



export type MainNewsActions =
  | TopNewsActionSuccess
  | TopNewsAction;