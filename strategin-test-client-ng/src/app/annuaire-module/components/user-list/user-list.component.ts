import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Paginator } from '../../../shared-module/model/table';
import { UserActions } from '../../store/actions';
import {
  selectUsersPaginator,
  selectUsersResponse,
} from '../../store/selectors/user.selector';
import { AnnuaireState } from '../../store/states';

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
