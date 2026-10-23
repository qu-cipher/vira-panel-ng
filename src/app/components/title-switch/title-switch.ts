import { Component, input } from '@angular/core';
import { Switch } from '../switch/switch';

@Component({
  imports: [Switch],
  selector: 'vira-title-switch',
  styleUrl: './title-switch.css',
  templateUrl: './title-switch.html',
})
export class TitleSwitch {
  title = input.required<string>();
  desc  = input<string>('');
}
