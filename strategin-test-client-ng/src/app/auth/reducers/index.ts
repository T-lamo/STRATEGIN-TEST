import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { produce } from 'immer';
import { ILogin, IUser } from '../../shared-module/model/auth.model';
import { ApiCallState } from '../../shared-module/model/enum';
import { ApiCall } from '../../shared-module/model/api-call';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: ApiCall<IUser>;
}

export const initialAuthState: AuthState = {
  user: new ApiCall<IUser>(),
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) =>
    produce(state, (draft) => {
      draft.user = { ...draft.user, state: ApiCallState.Loading };
    })
  ),
  on(AuthActions.logout, (state, action) =>
    produce(state, (draft) => {
      localStorage.removeItem('strategin_token');
      draft.user = new ApiCall<IUser>();
    })
  ),
  on(AuthActions.onFailure, (state, action) =>
    produce(state, (draft) => {
      draft.user = new ApiCall<IUser>();
      draft.user = { ...draft.user, state: ApiCallState.Error };
    })
  ),
  on(AuthActions.onSuccess, (state, action) =>
    produce(state, (draft) => {
      draft.user!.response! = action.user;
      draft.user!.state = ApiCallState.Success;
    })
  ),
  on(AuthActions.resetUser, (state, action) =>
    produce(state, (draft) => {
      draft.user.response = action.user;
      draft.user!.state = ApiCallState.Success;
    })
  )
);
