import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturengComponent } from './featureng.component';

describe('FeaturengComponent', () => {
  let component: FeaturengComponent;
  let fixture: ComponentFixture<FeaturengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
