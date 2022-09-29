import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.login.value);
  }

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }
}
