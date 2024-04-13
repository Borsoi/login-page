import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HomeComponent, LoginComponent, RouterModule, CreateUserComponent],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'my-login-form';

  users!: User[];

  constructor() { }
}
