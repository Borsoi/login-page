import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    id: 1,
    username: 'usuario',
    email: 'usuario@example.com',
    password: 'senha'
  };

  constructor() { }

  getUser(): User {
    return this.user;
  }

}