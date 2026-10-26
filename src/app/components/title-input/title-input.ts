import { booleanAttribute, Component, computed, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-title-input',
  styleUrl: './title-input.css',
  templateUrl: './title-input.html',
})
export class TitleInput {
  type = input<'text' | 'number'>('text');
  title = input<string>('');
  required = input<boolean>(false, { transform: booleanAttribute });
  desc = input<string>('');
  placeholder = input<string>('');
  value = model<string>('');

  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
