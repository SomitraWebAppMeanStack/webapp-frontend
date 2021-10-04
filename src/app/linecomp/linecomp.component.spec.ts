import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinecompComponent } from './linecomp.component';

describe('LinecompComponent', () => {
  let component: LinecompComponent;
  let fixture: ComponentFixture<LinecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
