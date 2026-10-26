import { Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { RoundBox } from '../../../components/round-box/round-box';
import { Card } from '../../../components/card/card';
import { Button } from '../../../components/button/button';
import { TitleInput } from '../../../components/title-input/title-input';

@Component({
  imports: [DashHeader, Card, Button, TitleInput],
  selector: 'vira-wallet',
  styleUrl: './wallet.css',
  templateUrl: './wallet.html',
})
export class Wallet {}
