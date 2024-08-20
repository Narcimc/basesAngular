import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  //template: '<h1>Hola MUndo Counter<h1>',//templatecon html solo cuando es uno o hasta 4 lineas
//template ya para poner varias lineas
//como puedo hacer para que valga el template es decir tod lo que esta dentro la parte de los metodos que uso en el app.component.ts?
template: `
  <h4>counter: {{counter}}</h4>
  <button class="bnt" (click)="incrementar(1)" >+1</button>
  <button class="bnt" (click)="incrementar(-1)" >-1</button>
  <button class="bnt" (click)="reset()">Reset</button>
  <span>Narcimcs</span>

`

})
export class CounterComponent{
  public counter: number = 10;
  incrementar(value: number){
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }

  constructor() { }


}

