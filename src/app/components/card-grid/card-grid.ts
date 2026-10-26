import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-card-grid',
  styleUrl: './card-grid.css',
  templateUrl: './card-grid.html',
  host: { class: 'grid grid-cols-1 md:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.5fr_1fr_1fr] gap-2' },
})
export class CardGrid {}
