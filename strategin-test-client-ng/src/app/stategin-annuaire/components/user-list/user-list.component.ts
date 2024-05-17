import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs';
import { UserActions } from '../../store/actions';
import { AnnuaireState } from '../../store/states';
import {
  selectUsersPaginator,
  selectUsersResponse,
} from '../../store/selectors/user.selector';
import { Paginator } from '../../../shared-module/model/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users = this.store.pipe(select(selectUsersResponse));

  paginator = this.store.pipe(select(selectUsersPaginator));
  constructor(
    private route: ActivatedRoute,
    private store: Store<AnnuaireState>
  ) {}
  ngOnInit() {}

  onPageChange(event: any) {
    const paginator = new Paginator({ ...event });
    this.store.dispatch(UserActions.loadUser({ paginator }));
  }
}
