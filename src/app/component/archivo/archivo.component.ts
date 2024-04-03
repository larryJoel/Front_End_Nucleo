import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [BarraLateralComponent, TresUltimosPostComponent],
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export class ArchivoComponent {

  constructor(private router:Router){}

  BuscarPost(texto:string){
    texto = texto.trim();
   /*  if (texto.length === 0) {
      return;
    } */
    console.log(texto);
  }
}
