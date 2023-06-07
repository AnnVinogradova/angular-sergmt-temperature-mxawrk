import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rickMorty.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RickMortyService],
})
export class AppComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private rickMortyService: RickMortyService,
   
  ) {}

  ngOnInit() {
    this.rickMortyService.getcharacters().subscribe({
      next: (data: any) => (this.characters = data.results),
    });
  }
}
