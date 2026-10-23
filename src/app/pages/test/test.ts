import { Component } from '@angular/core';
import { Pie } from '../../widgets/pie/pie'
import { HBar } from '../../widgets/hbar/hbar';

@Component({
  imports: [Pie, HBar],
  selector: 'vira-test',
  styleUrl: './test.css',
  templateUrl: './test.html',
})
export class Test {}
