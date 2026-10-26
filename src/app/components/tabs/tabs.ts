import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-tabs',
  styleUrl: './tabs.css',
  templateUrl: './tabs.html',
  host: { class: 'flex flex-row gap-8 border-b border-b-gray-300 dark:border-b-gray-700 p-2', role: 'tablist' },
})
export class Tabs {}
