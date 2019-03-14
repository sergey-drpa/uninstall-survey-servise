import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // import { NavController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RegisterComponent } from '../register/register.component';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validations_form: FormGroup;
  errorMessage: String = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  private matcher: MyErrorStateMatcher;

  constructor(
    private router: Router, // private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigateByUrl('boards'); // this.navCtrl.push(MenuPage);
      }, err => {
        this.errorMessage = err.message;
      });
  }

  goRegisterPage() {
    this.router.navigateByUrl('register'); // this.navCtrl.push(RegisterPage);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
