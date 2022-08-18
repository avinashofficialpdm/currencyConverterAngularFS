import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CANADIANComponent } from './canadian.component';

describe('CANADIANComponent', () => {
  let component: CANADIANComponent;
  let fixture: ComponentFixture<CANADIANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CANADIANComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CANADIANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
