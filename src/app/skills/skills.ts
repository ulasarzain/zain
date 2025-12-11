import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [], // No imports needed for control flow
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  technicalSkills = [
    { category: 'Frontend Development', skills: [
      { name: 'Angular', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript ', level: 45 },
      { name: 'Boot Strap', level: 80 },
      { name: 'PrimeNG', level: 75 }
    ]},
    { category: 'Tools & Workflow', skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Angular CLI', level: 90 },
      { name: 'NPM', level: 85 },
      { name: 'Docker', level: 20 },
      { name: 'Chrome DevTools', level: 20 }
    ]},
    // { category: 'Web Security', skills: [
    //   { name: 'OWASP Principles', level: 80 },
    //   { name: 'JWT Authentication', level: 85 },
    //   { name: 'Secure APIs', level: 75 },
    //   { name: 'Data Encryption', level: 70 },
    //   { name: 'XSS/CSRF Prevention', level: 80 },
    //   { name: 'Security Headers', level: 75 }
    // ]}
  ];

  methodologies = [
    {
      title: 'Security-First Approach',
      description: 'Implementing security best practices from initial design to deployment',
      principles: [
        'Input validation and sanitization',
        'Principle of least privilege',
        'Regular security audits',
        'Secure authentication flows'
      ]
    },
    {
      title: 'Clean Architecture',
      description: 'Maintainable, scalable code structure following best practices',
      principles: [
        'SOLID principles',
        'Component-based architecture',
        'Separation of concerns',
        'Reusable patterns'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Creating fast, efficient applications with minimal resource usage',
      principles: [
        'Lazy loading and code splitting',
        'Optimized asset delivery',
        'Efficient state management',
        'Minimal bundle size'
      ]
    }
  ];

  tools = {
    development: ['Visual Studio Code', 'Git', 'GitHub', 'Angular CLI', 'NPM'],
    design: ['Canva', 'Photoshop', 'Illustrator'],
    testing: ['Re- Test', 'Concoling']
  };

  languages = [
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 70 },
    { name: 'BOOT STRAP', level: 65 }
  ];
}