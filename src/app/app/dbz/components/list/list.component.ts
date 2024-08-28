import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',

    templateUrl: './list.component.html' ,
    styleUrl: './list.component.css',

})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { name: 'Goku', power: 100 },
  ]


  @Output()
  //onDelete
  public onDelete: EventEmitter<string> = new EventEmitter();



  deleteCharacterbyId(id?: string):void {
    //emitir el id del personaje
    if(!id) return ;
    console.log(id);
    this.onDelete.emit(id);

  }
}
