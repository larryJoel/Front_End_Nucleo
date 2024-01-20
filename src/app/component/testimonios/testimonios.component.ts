import { Component } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { PostComponent } from '../post/post.component';
import { RouterLink } from '@angular/router';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [TresUltimosPostComponent, PostComponent, RouterLink, BarraLateralComponent],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {

}
