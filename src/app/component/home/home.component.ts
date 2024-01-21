import { Component, OnInit } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { Post } from '../../interfaces/Post.interface';
import { AllpostService } from '../../services/allpost.service';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BarraLateralComponent, RouterLink, PostComponent,TresUltimosPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

/* export class HomeComponent {

} */
export class HomeComponent implements OnInit {
  post:Post[]=[];
  constructor(private allPostService: AllpostService){}

  ngOnInit(): void {
    this.allPostService.getPost().subscribe(
      (data:Post[])=>{
        console.log("Datos de los post", data);
        this.post = data;
      },
      (error) =>{
        console.error("Error al obtener datos", error);
      }
    )
  } 

}
