import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[HomeComponent, LoginComponent, RouterModule],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'my-login-form';

  constructor() {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
