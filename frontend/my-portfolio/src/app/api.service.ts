import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // URL del backend

  constructor(private http: HttpClient) { }

  // Método para obtener datos del backend
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
