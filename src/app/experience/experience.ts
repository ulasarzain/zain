import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
  experiences = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'Key Tech.',
      location: 'Kasur, Pakistan',
      period: 'June 2024 - Present',
      type: 'Full-time',
      description: 'Developing and maintaining enterprise-level web applications with a focus on security and performance.',
      responsibilities: [
        'Developed responsive web applications using Angular 20 and TypeScript',
        'Implemented security best practices including JWT authentication and input validation',
        'Optimized application performance reducing load time by 40%',
        'Collaborated with backend teams to design secure REST APIs',
        'Conducted code reviews and mentored junior developers'
      ],
      technologies: ['Angular', 'TypeScript', 'PrimeNG', 'HTML', 'CSS', 'BOOTSTRAP']
    },
    {
      id: 2,
      position: 'Web Development Intern',
      company: 'KEY TECH',
      location: 'Kasur',
      period: 'January 2024 - May 2024',
      type: 'Internship',
      description: 'Assisted in developing web applications and learning enterprise development patterns.',
      responsibilities: [
        'Built responsive UI components using Angular and Bootstrap',
        'Assisted in API integration and data handling',
        'Participated in agile development processes',
        'Learned secure coding practices and web security principles',
        'Contributed to documentation and testing procedures'
      ],
      technologies: ['Angular', 'Bootstrap', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 3,
      position: 'Web Deep Researcher',
      company: 'Self-employed',
      location: 'Remote',
      period: '2023 - 2024',
      type: 'Freelance',
      description: 'A powerful web deep-researcher tool that quickly searches, analyzes, and extracts accurate information from multiple online sources — giving you verified, organized, and easy-to-understand results.',
      responsibilities: [
        'Designed and developed responsive websites for small businesses',
        'Implemented SEO best practices and performance optimization',
        'Provided maintenance and technical support for client websites',
        'Managed project timelines and client communication',
        'Learned project management and client relations skills'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Angular 20 ', 'Boot Strap']
    }
  ];

  education = {
    degree: 'Bachelor of Science in Computer Science {ON-GOING}',
    institution: 'SUPERIOR COLLEGE ',
    location: 'Kasur, Pakistan',
    period: '2024 - 2028 (Expected)',
    gpa: '3.7/4.0  {1st Smester}',
    coursework: [
      'Data Structures & Algorithms',
      'Computer Networks & Security',
      'Database Systems',
      'Web Application Development',
      'Cryptography',
      'Software Engineering'
    ],
    achievements: [
      'Dean\'s List: Fall 2022, Spring 2023',
      'Finalist in College HTML compitition  2022',
      'Member of College Coding Group'
    ]
  };

  certifications = [
    {
      name: 'Angular Framework (Advanced)',
      issuer: 'Superior College',
      date: '2024',
     
    },
    {
      name: 'Angular User',
      issuer: 'Superior College',
      date: '2024',
    },
    {
      name: 'TypeScript Masterclass',
      issuer: 'Superior College',
      date: '2024',
    }
  ];
}