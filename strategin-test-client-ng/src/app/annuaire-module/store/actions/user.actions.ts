import { createAction, props } from '@ngrx/store';
import { IUser } from '../../../shared-module/model/auth.model';
import { Paginator } from '../../../shared-module/model/table';

export const loadUser = createAction(
  '[Users] Load Users',
  props<{ paginator: Paginator }>()
);
export const userLoaded = createAction(
  '[Users] users Loaded',
  props<{ data: IUser[]; paginator: Paginator }>()
);
export const addUser = createAction(
  '[Effect add user] Activity Loaded',
  props<{ data: IUser }>()
);
