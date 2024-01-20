import { Component } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TresUltimosPostComponent, BarraLateralComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
