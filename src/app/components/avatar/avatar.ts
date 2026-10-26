import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-avatar',
  styleUrl: './avatar.css',
  templateUrl: './avatar.html',
  host: { class: 'shrink-0 size-10 rounded-xl bg-gray-300 dark:bg-gray-900 text-black dark:text-white font-bold flex items-center justify-center select-none' },
})
export class Avatar {}
