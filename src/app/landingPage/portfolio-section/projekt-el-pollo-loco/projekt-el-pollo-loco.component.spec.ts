import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektElPolloLocoComponent } from './projekt-el-pollo-loco.component';

describe('ProjektElPolloLocoComponent', () => {
  let component: ProjektElPolloLocoComponent;
  let fixture: ComponentFixture<ProjektElPolloLocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektElPolloLocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektElPolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
