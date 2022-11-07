import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First1Component } from './first1.component';

describe('First1Component', () => {
  let component: First1Component;
  let fixture: ComponentFixture<First1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
