import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// Removed CommonModule since we're using new control flow

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule], // Removed CommonModule
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup;
  
  contactInfo = {
    email: 'ulasarzain@gmail.com',
    phone: '+92 307 4919 109',
    location: 'Kasur, Pakistan',
    availability: 'Available for freelance work and full-time opportunities',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  };

  socialLinks = [
    { platform: 'Watsapp', url: 'https://github.com', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' }
  ];

  faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I specialize in frontend development with Angular, creating secure and scalable web applications. This includes full website development, API integration, performance optimization, and security implementation.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'I usually respond within 24 hours for initial inquiries. For ongoing projects, I maintain regular communication through agreed-upon channels.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide. I\'m comfortable with remote collaboration and can accommodate different time zones when necessary.'
    },
    {
      question: 'What is your development process?',
      answer: 'My process typically includes: 1) Requirement analysis, 2) Planning and design, 3) Development and testing, 4) Deployment, 5) Maintenance and support. Each phase includes regular client communication and feedback.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the form data to your backend
      alert('Thank you for your message! I will get back to you soon.');
      this.contactForm.reset();
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  copyEmail() {
    navigator.clipboard.writeText(this.contactInfo.email).then(() => {
      alert('Email copied to clipboard!');
    });
  }
}