import {StackNavigationProp} from '@react-navigation/stack';

export enum AppStackPages {
  NewScreen = 'NewScreen',
}
export type AppStackParamList = {
  [AppStackPages.NewScreen]: undefined;
};
export type NewScreenNavStackProps = StackNavigationProp<
  AppStackParamList,
  AppStackPages.NewScreen
>;