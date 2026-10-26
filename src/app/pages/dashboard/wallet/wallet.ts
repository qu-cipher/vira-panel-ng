import { Component } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { RoundBox } from '../../../components/round-box/round-box';
import { Card } from '../../../components/card/card';
import { Button } from '../../../components/button/button';
import { TitleInput } from '../../../components/title-input/title-input';

import { Page } from '../../../components/page/page';
import { CardGrid } from '../../../components/card-grid/card-grid';
import { Stat } from '../../../components/stat/stat';

@Component({
  imports: [DashHeader, Card, Button, TitleInput, Page, CardGrid, Stat],
  selector: 'vira-wallet',
  styleUrl: './wallet.css',
  templateUrl: './wallet.html',
})
export class Wallet {}
