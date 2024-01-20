import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { TestimoniosComponent } from './component/testimonios/testimonios.component';
import { ContactoComponent } from './component/contacto/contacto.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'post', component:PostComponent},
    {path:'acerca', component:AcercaDeComponent},
    {path:'testimonio', component:TestimoniosComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'**', component:HomeComponent}
];
