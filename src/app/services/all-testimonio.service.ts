import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Testimonio } from '../interfaces/Testimonio.interface';

@Injectable({
  providedIn: 'root'
})
export class AllTestimonioService {

  constructor(private http: HttpClient) { }
  //url: string = 'http://localhost:5133/api/Testimonio/Lista'
  url: string = 'https://www.elnucleo.somee.com/api/Testimonio/Lista';
  
  getTestimonio(): Observable<Testimonio[]>{
    return this.http.get<Testimonio[]>(this.url);
}
}