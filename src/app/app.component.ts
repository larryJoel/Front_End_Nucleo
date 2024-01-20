import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, HomeComponent, PostComponent,RouterLink]
})
export class AppComponent {
  title = 'blogApp';
}
