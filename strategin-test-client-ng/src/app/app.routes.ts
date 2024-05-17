import { Routes } from '@angular/router';
import { AuthGuard } from './auth-module/auth.guard';
import { AnnuaireLayoutComponent } from './annuaire-module/pages/annuaire-layout/annuaire-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AnnuaireLayoutComponent,
    loadChildren: () =>
      import('./annuaire-module/stategin-annuaire.module').then(
        (m) => m.StateginAnnuaireModule
      ),
    canActivate: [AuthGuard],
  },
];
