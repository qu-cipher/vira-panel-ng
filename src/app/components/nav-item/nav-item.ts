import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'vira-nav-item',
  styleUrl: './nav-item.css',
  templateUrl: './nav-item.html',
})
export class NavItem {
  kind = input<'overview' | 'plans' | 'wallet' | 'profile' | 'settings'>('overview');
  text = input('overview');
  link = input.required<string>();
}
