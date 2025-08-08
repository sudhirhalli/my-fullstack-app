import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserList } from "./user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, UserList],
  template: `
    <div class="user-card-container">
      <a [routerLink]="['/users', 1]">View User1</a>
      <a [routerLink]="['/users', 2]">View User2</a>
       <router-outlet></router-outlet>
    </div>
    <app-user-list></app-user-list>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-resolverApp';
}
