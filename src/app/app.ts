import { Component } from '@angular/core';

import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { TechStack } from './components/tech-stack/tech-stack';
import { Portfolio } from './components/portfolio/portfolio';
import { Expertise } from './components/expertise/expertise';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    Hero,
    About,
    TechStack,
    Portfolio,
    Expertise
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}