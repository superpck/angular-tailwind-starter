import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-page.html',
  styleUrl: './single-page.scss'
})
export class SinglePageComponent {
  currentYear = new Date().getFullYear();
  
  sections = [
    {
      id: 'about',
      title: 'About Us',
      content: 'We are a dedicated team of developers passionate about creating high-quality, responsive web applications using the latest technologies like Angular and Tailwind CSS.'
    },
    {
      id: 'services',
      title: 'Our Services',
      content: 'We offer a range of services including web development, mobile app development, UI/UX design, and technical consulting for startups and enterprises.'
    },
    {
      id: 'portfolio',
      title: 'Our Portfolio',
      content: 'Explore our collection of successful projects where we\'ve helped clients transform their ideas into reality with cutting-edge technologies.'
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      content: 'Hear what our clients have to say about our work, commitment, and the impact we\'ve made on their businesses.'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'Get in touch with us to discuss your project requirements. We\'re ready to help you bring your vision to life.'
    }
  ];

  testimonials = [
    {
      name: 'Alex Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'Working with this team was incredible. They took our concept and transformed it into a beautiful, functional website that exceeded our expectations.'
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director, GrowthFirm',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The attention to detail and commitment to quality was impressive. Our new application has significantly improved user engagement and satisfaction.'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'Their expertise in Angular and Tailwind CSS is unmatched. They delivered our project on time and on budget, with excellent communication throughout.'
    }
  ];

  portfolio = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Financial Analytics',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      title: 'Travel Booking System',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
