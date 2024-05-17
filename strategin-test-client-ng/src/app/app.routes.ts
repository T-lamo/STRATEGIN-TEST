import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AnnuaireLayoutComponent } from './stategin-annuaire/pages/annuaire-layout/annuaire-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AnnuaireLayoutComponent,
    loadChildren: () =>
      import('./stategin-annuaire/stategin-annuaire.module').then(
        (m) => m.StateginAnnuaireModule
      ),
    canActivate: [AuthGuard],
  },
];
