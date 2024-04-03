import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Post } from '../../interfaces/Post.interface';
import { AllpostService } from '../../services/allpost.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-tres-ultimos-post',
  standalone: true,
  imports: [PostComponent, RouterLink, NgIf],
  templateUrl: './tres-ultimos-post.component.html',
  styleUrl: './tres-ultimos-post.component.css'
})
export class TresUltimosPostComponent implements OnInit {
  loading: boolean = true;
  post:Post[]=[];
  lastPostId: string = '';
  constructor(
    private allPostService: AllpostService,
    private router: Router, 
    /* private route:ActivatedRoute */
    ){}

    ngOnInit(): void {   
    //actualizar post 
   

   //traer los tres últimos
    this.allPostService.getPost().subscribe(
      (data: Post[]) => {
        // Ordenar los posts por fecha de publicación de manera descendente
        this.post = data.sort((a, b) => new Date(b.creadoEn).getTime() - new Date(a.creadoEn).getTime());

        // Tomar solo los tres primeros posts (los más recientes)
        this.post = this.post.slice(0, 3);

        this.loading = false;
        //console.log(this.post);
        
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
        this.navigateToPost(id);
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
        this.post = data.sort((a, b) => new Date(b.creadoEn).getTime() - new Date(a.creadoEn).getTime());

        // Tomar solo los tres primeros posts (los más recientes)
        this.post = this.post.slice(0, 3);

        this.loading = false;
        //console.log(this.post);
      },
      (error) => {
        console.error("Error al obtener datos", error);
      }
    );
  }

  navigateToPost(postId: number): void {
    this.router.navigate(['/post', postId]);
    window.location.reload();
    window.scrollTo(0, 0);
  }
  
}
