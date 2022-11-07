import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokiaComponent } from './nokia.component';

describe('NokiaComponent', () => {
  let component: NokiaComponent;
  let fixture: ComponentFixture<NokiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NokiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NokiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
