import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService]
})
export class LoginComponent {
  user: User = {
    id: 1,
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    alert('Login ocorreu com sucesso');
    this.authService.login(this.user.username, this.user.password);
    this.router.navigate(['/home']);
  }
}

