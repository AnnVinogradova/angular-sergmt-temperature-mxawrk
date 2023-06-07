import { Component, Input } from '@angular/core';

@Component({
  selector: 'location',
  template: `
  <div>
  <legend>{{location.name}}</legend>
  <ul>
  <li>{{location.type}}</li>
  <li>{{location.dimension}}</li>
  <li>{{location.url}}</li>
  <li>{{location.created}}</li>
  </ul>
  </div>
  `,
})
export class LocationComponent {
  @Input() location;
}
