import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardngComponent } from './cardng.component';

describe('CardngComponent', () => {
  let component: CardngComponent;
  let fixture: ComponentFixture<CardngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
