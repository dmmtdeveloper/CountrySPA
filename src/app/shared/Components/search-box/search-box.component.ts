import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})


export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  //2 Se usa en el componente hijo para declarar el evento que el padre escuchará.
  @Output()
  public onValue = new EventEmitter<string>()

  //3 crear un metodo que maneja el valor actual del input
  emitValue(value:string):void{
    this.onValue.emit(value)
  }
}
