import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-dash-header',
  styleUrl: './dash-header.css',
  templateUrl: './dash-header.html',
})
export class DashHeader {
  title = input.required<string>();
  desc = input.required<string>();
}
