import { Component, inject } from '@angular/core';
import { ToastKind, ToastService } from '../../shared/toast.service';
import { Kinds, SoftThemes } from '../../shared/types/kinds.theme';

const KINDS: Record<ToastKind, Kinds> = {
  info: 'sky',
  success: 'mint',
  warn: 'amber',
  error: 'ember',
};

@Component({
  imports: [],
  selector: 'vira-toaster',
  styleUrl: './toaster.css',
  templateUrl: './toaster.html',
})
export class Toaster {
  protected toast = inject(ToastService);
  protected theme = (kind: ToastKind) => SoftThemes[KINDS[kind]];
}
