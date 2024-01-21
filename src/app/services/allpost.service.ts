import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class AllpostService {

  private apiUrl = 'http://localhost:5133/api/Post/Lista';

  constructor(private http:HttpClient) { }

  getPost(): Observable<Post[]>{
      return this.http.get<Post[]>(this.apiUrl);
  }
}
