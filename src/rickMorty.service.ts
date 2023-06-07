import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RickMortyService {
  constructor(private http: HttpClient) {}
  getcharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }

  getLocations() {
    return this.http.get('https://rickandmortyapi.com/api/location/');
  }
}
