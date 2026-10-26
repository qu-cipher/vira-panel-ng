import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-stat',
  styleUrl: './stat.css',
  templateUrl: './stat.html',
  host: { class: 'block text-xl text-black/50 dark:text-white/50' },
})
export class Stat {
  value = input.required<string | number>();
}
