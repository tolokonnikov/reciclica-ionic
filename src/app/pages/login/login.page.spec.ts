import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { loadingReducer } from 'src/store/loading/loading.reducers';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home after login', () => {
    spyOn(router, 'navigate');
    component.login();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });

  it('should go to home after register', () => {
    spyOn(router, 'navigate');
    component.register();

    expect(router.navigate).toHaveBeenCalledOnceWith(['register']);
  });
});
