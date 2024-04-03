import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class AllpostService {
  //private apiUrl ='http://localhost:5133/api/Post'
  private apiUrl = 'https://www.elnucleo.somee.com/api/Post';

  constructor(private http:HttpClient) { }

  getPost(): Observable<Post[]>{
      return this.http.get<Post[]>(`${this.apiUrl}/Lista`);
  }

  getPostId(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/Lista/${id}`);
  }

  incrementVisitas(id:number):Observable<any>{
    return this.http.patch<any>(`${this.apiUrl}/Vistas/${id}`,{})
  }

  incrementComentarios(id:number):Observable<any>{
    return this.http.patch<any>(`${this.apiUrl}/ComentariosCant/${id}`,{})
  }

  incrementlikes(id:number):Observable<any>{
    return this.http.patch<any>(`${this.apiUrl}/CantLikes/${id}`,{})
  }

  /* http://localhost:5133/api/Post/Lista/intento */
  getpostTitle(titulo:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/Lista/${titulo}`,{})
  }
}
