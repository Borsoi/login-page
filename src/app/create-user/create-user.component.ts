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
      dataNascimento: ['', [Validators.pattern(/^\d{8}$/)]],
    })
  }

  registerNewUser() {
    if (this.userForm.valid) {
      this.saveUser();
      this.router.navigate(['/login']);
    } else {
      alert('Existem erros no formulário, verifique e tente novamente');
    }
  }

  saveUser() {
    const newUser: User = {
      id: this.getNextUserId(),
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      cpf: this.userForm.value.cpf,
      dataNascimento: this.userForm.value.dataNascimento
    };

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getNextUserId(): number {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.length > 0 ? users[users.length - 1].id + 1 : 1;
  }
}
