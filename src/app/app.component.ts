import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BlogComponent] 
})
export class AppComponent {
  title = "Blog D'Articles";
}
