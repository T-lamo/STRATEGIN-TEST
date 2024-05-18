import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from '../auth-module/auth.guard';
import { userResolver } from '../shared-module/resolvers/resolver';
import { SharedModule } from '../shared-module/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { AnnuaireLayoutComponent } from './pages/annuaire-layout/annuaire-layout.component';
import { AnnuaireEffects } from './store/effects';
import * as fromAnnuaire from './store/reducers';

export const routes: Routes = [
  {
    path: '',
    component: AnnuaireLayoutComponent,
    resolve: { userData: userResolver },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UserListComponent,
      },
      { path: '**', redirectTo: '/register' },
    ],
  },
];

@NgModule({
  declarations: [AnnuaireLayoutComponent, UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature(AnnuaireEffects),
    StoreModule.forFeature(
      fromAnnuaire.annuaireFeatureKey,
      fromAnnuaire.annuaireReducer
    ),
  ],
})
export class StateginAnnuaireModule {}
