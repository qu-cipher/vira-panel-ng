import { Injectable, signal } from "@angular/core";

export type ToastKind = 'info' | 'success' | 'warn' | 'error';

export interface Toast {
  id: number,
  title: string,
  kind: ToastKind
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  readonly toasts = signal<Toast[]>([]);

  show(title: string, opts: { kind?: ToastKind; duration?: number } = {}) {
    const toast: Toast = { id: this.nextId++, title, kind: opts.kind ?? 'info' };
    this.toasts.update(list => [...list, toast]);

    const duration = opts.duration ?? 4000;
    if (duration > 0) setTimeout(() => this.dismiss(toast.id), duration);
    return toast.id;
  }

  dismiss(id: number) {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
