import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  user: User = { id: 0, username: '', email: '', password: '' }

  constructor(private router: Router) { }

  registerNewUser() {
    var users = this.validarIdUsuario();
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }

  validarIdUsuario() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    this.user.id = id;
    users.push(this.user);

    return users;
  }

}
