import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  user$: Observable<any>;
  constructor(private store: Store<fromAuth.State>) {
    this.user$ = store.pipe(select(fromAuth.getUser));
  }

  ngOnInit() {
  }
  logout() {
    this.store.dispatch(new Auth.Logout());
  }
  login() {
    this.store.dispatch(new Auth.Login({username: 'test', password: ''}));
  }

}
