import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { UserResolver } from './app/resolvers/user.resolver';
import { UserService } from './app/services/user.service';



bootstrapApplication(
  AppComponent
   , {
  providers: [
    provideHttpClient(),         // ✅ this provides HttpClient
    provideRouter(routes),
  ]
}
);
