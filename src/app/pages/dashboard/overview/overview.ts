import { Component, inject } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { Button } from '../../../components/button/button';
import { Notification } from '../../../components/notification/notification';
import { Card } from '../../../components/card/card';
import { Pie } from '../../../widgets/pie/pie';
import { HBar } from '../../../widgets/hbar/hbar';
import { ToastService } from '../../../shared/toast.service';

@Component({
  imports: [DashHeader, Notification, Button, Card, Pie, HBar],
  selector: 'vira-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {
  private toaster = inject(ToastService);

  test() {
    this.toaster.show("به زودی", { kind: 'success' })
  }
}
