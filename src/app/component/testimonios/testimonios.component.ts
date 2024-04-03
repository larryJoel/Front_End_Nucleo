import { Component, Inject, OnInit } from '@angular/core';
import { TresUltimosPostComponent } from '../tres-ultimos-post/tres-ultimos-post.component';
import { PostComponent } from '../post/post.component';
import { RouterLink } from '@angular/router';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { AllTestimonioService } from '../../services/all-testimonio.service';
import { Testimonio } from '../../interfaces/Testimonio.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [TresUltimosPostComponent, PostComponent, RouterLink, BarraLateralComponent, AsyncPipe, NgIf],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})


export class TestimoniosComponent implements OnInit {
loading: boolean = true;
test:Testimonio[] = [];

  constructor( private allTestimonioService:AllTestimonioService){} 


  ngOnInit(): void {
  
    this.allTestimonioService.getTestimonio().subscribe(
      (data:Testimonio[])=>{
       this.test  = data
        console.log(this.test );
        this.loading = false;
      },
      (error)=>{
        console.error(error);
      })

  }

}
