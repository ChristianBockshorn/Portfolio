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
      'img': './assets/img/Project-img/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS | Figma',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'gitHubURL': 'https://github.com/ChristianBockshorn/JOIN-46',
      'liveTestURL': 'https://join-projectmanagement.christian-bockshorn.de'
    },
    {
      'img': './assets/img/Project-img/ElPolloLoco.png',
      'name': 'El Pollo Loco',
      'usedTech': 'JavaScript | HTML | CSS | OOP',
      'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso collecting coins and salsa bottles and to fight against el pollo loco.',
      'gitHubURL': 'https://github.com/ChristianBockshorn/El-Pollo-Loco-2D-Game',
      'liveTestURL': 'https://elpolloloco-game.christian-bockshorn.de'
    },
    {
      'img': './assets/img/Project-img/pokedex.png',
      'name': 'Pokédex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'gitHubURL': 'https://github.com/ChristianBockshorn/Pokedex-API',
      'liveTestURL': 'https://pokedex-api.christian-bockshorn.de'
    },
    {
      'img': './assets/img/Project-img/join.png',
      'name': 'Portfolio',
      'usedTech': 'Angular | Typescript | HTML | SCSS | Figma',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'gitHubURL': 'https://github.com/ChristianBockshorn/Portfolio',
      'liveTestURL': ''
    }
  ];
}
