import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { login } from '../auth.actions';
import { AuthState } from '../reducers';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form!.controls;
  }
  login() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.store.dispatch(login({ auth: { username, password } }));
    }
  }
}
