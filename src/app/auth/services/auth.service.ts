import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User, Authenticate } from '../models/user';


@Injectable()
export class AuthService {

  constructor() { }
  login({ username, password }: Authenticate): Observable<User> {
    return of({ name: 'User', group: 'test' });
  }
  
  logout() {
    return of(true);
  }
}
