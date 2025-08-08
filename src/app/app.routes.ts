import { Routes } from '@angular/router';
import { UserResolver } from './resolvers/user.resolver';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
  }
];
