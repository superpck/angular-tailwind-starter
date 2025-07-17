import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  currentYear = new Date().getFullYear();
  
  features = [
    {
      title: 'Angular 20',
      description: 'Built with the latest Angular framework for optimal performance and modern web features.',
      icon: 'code'
    },
    {
      title: 'Tailwind CSS',
      description: 'Utilizing Tailwind CSS for rapid UI development with utility-first styling approach.',
      icon: 'palette'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layouts that work beautifully on any device or screen size.',
      icon: 'devices'
    },
    {
      title: 'Component-Based',
      description: 'Modular architecture with reusable components for maintainable and scalable code.',
      icon: 'widgets'
    },
    {
      title: 'SEO Friendly',
      description: 'Built with best practices for search engine optimization and performance.',
      icon: 'search'
    },
    {
      title: 'TypeScript Powered',
      description: 'Strongly typed codebase with TypeScript for better developer experience and fewer bugs.',
      icon: 'code'
    }
  ];
}
