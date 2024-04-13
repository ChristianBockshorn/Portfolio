import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [
    [CommonModule],
  ],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  projects = [
    {
      'img': './assets/img/Project-img/ElPolloLoco.png',
      'name': 'El Pollo Loco',
      'usedTech': 'JavaScript | HTML | CSS | OOP',
      'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso collecting coins and salsa bottles and to fight against el pollo loco.',
      'gitHubURL': 'https://github.com/GDR1909/El_Pollo_Loco',
      'liveTestURL': ''
    },
    {
      'img': './assets/img/Project-img/pokedex.png',
      'name': 'Pokédex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'gitHubURL': 'https://github.com/GDR1909/Pokedex',
      'liveTestURL': ''
    },
    {
      'img': './assets/img/Project-img/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'gitHubURL': 'https://github.com/GDR1909/Join',
      'liveTestURL': ''
    },
    {
      'img': './assets/img/Project-img/join.png',
      'name': 'Portfolio',
      'usedTech': 'Angular | Typescript | SCSS',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'gitHubURL': 'https://github.com/GDR1909/Join',
      'liveTestURL': ''
    }
  ];
}
