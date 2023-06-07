import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rickMorty.service';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  providers: [RickMortyService],
})
export class RootComponent implements OnInit {
  locations: any[] = [];

  constructor(
    private rickMortyService: RickMortyService,
   
  ) {}

  ngOnInit() {
    this.rickMortyService.getLocations().subscribe({
      next: (data: any) => (this.locations = data.results),
    });
  }
}