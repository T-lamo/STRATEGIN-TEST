import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { HttpSharedService } from '../shared-module/services/http-shared.service';
import { AuthState } from './reducers';
import { Store } from '@ngrx/store';
import { ILoginResponse } from '../shared-module/model/auth.model';
import { of } from 'rxjs';
import { UserActions } from '../stategin-annuaire/store/actions';

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
