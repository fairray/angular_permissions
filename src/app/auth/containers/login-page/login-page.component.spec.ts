import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { LoginPageComponent } from './login-page.component';
import * as fromAuth from '../../reducers';

describe('Login Page', () => {
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: Store<fromAuth.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: combineReducers(fromAuth.reducers),
        }),
      ],
      declarations: [LoginPageComponent],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
