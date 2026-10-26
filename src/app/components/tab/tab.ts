import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-tab',
  styleUrl: './tab.css',
  templateUrl: './tab.html',
})
export class Tab {
  active = input<boolean>(false, { transform: booleanAttribute });
}
