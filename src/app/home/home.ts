
  import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Mentor {
  name: string;
  role: string;
  company: string;
  image: string;
  description: string;
  expertise: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  
 
  title = 'Computer Science Student';
  specialization = 'Front-end Development';
  
  aboutMe = `I'm a passionate Computer Science student specializing in cybersecurity and web development. 
             With expertise in modern web technologies, I focus on creating secure, scalable, and 
             performant applications. Currently pursuing advanced studies while working on 
             real-world projects that implement security best practices and clean architecture.`;
  
  stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];
  
  featuredSkills = [
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'Boot Strap', level: 80 },
    { name: 'Web Development', level: 95 }
  ];
  
  quickLinks = [
    { route: '/projects', label: 'View My Projects', description: 'Explore my work' },
    { route: '/experience', label: 'See Experience', description: 'Professional journey' },
    { route: '/contact', label: 'Get In Touch', description: 'Start a conversation' }
  ];
name: any;


}