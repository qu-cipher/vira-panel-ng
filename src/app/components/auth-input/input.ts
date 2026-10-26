import { Component, input, signal } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'vira-auth-input',
  styleUrl: './input.css',
  templateUrl: './input.html',
})
export class AuthInput {
  to = input.required<FieldTree<string>>();
  kind = input.required<'email' | 'username' | 'password'>();
  size = signal(24);
}
