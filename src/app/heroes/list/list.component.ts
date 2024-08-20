import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Spider-Man",
    "Doctor Strange",
    "Black Panther",
    "Winter Soldier",
    "Scarlet Witch",
    "Vision",
    "Falcon",
    "Ant-Man",
    "The Guardians of the Galaxy",
  ];

  public borrado?:string;
  removeLastHero():void{
    this.borrado = this.heroNames.pop();

  }

}
