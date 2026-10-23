import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toaster } from './components/toaster/toaster';

@Component({
  imports: [RouterOutlet, Toaster],
  selector: 'vira-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ViraXConsole');
}
