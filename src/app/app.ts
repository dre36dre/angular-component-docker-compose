import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Menu,
    Footer,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-docker-compose');
}
