import { Component, computed, input } from '@angular/core';
import { Kinds, Themes } from '../../shared/types/kinds.theme';

@Component({
  imports: [],
  selector: 'vira-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
  host: { class: 'inline-flex' }
})
export class Button {
  kind = input<Kinds>('default');
  theme = computed(() => Themes[this.kind()]);
}
