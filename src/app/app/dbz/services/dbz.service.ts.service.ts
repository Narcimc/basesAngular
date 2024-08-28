import { Injectable } from '@angular/core';
import  { v4 as uuid }  from 'uuid';
import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})


export class DbzService {
  public characters: Character[] = [

    { id: uuid(), name: 'Goku', power: 1000} ,
    { id: uuid(), name: 'Vegeta', power: 1200} ,
    { id: uuid(), name: 'Trunks', power: 1500} ,
    { id: uuid(), name: 'Piccolo', power: 1800} ,
    { id: uuid(), name: 'Krillin', power: 2000} ,
    { id: uuid(), name: 'Tenshinhan', power: 2200} ,
    { id: uuid(), name: 'Yamcha', power: 2500} ,
    { id: uuid(), name: 'Bulma', power: 2800} ,
    { id: uuid(), name: 'Oolong', power: 3000} ,
    { id: uuid(), name: 'Yajirobe', power: 3200} ,

   ];

   addCharacter(character:Character):void {

     const newCharacter: Character = { id:uuid(), ...character};//con muchas propiedades

     this.characters.push(newCharacter);

   }

   //onDeleteCharacter(index:number){
    // this.characters.splice(index,1);
   deleteCharacterbyId(id:string){
    this.characters = this.characters.filter(character => character.id !== id);

   }

}
