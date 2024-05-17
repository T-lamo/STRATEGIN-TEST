import { createAction, props } from '@ngrx/store';
import { ILogin, IUser } from '../shared-module/model/auth.model';

export const login = createAction(
  '[Login component] Auth Login',
  props<{ auth: ILogin }>()
);

export const register = createAction(
  '[Register component] register',
  props<{ auth: ILogin }>()
);

export const logout = createAction('[Top Menu] Logout');

export const onSuccess = createAction(
  '[Auth Effect] set user in store',
  props<{ user: IUser }>()
);

export const resetUser = createAction(
  '[App Component] reset user in store using local data',
  props<{ user: IUser }>()
);

export const onFailure = createAction(
  '[Auth Effect] error',
  props<{ error: any }>()
);
