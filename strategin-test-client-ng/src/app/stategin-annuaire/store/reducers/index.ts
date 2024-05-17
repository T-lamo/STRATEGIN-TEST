import { combineReducers } from '@ngrx/store';
import { AnnuaireState } from '../states';
import { userReducer } from './user.reducer';

export const annuaireFeatureKey = 'annuaire';

export const annuaireReducer = combineReducers<AnnuaireState>({
  users: userReducer,
});
