import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [BarraLateralComponent, TresUltimosPostComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {

}
