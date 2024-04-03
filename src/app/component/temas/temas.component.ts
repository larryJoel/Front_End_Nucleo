import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { AllpostService } from '../../services/allpost.service';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../interfaces/Post.interface';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [BarraLateralComponent, TresUltimosPostComponent, RouterLink],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {
 posts:any[] = [];
  post: Post[] = [];
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private allPostService:AllpostService
    ){}

    

    buscarPost(texto: string) {
      texto = texto.trim();
      if (texto.length === 0) {
        return;
      }
     console.log(texto);
     this.allPostService.getpostTitle(texto).subscribe(result => {
      
      this.posts = result;
      console.log(this.posts);
      // Aquí puedes hacer algo con los resultados, como asignarlos a una variable para mostrarlos en la interfaz de usuario
    });
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

    incrementarVisitas(id:number):void{
      this.allPostService.incrementVisitas(id).subscribe({
        next:()=>{
          console.log('visita incrementada');
        },
        error:(error)=>{
          console.log('Error en el incremento de visitas', error);
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
