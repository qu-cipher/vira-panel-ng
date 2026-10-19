import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-notification',
  styleUrl: './notification.css',
  templateUrl: './notification.html',
})
export class Notification {
  title = input.required<string>();
  desc = input.required<string>();
}
