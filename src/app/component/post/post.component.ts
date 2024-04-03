import { Component, OnInit, Pipe } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { Post } from '../../interfaces/Post.interface';
import { AllpostService } from '../../services/allpost.service';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../interfaces/Comentario.interface';
import { DatePipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel} from '@angular/forms';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TresUltimosPostComponent, BarraLateralComponent,DatePipe, FormsModule, CommonModule ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  implements OnInit{
  usuario:any ={
    nombre:'',
    email:'',
    comentar:'',
    postId:0,
    creadoEn: new Date(),
    editadoEn: new Date()
  }
  loading: boolean = true;
  post:any;
  titulo:string = "";
  image:string ="";
  intro:string="";
  contenido:string="";
  comentario:Comentario[]=[];
  postId:number = 0;
  
  constructor(
    private allpostService:AllpostService,
    private activatedRoute: ActivatedRoute,
    private comentService: ComentarioService
   
    ){}
  
  ngOnInit():void{
    
    const id:number = this.activatedRoute.snapshot.params['id'];
    this.usuario.postId = id;

     this.postId = id;
    this.allpostService.getPostId(id).subscribe(
      (data:Post[]) =>{
        //console.log(data);
        this.loading = false;
        this.post = data;
        this.titulo = this.post.titulo;
        this.image = this.post.image;
        this.intro = this.post.intro;
        this.contenido = this.post.contenido;
      }) 

       this.comentService.getComentDePostId(id).subscribe(
          (data:Comentario[]) =>{
            this.comentario = data;
            console.log(this.comentario);
          }
        )
  }

  formatoContenido(contenido:string):string{
    return contenido.replace(/\[subtitulo\](.*?)\[\/subtitulo\]/g, '<br><br><b>$1</b><br>')
  }

  
  guardar(forma: NgForm):void{
    console.log(forma.value);
    if (forma.invalid) {
      console.log('El formulario es inválido.');
      return
    }
    
    this.comentService.addComentario(forma.value).subscribe(
      (response) =>{
        console.log('datos guardados:',response);
        this.actualizarComentarios(this.postId);
      },
      (error) =>{
        console.error('error al guardar datos: ', error)
      }
    )
    
    forma.resetForm();
  }

  actualizarComentarios(id: number): void {
    this.comentService.getComentDePostId(id).subscribe(
      (data:Comentario[]) =>{
        this.comentario = data;
      }
    )
  }

  incrementarComentarios(id:number):void{
    this.allpostService.incrementComentarios(id).subscribe({
      next:()=>{
        console.log('visita incrementada');
      },
      error:(error)=>{
        console.log('Error en el incremento de visitas', error);
      }
    })
  }
}

