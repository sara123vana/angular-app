import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
