import { Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { RoundBox } from '../../../components/round-box/round-box';

@Component({
  imports: [DashHeader],
  selector: 'vira-wallet',
  styleUrl: './wallet.css',
  templateUrl: './wallet.html',
})
export class Wallet {}
