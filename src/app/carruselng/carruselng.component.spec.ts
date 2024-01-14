import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselngComponent } from './carruselng.component';

describe('CarruselngComponent', () => {
  let component: CarruselngComponent;
  let fixture: ComponentFixture<CarruselngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
