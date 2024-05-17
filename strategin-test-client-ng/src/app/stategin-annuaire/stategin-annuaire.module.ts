import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAnnuaire from './store/reducers';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AnnuaireLayoutComponent } from './pages/annuaire-layout/annuaire-layout.component';
import { userResolver } from '../shared-module/resolvers/resolver';
import { SharedModule } from '../shared-module/shared.module';
import { AuthGuard } from '../auth/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AnnuaireEffects } from './store/effects';
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
