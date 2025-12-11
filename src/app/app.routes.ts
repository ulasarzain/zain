import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
// import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: Home, title: 'Muhammad Zain | Home' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', component: Projects, title: 'Muhammad Zain | Projects' },
  { path: 'experience', component: Experience, title: 'Muhammad Zain | Experience' },
  { path: 'skills', component: Skills, title: 'Muhammad Zain | Skills' },
  { path: 'contact', component: Contact, title: 'Muhammad Zain | Contact' },
//   { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];