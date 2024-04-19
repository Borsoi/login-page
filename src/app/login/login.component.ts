import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [AuthService]
})
export class LoginComponent {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    cpf: '',
    dataNascimento: new Date()
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.authService.validarLoginUsuario(this.user.username, this.user.password)) {
      alert('Login ocorreu com sucesso');
      this.authService.login();
      this.router.navigate(['/home']);
    }
    else {
      this.errorMessage = 'Usuário não cadastrado'
      alert(this.errorMessage);
    }
  }

  navigateToNewUser() {
    this.router.navigate(['/form-new-user']);
  }

}

