import { Component } from '@angular/core';
import { NavItem } from '../../components/nav-item/nav-item';
import { Account } from '../../components/account/account';

@Component({
  imports: [NavItem, Account],
  selector: 'vira-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
