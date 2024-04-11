import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektJoinComponent } from './projekt-join.component';

describe('ProjektJoinComponent', () => {
  let component: ProjektJoinComponent;
  let fixture: ComponentFixture<ProjektJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektJoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
