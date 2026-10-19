import { Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { RoundBox } from '../../../components/round-box/round-box';

@Component({
  imports: [DashHeader],
  selector: 'vira-plans',
  styleUrl: './plans.css',
  templateUrl: './plans.html',
})
export class Plans {}
