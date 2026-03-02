import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Welcome to Album Browser</h1>
    <p>This app lets you browse albums from a public API.</p>
    <a routerLink="/albums">Browse Albums</a>
  `
})
export class Home {}