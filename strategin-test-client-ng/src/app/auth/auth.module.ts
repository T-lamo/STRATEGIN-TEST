import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers';
import { AuthGuard } from './auth.guard';
import { AuthEffects } from './auth.effects';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

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
