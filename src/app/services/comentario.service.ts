import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/Comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl='https://www.elnucleo.somee.com/api/Comentario/'
  //private apiUrl = 'https://www.elnucleo.somee.com/api/Post/Lista';
  //private apiUrl = 'http://localhost:5133/api/Comentario/'
  
  constructor(
    private http:HttpClient
  ) { }

  getComentDePostId(id:number):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.apiUrl}ListaPorPost/${id}`)
  }

  addComentario(comment:Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(`${this.apiUrl}Agregar`,comment);
  }
}
