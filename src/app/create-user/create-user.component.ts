import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  providers: [
    provideNgxMask(),
  ],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      dataNascimento: ['', Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(19\d{2}|20[0-9]{2})$/)],
    })
  }

  registerNewUser() {
    if (this.userForm.valid) {
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const newUser = this.getNewUserInput();
      if (this.validateUsernameAvailable(newUser, users)) {
        this.saveUser(newUser, users);
        this.router.navigate(['/login']);
      } else {
        alert('O nome de usuário não está disponível, escolha outro nome de usuário')
      }
    } else {
      alert('Existem erros no formulário, verifique e tente novamente');
    }
  }

  saveUser(newUser: User, users: User[]) {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getNewUserInput(): User {
    return {
      id: this.getNextUserId(),
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      cpf: this.userForm.value.cpf,
      dataNascimento: this.userForm.value.dataNascimento
    };
  }

  validateUsernameAvailable(newUser: User, users: User[]): boolean {
    const existingUser = users.find(user => user.username === newUser.username)
    if (existingUser) {
      return false;
    }
    return true;
  }

  getNextUserId(): number {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.length > 0 ? users[users.length - 1].id + 1 : 1;
  }
}
