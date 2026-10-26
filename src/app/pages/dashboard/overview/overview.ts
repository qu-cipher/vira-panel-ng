import { Component, inject } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { Button } from '../../../components/button/button';
import { Notification } from '../../../components/notification/notification';
import { Card } from '../../../components/card/card';
import { Pie } from '../../../widgets/pie/pie';
import { HBar } from '../../../widgets/hbar/hbar';
import { ToastService } from '../../../shared/toast.service';

import { Page } from '../../../components/page/page';
import { CardGrid } from '../../../components/card-grid/card-grid';
import { Stat } from '../../../components/stat/stat';

@Component({
  imports: [DashHeader, Notification, Button, Card, Pie, HBar, Page, CardGrid, Stat],
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
