import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursecretComponent } from './oursecret.component';

describe('OursecretComponent', () => {
  let component: OursecretComponent;
  let fixture: ComponentFixture<OursecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OursecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OursecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
