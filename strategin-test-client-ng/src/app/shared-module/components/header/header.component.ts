import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { AuthState } from '../../../auth/reducers';
import { AuthActions } from '../../../auth/action-types';
import { Router } from '@angular/router';
import { getuserUsername } from '../../../auth/auth.selectors';

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
