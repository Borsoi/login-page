import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class LoginComponent {
  user: User = {
    id: 1,
    username: '',
    email: '',
    password: ''
  };

  constructor(private router:Router) {}

  onSubmit() {
    
    alert('Login ocorreu com sucesso')
  }
}

