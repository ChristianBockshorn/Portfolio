import { Component } from '@angular/core';
import { ProjektElPolloLocoComponent } from './projekt-el-pollo-loco/projekt-el-pollo-loco.component';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [
    ProjektElPolloLocoComponent,
  ],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

}
