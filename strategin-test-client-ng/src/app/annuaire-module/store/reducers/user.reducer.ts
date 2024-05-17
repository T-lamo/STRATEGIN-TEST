import { createReducer, on } from '@ngrx/store';
import { ApiCall } from '../../../shared-module/model/api-call';
import { IUser } from '../../../shared-module/model/auth.model';
import { UserActions } from '../actions';
import { produce } from 'immer';
import { ApiCallState } from '../../../shared-module/model/enum';
import { Paginator } from '../../../shared-module/model/table';
import { TABLE_ROWS } from '../../../shared-module/constants';

export interface UserState {
  data: ApiCall<IUser[]>;
}

export const initialUserState: UserState = {
  data: new ApiCall<IUser[]>({
    paginator: new Paginator({ first: 0, rows: TABLE_ROWS }),
  }),
};

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.userLoaded, (state, { data, paginator }) =>
    produce(state, (draft) => {
      draft.data = {
        response: data,
        paginator,
        state: ApiCallState.Success,
      };
    })
  )
);
