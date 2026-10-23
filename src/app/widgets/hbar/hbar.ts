import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-hbar',
  styleUrl: './hbar.css',
  templateUrl: './hbar.html',
  host: { class: 'block w-full' },
})
export class HBar {
  percent = input<number>(25);

  width = computed(() => Math.min(100, Math.max(0, this.percent())));
}
