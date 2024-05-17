import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { register } from '../auth.actions';
import { AuthState } from '../reducers';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordLengthValidator(8)]],
    });
  }
  get f() {
    return this.form!.controls;
  }
  register() {
    if (this.form.valid) {
      const { username, email, password } = this.form.value;
      this.store.dispatch(register({ auth: { username, email, password } }));
    }
  }
  passwordLengthValidator(minLength: number) {
    return (control: FormControl) => {
      const password = control.value;
      if (password && password.length < minLength) {
        return { passwordLength: true };
      }
      return null;
    };
  }
}
