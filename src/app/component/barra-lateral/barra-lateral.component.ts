import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SendmailsService } from '../../services/sendmails.service';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {
email:any={
  Nombre:'',
  Email:''
}

constructor(private sendmails: SendmailsService){}

  enviar(regist:NgForm){
    if(regist.invalid){
      return
    }
    this.sendmails.enviarCorreo(regist.value).subscribe(
      (response)=>{
        console.log('Registro enviado',response);
        regist.resetForm();
      },
      (error) =>{
        console.error('error al registrar: ', error)
      }
    )
    
  }
}
