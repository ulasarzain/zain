


import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [], // No CommonModule needed for Angular 20 control flow
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      id: 1,
      title: 'Student Registration Form',
      description: 'A responsive web form for student registration with form validation and data submission.',
      category: 'Web Form',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      status: 'Completed',
      features: [
        'Responsive design for all devices',
        'Form validation with JavaScript',
        'Data storage in localStorage',
        'Clean and user-friendly interface'
      ],
      github: null,
      demo: null,
      details: 'This project was developed as a freelance assignment. It includes client-side validation and stores data temporarily in localStorage. The form collects student personal information, academic details, and course preferences.',
      client: 'Local School',
      duration: '2 weeks'
    },
    {
      id: 2,
      title: 'Company Contact Form Fix',
      description: 'Fixed bugs and improved a company\'s contact form that wasn\'t submitting data properly.',
      category: 'Bug Fix',
      technologies: ['HTML', 'CSS', 'JavaScript', 'BootStrap'],
      year: '2024',
      status: 'Completed',
      features: [
        'Fixed form submission issues',
        'Added email validation',
        'Improved mobile responsiveness',
        'Enhanced user experience'
      ],
      github: null,
      demo: null,
      details: 'This was a freelance project where a company\'s contact form was not working correctly. I debugged the JavaScript code, fixed the AJAX submission, and improved the form validation. Also made the form more accessible and mobile-friendly.',
      client: 'Small Business Client',
      duration: '3 days'
    },
    {
      id: 3,
      title: 'Simple Portfolio Website',
      description: 'A clean portfolio website for a freelancer showcasing their work and contact information.',
      category: 'Portfolio',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      status: 'Completed',
      features: [
        'Responsive navigation',
        'Project gallery',
        'Contact form',
        'Smooth scrolling'
      ],
      github: null,
      demo: null,
      details: 'Created a simple portfolio website for a freelance graphic designer. The website includes a hero section, portfolio gallery, about section, and contact form. Used Bootstrap for responsive design.',
      client: 'Freelance Designer',
      duration: '1 week'
    },
    {
      id: 4,
      title: 'E-commerce Product Page',
      description: 'A single product page for an online store with add-to-cart functionality.',
      category: 'E-commerce',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      status: 'Completed',
      features: [
        'Product image gallery',
        'Quantity selector',
        'Add to cart functionality',
        'Responsive design'
      ],
      github: null,
      demo: null,
      details: 'Developed a product page for a small online store selling handmade crafts. Implemented image switching, quantity selection, and cart functionality using JavaScript.',
      client: 'Handmade Crafts Store',
      duration: '1 week'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A simple weather dashboard that shows current weather and forecast for a city.',
      category: 'Web Application',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Prime NG'],
      year: '2024',
      status: 'In Progress',
      features: [
        'City search functionality',
        'Current weather display',
        '5-day forecast',
        'Responsive layout'
      ],
      github: null,
      demo: null,
      details: 'Learning project to practice API integration. Uses OpenWeatherMap API to fetch weather data. Includes error handling for invalid city names and a clean user interface.',
      client: 'Personal Project',
      duration: 'Ongoing'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'A simple task manager to add, edit, and delete daily tasks.',
      category: 'Web Application',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      year: '2024',
      status: 'Completed',
      features: [
        'Add new tasks',
        'Mark tasks as complete',
        'Delete tasks',
        'Persistent storage'
      ],
      github: null,
      demo:null,
      details: 'A beginner-friendly task management application that stores tasks in the browser\'s localStorage. Users can add new tasks, mark them as complete, and delete them. Great for learning DOM manipulation.',
      client: 'Personal Project',
      duration: '1 week'
    }
  ];

  categories = ['All', 'Web Form', 'Bug Fix', 'Portfolio', 'E-commerce', 'Web Application'];
  selectedCategory = 'All';
  selectedProject: any = null;
  showModal = false;

  filterProjects(category: string) {
    this.selectedCategory = category;
  }

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  getStatusColor(status: string): string {
    const colors: {[key: string]: string} = {
      'Completed': '#10b981',
      'In Progress': '#f59e0b',
      'Live': '#3b82f6',
      'Planning': '#6b7280'
    };
    return colors[status] || '#6b7280';
  }

  // // Open project details modal
  // openProjectDetails(project: any) {
  //   this.selectedProject = project;
  //   this.showModal = true;
  //   // Disable body scroll when modal is open
  //   document.body.style.overflow = 'hidden';
  // }

  // Close project details modal
  closeProjectDetails() {
    this.selectedProject = null;
    this.showModal = false;
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  }
}