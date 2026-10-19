import { Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { RoundBox } from '../../../components/round-box/round-box';
import { Button } from '../../../components/button/button';
import { Notification } from '../../../components/notification/notification';

@Component({
  imports: [DashHeader, Notification, Button],
  selector: 'vira-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {}
