import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { 
    // get the user details from the server
    this.user = {
      name: "Alex",
      email: "Alex@gmail.com",
      direction: "Carrer Gran de Sant Andreu, 241, 11, 08030, Barcelona",
      telephone: 666737272,
      urlImage:"../../assets/imgs/paisaje.jpg",
    }
  }

  getUser() {
    return this.user;
  }
}
