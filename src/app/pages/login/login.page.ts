import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  fogotEmailPassword() {
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
    }, 1500);
  }

  login() {
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }
}
