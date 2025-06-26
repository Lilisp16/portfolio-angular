import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'about', component: AboutComponent }, // Ruta para "about"
  { path: 'skills', component: SkillsComponent }, // Ruta para "skills"
  { path: 'projects', component: ProjectsComponent }, // Ruta para "projects"
  { path: 'contact', component: ContactComponent }, // Ruta para "contact"


   // Ruta fallback para manejar rutas no encontradas
   { path: '**', redirectTo: '' }  // Redirige cualquier ruta no definida a la página principal
];
