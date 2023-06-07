import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { LocationComponent } from './app/location.component';
import { CharacterComponent } from './app/character.component';
import { RootComponent } from './app/root.component';
import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: 'location', component: LocationComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    CharacterComponent,
    LocationComponent,
    RootComponent,
  ],
  bootstrap: [AppComponent],
})
export class MainModule {}
