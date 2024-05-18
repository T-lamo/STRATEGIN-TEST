import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthActions } from '../../../auth-module/action-types';
import { getuserUsername } from '../../../auth-module/auth.selectors';
import { AuthState } from '../../../auth-module/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  username = this.store.pipe(select(getuserUsername));
  constructor(private store: Store<AuthState>, private router: Router) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {}
}
