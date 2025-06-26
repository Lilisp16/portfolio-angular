import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Importa HttpClient
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { routes } from './app.routes';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MatButtonModule, MatDividerModule, MatIconModule, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Realiza la solicitud GET al backend
    this.http.get('http://localhost:3000/api').subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);  // Esto debería mostrar la respuesta en la consola del navegador
      },
      error: (err) => {
        console.error('Error en la solicitud:', err);  // Esto debería mostrar el error si algo falla
      }
    });
  }
}
