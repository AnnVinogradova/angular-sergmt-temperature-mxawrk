import { Component, Input } from '@angular/core';

@Component({
  selector: 'character',
  template: `
  <div>
  <legend>{{character.name}}</legend>
  <img [src]="character.image">
  <ul>
  <li>{{character.status}}</li>
  <li>{{character.gender}}</li>
  <li>{{character.type}}</li>
  <li>{{character.location.name}}</li>
  </ul>
  </div>
  `,
})
export class CharacterComponent {
  @Input() character;
}
