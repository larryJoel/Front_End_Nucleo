import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendmailsService {
  private apiUrl = 'https://www.elnucleo.somee.com/EnviarCorreo';
  //private apiUrl = 'http://localhost:5133/EnviarCorreo';
  //url: string = 'https://www.elnucleo.somee.com/api/Testimonio/Lista';
  constructor(private http: HttpClient) { }

  enviarCorreo(mensaje:any): Observable<any> {
    //console.log("desde el servicio...");
    //console.log(mensaje);
    
    return this.http.post(this.apiUrl, mensaje);
  }

  /* suscribir(mensaje:any): Observable<any>{
    console.log(mensaje);
    return this.http.post(this.apiUrl, mensaje);
  } */
}
