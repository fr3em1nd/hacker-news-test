import { TopNews } from '@hackernews/interfaces/mainInterfaces';
import { NewsEnums } from '@hackernews/redux/actions/News';
import { IAction } from './common';

export enum regularVariables {
normalString=
 'normalString',
 numbers = 'numbers'
}

export interface normalStringData {
  [regularVariables.normalString]: string;
  [regularVariables.numbers]: number;

}

export type TopNewsAction = IAction<
  typeof NewsEnums.TOP_NEWS,
  TopNews
>;

export type TopNewsActionSuccess = IAction<
  typeof NewsEnums.TOP_NEWS,
  TopNews
>;

 

export type MainNewsActions =
  | TopNewsActionSuccess
  | TopNewsAction
 
  ;