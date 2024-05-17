import { createFeatureSelector } from '@ngrx/store';
import { AnnuaireState } from '../states';
import { annuaireFeatureKey } from '../reducers';

export const selectAnnuaireState =
  createFeatureSelector<AnnuaireState>(annuaireFeatureKey);
