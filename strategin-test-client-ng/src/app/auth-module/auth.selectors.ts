import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user.response
);

export const getuser = createSelector(
  selectAuthState,
  (auth) => auth.user.response!
);

export const getuserId = createSelector(getuser, ({ id }) => id);

export const getuserUsername = createSelector(
  getuser,
  ({ username }) => username
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedin) => !loggedin);
