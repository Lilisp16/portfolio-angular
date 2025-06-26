import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';  // Necesario para rutas en standalone
import { appConfig } from './app/app.config';  // Si tienes alguna configuración adicional
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Aquí se proporciona el router junto con las rutas
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Configura el enrutador con las rutas
  ]
})
  .catch((err) => console.error(err));
