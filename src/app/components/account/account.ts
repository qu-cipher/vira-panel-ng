import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Avatar } from '../../components/avatar/avatar';

@Component({
  imports: [RouterLink, Avatar],
  selector: 'vira-account',
  styleUrl: './account.css',
  templateUrl: './account.html',
})
export class Account {}
