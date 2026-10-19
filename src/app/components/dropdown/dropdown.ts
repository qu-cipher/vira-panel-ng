import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

export interface DropdownOption {
  value: string;
  label: string;
}

let nextId = 0;

@Component({
  imports: [],
  selector: 'vira-dropdown',
  styleUrl: './dropdown.css',
  templateUrl: './dropdown.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Dropdown {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  title = input.required<string>();
  options = input<readonly DropdownOption[]>([]);
  placeholder = input<string>('انتخاب کنید');
  required = input<boolean>(false, { transform: booleanAttribute });
  disabled = input<boolean>(false, { transform: booleanAttribute });
  desc = input<string>('');
  value = model<string | null>(null);

  id = `vira-dropdown-${nextId++}`;
  isOpen = signal(false);
  activeIndex = signal(-1);
  selected = computed(() => this.options().find((o) => o.value === this.value()));

  toggle() {
    if (this.isOpen()) this.close();
    else this.open();
  }

  open() {
    if (this.disabled() || this.options().length === 0) return;
    const index = this.options().findIndex((o) => o.value === this.value());
    this.activeIndex.set(Math.max(index, 0));
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  select(option: DropdownOption) {
    this.value.set(option.value);
    this.close();
  }

  optionId(index: number) {
    return `${this.id}-option-${index}`;
  }

  optionClass(option: DropdownOption, index: number) {
    const active = index === this.activeIndex() ? 'bg-gray-100 dark:bg-gray-800' : '';
    const text =
      option.value === this.value()
        ? 'text-black dark:text-white font-bold'
        : 'text-gray-700 dark:text-gray-300';
    return `${active} ${text}`;
  }

  onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        if (!this.isOpen()) {
          this.open();
          return;
        }
        const count = this.options().length;
        const step = event.key === 'ArrowDown' ? 1 : -1;
        this.activeIndex.update((i) => (i + step + count) % count);
        document.getElementById(this.optionId(this.activeIndex()))?.scrollIntoView({ block: 'nearest' });
        break;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        if (!this.isOpen()) {
          this.open();
          return;
        }
        const option = this.options()[this.activeIndex()];
        if (option) this.select(option);
        break;
      }
      case 'Escape':
      case 'Tab':
        this.close();
        break;
    }
  }

  onDocumentClick(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target as Node)) this.close();
  }
}
