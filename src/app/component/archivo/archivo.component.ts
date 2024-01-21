import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [BarraLateralComponent, TresUltimosPostComponent],
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export class ArchivoComponent {

}
