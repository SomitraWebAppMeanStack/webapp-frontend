import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticalOneComponent } from './partical-one.component';

describe('ParticalOneComponent', () => {
  let component: ParticalOneComponent;
  let fixture: ComponentFixture<ParticalOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticalOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
