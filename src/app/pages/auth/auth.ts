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
    required(l.username, { message: 'نام کاربری نمی‌تواند خالی باشد.' });
    required(l.password, { message: 'رمز عبور نمی‌تواند خالی باشد.' });
  });
  signupForm = form(this.singup, (s) => {
    required(s.username, { message: 'نام کاربری نمی‌تواند خالی باشد.' });
    required(s.email, { message: 'ایمیل نمی‌تواند خالی باشد.' })
    required(s.password, { message: 'رمز عبور نمی‌تواند خالی باشد.' });

    email(s.email, { message: 'یک ایمیل معتبر وارد کنید.' });
    minLength(s.password, 8, { message: 'حداقل ۸ کاراکتر' });
  });

  card = model<'login' | 'signup'>('signup');

  loginSubmit(e: Event) {
    e.preventDefault();
  }

  signUpSubmit(e: Event) {
    e.preventDefault();
  }
}
