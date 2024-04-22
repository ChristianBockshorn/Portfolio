import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [CommonModule, ContactFormComponent, FooterComponent]
})
export class NavbarComponent {

isNavOpen: any;
  openNav() {
    this.isNavOpen = !this.isNavOpen; // Um den Zustand umzuschalten
  
  }
}
