import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-form-grid',
  styleUrl: './form-grid.css',
  templateUrl: './form-grid.html',
  host: { class: 'grid grid-cols-2 gap-2' },
})
export class FormGrid {}
