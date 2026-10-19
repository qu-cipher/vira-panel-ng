import { Component, input } from '@angular/core';
import { RoundBox } from '../round-box/round-box';

@Component({
  imports: [RoundBox],
  selector: 'vira-dash-header',
  styleUrl: './dash-header.css',
  templateUrl: './dash-header.html',
})
export class DashHeader {
  title = input.required<string>();
  desc = input.required<string>();
}
