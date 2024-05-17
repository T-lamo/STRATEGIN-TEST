import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs';
import { HttpSharedService } from '../../../shared-module/services/http-shared.service';
import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) =>
        this.httpSharedService
          .query('api/users', action.paginator)
          .post()
          .pipe(
            map((data: any) => {
              return UserActions.userLoaded({ ...data });
            })
          )
      )
    )
  );

  constructor(
    private action$: Actions,
    private httpSharedService: HttpSharedService
  ) {}
}
