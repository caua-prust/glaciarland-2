import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private http = inject(HttpClient);

  private apiNoticias = 'http://localhost:3000/noticias';

  listarNoticias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiNoticias);
  }
}