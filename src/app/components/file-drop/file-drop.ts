import { booleanAttribute, Component, input, model, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'vira-file-drop',
  styleUrl: './file-drop.css',
  templateUrl: './file-drop.html',
})
export class FileDrop {
  title = input.required<string>();
  innerTitle = input<string>('بارگذاری فایل');
  desc = input<string>('');
  // same format as the native input's accept, e.g. ".pdf,image/*"
  accept = input<string>('');
  multiple = input<boolean>(false, { transform: booleanAttribute });
  required = input<boolean>(false, { transform: booleanAttribute });
  disabled = input<boolean>(false, { transform: booleanAttribute });
  files = model<File[]>([]);

  isDragging = signal(false);

  onFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.addFiles(Array.from(input.files ?? []));
    // reset so picking the same file again still fires a change event
    input.value = '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (this.disabled()) return;
    this.isDragging.set(true);
  }

  onDragLeave() {
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
    if (this.disabled()) return;
    this.addFiles(Array.from(event.dataTransfer?.files ?? []));
  }

  remove(file: File) {
    this.files.update((files) => files.filter((f) => f !== file));
  }

  formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  private addFiles(incoming: File[]) {
    // the native accept attribute doesn't filter dropped files, so check here too
    const accepted = incoming.filter((f) => this.isAccepted(f));
    if (accepted.length === 0) return;
    if (this.multiple()) this.files.update((files) => [...files, ...accepted]);
    else this.files.set([accepted[0]]);
  }

  private isAccepted(file: File) {
    const rules = this.accept()
      .split(',')
      .map((r) => r.trim().toLowerCase())
      .filter(Boolean);
    if (rules.length === 0) return true;

    const name = file.name.toLowerCase();
    const type = file.type.toLowerCase();
    return rules.some((rule) => {
      if (rule.startsWith('.')) return name.endsWith(rule);
      if (rule.endsWith('/*')) return type.startsWith(rule.slice(0, -1));
      return type === rule;
    });
  }
}
