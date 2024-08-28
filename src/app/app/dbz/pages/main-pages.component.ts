import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent  {

 constructor ( private DbzService: DbzService){}//inyeccion de dependencias
 //get and set
 get characters(): Character[] {
  return [...this.DbzService.characters];

 }

 onDeleteCharacter(id:string):void{
  this.DbzService.deleteCharacterbyId( id );
 }

 onNewCharacter(character:Character):void{
  this.DbzService.addCharacter(character);
 }



}
