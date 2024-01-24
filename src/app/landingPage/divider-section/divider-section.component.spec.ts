import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSectionComponent } from './divider-section.component';

describe('DividerSectionComponent', () => {
  let component: DividerSectionComponent;
  let fixture: ComponentFixture<DividerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
