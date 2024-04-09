import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Simula um usuário estático para fins de exemplo
  private user: User = {
    id: 1,
    username: 'usuario',
    email: 'usuario@example.com',
    password: 'senha'
  };

  constructor() { }

  // Retorna o usuário
  getUser(): User {
    return this.user;
  }

}