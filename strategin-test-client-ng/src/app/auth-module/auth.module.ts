import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthEffects } from './auth.effects';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import * as fromAuth from './reducers';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    AuthHeaderComponent,
    AuthPageComponent,
  ],
  exports: [LoginComponent],
  providers: [AuthGuard],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard],
    };
  }
}
