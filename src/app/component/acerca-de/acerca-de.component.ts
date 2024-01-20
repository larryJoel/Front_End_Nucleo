import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [RouterLink, TresUltimosPostComponent, BarraLateralComponent],
  templateUrl: './acerca-de.component.html',
  styleUrl: './acerca-de.component.css'
})
export class AcercaDeComponent {

}
