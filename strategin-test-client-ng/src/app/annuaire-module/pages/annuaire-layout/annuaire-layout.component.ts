import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { UserActions } from '../../store/actions';
import { AnnuaireState } from '../../store/states';

@Component({
  selector: 'app-annuaire-layout',
  templateUrl: './annuaire-layout.component.html',
  styleUrl: './annuaire-layout.component.scss',
})
export class AnnuaireLayoutComponent {
  subscription: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<AnnuaireState>
  ) {}
  ngOnInit() {
    this.subscription.push(
      this.route.data
        .pipe(
          tap(({ userData }) => {
            this.store.dispatch(UserActions.userLoaded({ ...userData }));
          })
        )
        .subscribe()
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach((subs) => {
      subs.unsubscribe();
    });
  }
}
