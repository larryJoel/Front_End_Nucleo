import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tres-ultimos-post',
  standalone: true,
  imports: [PostComponent, RouterLink],
  templateUrl: './tres-ultimos-post.component.html',
  styleUrl: './tres-ultimos-post.component.css'
})
export class TresUltimosPostComponent {

}
