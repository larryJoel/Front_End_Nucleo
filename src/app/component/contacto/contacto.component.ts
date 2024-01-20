import { Component } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TresUltimosPostComponent, BarraLateralComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
