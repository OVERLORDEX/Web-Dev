import { Component, input, output, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

// ==================== User Component (с формой) ====================
@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>

    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [FormsModule, NgOptimizedImage], // <-- добавляем FormsModule сюда
})
export class User {
  name = input<string>();
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  favoriteFramework = ''; // <-- свойство для двухсторонней привязки [(ngModel)]
}

// ==================== Child Component ====================
@Component({
  selector: 'app-child',
  standalone: true,
  styles: `
    .btn {
      padding: 5px;
      margin-top: 5px;
    }
  `,
  template: `<button class="btn" (click)="addItem()">Add Item</button>`,
})
export class Child {
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

// ==================== Comments Component ====================
@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class Comments {}

// ==================== Main App Component ====================
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- Navigation -->
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/user">User</a>
    </nav>

    <router-outlet></router-outlet>

    <section>
      <h1>Hello Universe</h1>
      <p>City: {{ city }}, {{ 1 + 1 }}</p>

      <!-- Composing Components -->
      <app-user name="Simran"></app-user>

      <!-- Control Flow - @if/@else -->
      @if (isServerRunning) {
        <span>Yes, the server is running</span>
      } @else {
        <span>No, the server is not running</span>
      }

      <!-- Control Flow - @for -->
      <h3>User List:</h3>
      @for (user of users; track user.id) {
        <p>{{ user.name }}</p>
      }

      <!-- Property Binding -->
      <h3>Editable Div:</h3>
      <div [contentEditable]="isEditable" style="border: 1px solid #ccc; padding: 5px;">
        This div is editable if isEditable is true
      </div>

      <!-- Event Handling -->
      <h3>Secret Message:</h3>
      <section 
        (mouseover)="showSecretMessage()" 
        style="margin-top: 5px; border: 1px dashed #888; padding: 5px; cursor: pointer;"
      >
        There's a secret message for you, hover to reveal 👀
        <div>{{ message }}</div>
      </section>

      <!-- Output Property -->
      <h3>Child Component - Add Item</h3>
      <app-child (addItemEvent)="addItem($event)"></app-child>
      <div style="margin-top: 5px;">Items: {{ items.join(' ') }}</div>

      <!-- Deferred Comments -->
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        </p>
        <p>... (more content can be added here) ...</p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </section>
  `,
  styles: `
    :host {
      color: #a144eb;
      font-family: Arial, sans-serif;
    }
    section {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 6px;
    }
    h3 {
      margin-top: 15px;
    }
    div[contentEditable] {
      margin-top: 5px;
    }
  `,
  imports: [User, Child, Comments, RouterOutlet, RouterLink],
})
export class App {
  city = 'San Francisco';
  isServerRunning = true;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  isEditable = true;
  message = '';
  items: string[] = [];

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  addItem(item: string) {
    this.items.push(item);
  }
}
