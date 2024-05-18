import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserActions } from '../annuaire-module/store/actions';
import { ILoginResponse } from '../shared-module/model/auth.model';
import { HttpSharedService } from '../shared-module/services/http-shared.service';
import { AuthActions } from './action-types';
import { AuthState } from './reducers';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.httpSharedService
          .query('api/login', action.auth)
          .post<ILoginResponse>()
          .pipe(
            tap((data) =>
              localStorage.setItem('strategin_token', JSON.stringify(data))
            ),
            map(({ data }: any) => {
              return AuthActions.onSuccess({ user: data.user });
            }),
            catchError((error) => of(AuthActions.onFailure({ error: error }))),
            tap(() => this.router.navigate([`/users`]))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.register),
      switchMap((action) =>
        this.httpSharedService
          .query('api/register', action.auth)
          .post<ILoginResponse>()
          .pipe(
            map(({ data }: any) => {
              this.router.navigate([`/login`]);
              return UserActions.addUser({ data: data.user });
            }),
            catchError((error) => of())
          )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem('strategin_token');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private router: Router,
    private httpSharedService: HttpSharedService,
    private store: Store<AuthState>
  ) {}
}
