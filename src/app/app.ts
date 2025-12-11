import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Removed CommonModule
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Muhammad Zain | Portfolio';
  
  // Navigation items
  navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/experience', label: 'Experience', exact: false },
    { path: '/skills', label: 'Skills', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  // Contact information for footer
  contact = {
    email: 'ulasarzain@gmail.com',
    phone: '+92 307 4919 109',
    location: 'Kasur, Pakistan'
  };

  // Social links - ADD THIS PROPERTY
  socialLinks = [
    { platform: 'GitHub', url: 'https://github.com' },
    { platform: 'Watsapp', url: 'https://linkedin.com' },
    { platform: 'Twitter', url: 'https://twitter.com' }
  ];

  // Mobile menu state
  isMobileMenuOpen = false;

  // Toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close mobile menu
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}