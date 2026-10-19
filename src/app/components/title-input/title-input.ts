import { booleanAttribute, Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-title-input',
  styleUrl: './title-input.css',
  templateUrl: './title-input.html',
})
export class TitleInput {
  title = input.required<string>();
  required = input<boolean>(false, { transform: booleanAttribute });
  desc = input<string>('');
}
