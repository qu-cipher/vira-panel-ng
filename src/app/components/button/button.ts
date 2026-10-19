import { Component, computed, input } from '@angular/core';

export type ButtonKind = 'paper' | 'mint' | 'sky' | 'ember' | 'ocean' | 'ink';

const KINDS: Record<ButtonKind, string> = {
  paper: 'bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
  mint: 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700',
  sky: 'bg-sky-400 text-sky-950 border-sky-500 hover:bg-sky-500',
  ember: 'bg-red-600 text-white border-red-700 hover:bg-red-700',
  ocean: 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700',
  ink: 'bg-gray-950 dark:bg-white text-white dark:text-black border-gray-950 dark:border-white hover:bg-gray-800 dark:hover:bg-white/80',
};

@Component({
  imports: [],
  selector: 'vira-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  kind = input<ButtonKind>('paper');
  theme = computed(() => KINDS[this.kind()]);
}
