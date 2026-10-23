import { booleanAttribute, Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-switch',
  styleUrl: './switch.css',
  templateUrl: './switch.html',
})
export class Switch {
  disabled = input<boolean>(false, { transform: booleanAttribute });
  checked = model<boolean>(false);

  onChange(event: Event) {
    this.checked.set((event.target as HTMLInputElement).checked);
  }
}
