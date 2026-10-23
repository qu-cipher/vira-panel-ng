import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
  host: { class: 'block' },
})
export class Card {
  title = input.required<string>();
}
