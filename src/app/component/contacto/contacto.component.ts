import { Component } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SendmailsService } from '../../services/sendmails.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TresUltimosPostComponent, BarraLateralComponent, FormsModule, NgIf],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contacto:any ={
    Nombre:'',
    Email:'',
    Mensaje:''
  }

   constructor(private sendmails: SendmailsService){

  }

  enviar(forma:NgForm):void{
    
    if(forma.invalid){
      //console.log('El formulario es invalido');
      return
    }
    this.sendmails.enviarCorreo(forma.value).subscribe(
      (response) => {
        //console.log('recibiendo el formulario');
        console.log('Datos guardados:', response);
        forma.resetForm();
      },
      (error) => {
        console.error('Error al enviar correo:', error);
      }
    )
  }

}
