import { Component, OnInit } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { Post } from '../../interfaces/Post.interface';
import { AllpostService } from '../../services/allpost.service';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { Comentario } from '../../interfaces/Comentario.interface';
import { NgIf } from '@angular/common';
import { PostPpalComponent } from '../post-ppal/post-ppal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BarraLateralComponent, PostPpalComponent, RouterLink, PostComponent,TresUltimosPostComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

/* export class HomeComponent {

} */
export class HomeComponent implements OnInit {
  loading: boolean = true;
  post:Post[]=[];
  postId:number=0;
  constructor(
    private allPostService: AllpostService,
    private route: Router
    ){}

  ngOnInit(): void {   
    this.allPostService.getPost().subscribe(
      (data:Post[])=>{
        this.post = (data);
        this.loading = false;
        //console.log(this.post);
      },
      (error) =>{
        console.error("Error al obtener datos", error);
      }
    )

  } 

  incrementarVisitas(id:number):void{
    this.allPostService.incrementVisitas(id).subscribe({
      next:()=>{
        console.log('visita incrementada');
        window.scrollTo(0, 0);
      },
      error:(error)=>{
        console.log('Error en el incremento de visitas', error);
      }
    })
  }

  incrementarLikes(id:number):void{
    this.allPostService.incrementlikes(id).subscribe({
      next:()=>{
        //console.log('likes incrementados');
        this.actualizarHome();
      },
      error:(error)=>{
        console.log('Error en el incremento de likes', error);
      }
    })
  }

  actualizarHome():void{
    this.allPostService.getPost().subscribe(
      (data:Post[])=>{
        this.post = (data);
        //console.log(this.post);
        
      },
      (error) =>{
        console.error("Error al obtener datos", error);
      }
    )
  }
}
