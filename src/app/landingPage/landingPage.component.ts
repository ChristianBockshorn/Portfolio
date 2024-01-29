import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { DividerSectionComponent } from './divider-section/divider-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    AboveTheFoldComponent,
    DividerSectionComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioSectionComponent,
    ContactFormComponent,
    FooterComponent,
    
  ],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {

}
