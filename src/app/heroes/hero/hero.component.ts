import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string= 'Iroman';
  public age: number = 40;//metodo y un capitalice


  get capitalice() : string {
    return 'Hola,inutiles'.toUpperCase();
  }


  getHerODescription() : string {
    return `${this.name} - ${this.age}`;
  }





}
