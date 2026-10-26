import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'vira-field',
  styleUrl: './field.css',
  templateUrl: './field.html',
  host: { class: 'block' },
})
export class Field {
  field = input.required<FieldTree<string>>();
}
