import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EUROComponent } from './euro.component';

describe('EUROComponent', () => {
  let component: EUROComponent;
  let fixture: ComponentFixture<EUROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EUROComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EUROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
