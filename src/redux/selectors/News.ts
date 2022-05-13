import { RootState } from '@hackernews/redux/configureStore';
import { createSelector } from 'reselect';

export const selectUser = (state: RootState) => state.User;

export const mainProfile = createSelector(
  selectUser,
  profile => profile.Profile,
);
export const currentMainAuthentication = createSelector(
  selectUser,
  auth => auth.Authentication,
);

export const signupData = createSelector(
  selectUser,
  signup => signup.SignUp,
);

export const Preferences = createSelector(
  selectUser,
  pref => pref.Preferences
);
