import { Component, model, signal } from '@angular/core';
import { Separator } from '../../components/separator/separator';
import { form, required, email, minLength } from '@angular/forms/signals';
import { LoginModel } from '../../shared/types/login';
import { SignUpModel } from '../../shared/types/signup';
import { Input } from '../../components/auth-input/input';

@Component({
  imports: [Input, Separator],
  selector: 'vira-auth-auth',
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {
  login = signal<LoginModel>({
    username: '',
    password: ''
  });

  singup = signal<SignUpModel>({
    username: '',
    email: '',
    password: ''
  });

  loginForm = form(this.login, (l) => {
    required(l.username, { message: "Username can't be blank." });
    required(l.password, { message: "Password can't be blank." });
  });
  signupForm = form(this.singup, (s) => {
    required(s.username, { message: "Username can't be blank." });
    required(s.email, { message: "Email can't be blank." })
    required(s.password, { message: "Password can't be blank." });

    email(s.email, { message: "Enter a valid email." });
    minLength(s.password, 8, { message: 'At least 8 characters' });
  });

  card = model<'login' | 'signup'>('signup');

  loginSubmit(e: Event) {
    e.preventDefault();
  }

  signUpSubmit(e: Event) {
    e.preventDefault();
  }
}
