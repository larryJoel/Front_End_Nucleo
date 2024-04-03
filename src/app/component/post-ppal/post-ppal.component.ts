import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/Post.interface';
import { AllpostService } from '../../services/allpost.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-ppal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-ppal.component.html',
  styleUrl: './post-ppal.component.css'
})
export class PostPpalComponent implements OnInit{
  post:any;
  postId:number=0;
  loading: boolean = true;
  
  constructor(
    private allPostService: AllpostService,
    private route: Router
    ){}
  
  ngOnInit(): void {
    this.allPostService.getPost().subscribe(
      (data: Post[]) => {
        // Ordenar los posts por fecha de publicación de manera descendente
        this.post = data.sort((a, b) => new Date(b.creadoEn).getTime() - new Date(a.creadoEn).getTime())[0];
        console.log(this.post);
        this.loading = false;
      },
      (error) => {
        console.error("Error al obtener datos", error);
      }
    );
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
      (data: Post[]) => {
        // Ordenar los posts por fecha de publicación de manera descendente
        this.post = data.sort((a, b) => new Date(b.creadoEn).getTime() - new Date(a.creadoEn).getTime())[0];
  
        this.loading = false;
      },
      (error) => {
        console.error("Error al obtener datos", error);
      }
    );
  }
}
