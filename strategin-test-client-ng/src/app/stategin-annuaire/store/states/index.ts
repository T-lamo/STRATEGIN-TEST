import { UserState, initialUserState } from '../reducers/user.reducer';

export interface AnnuaireState {
  users: UserState;
}

export const initialAnnuaireState: AnnuaireState = {
  users: initialUserState,
};
