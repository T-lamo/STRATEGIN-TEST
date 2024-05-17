import { createSelector } from '@ngrx/store';
import { selectAnnuaireState } from './annuaire.selector';

export const selectUsers = createSelector(
  selectAnnuaireState,
  (state) => state.users.data
);

export const selectUsersResponse = createSelector(
  selectUsers,
  ({ response }) => response
);

export const selectUsersPaginator = createSelector(
  selectUsers,
  ({ paginator }) => paginator
);
