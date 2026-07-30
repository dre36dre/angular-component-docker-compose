import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Home } from './home/home';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Menu,
    Home,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-docker-compose');
}
