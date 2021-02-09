import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSubscribeComponent } from './http-subscribe.component';

describe('HttpSubscribeComponent', () => {
  let component: HttpSubscribeComponent;
  let fixture: ComponentFixture<HttpSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
