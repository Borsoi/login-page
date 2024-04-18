import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ViewChild, NgForm],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  @ViewChild('userForm') userForm!: NgForm;


  user: User = { id: 0, username: '', email: '', password: '' }

  constructor(private router: Router) { }

  registerNewUser() {
    if (this.userForm.valid) {
      var users = this.validarIdUsuario();
      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigate(['/login']);
    } else {
      alert('Existe erros no formulário, verifique e tente novamente')
    }
  }

  validarIdUsuario() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    this.user.id = id;
    users.push(this.user);

    return users;
  }

}
