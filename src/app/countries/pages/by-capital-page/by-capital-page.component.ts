import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  //1 definir un metodo
  searchByCapital(value:string):void{
    console.log({value})
  }
}
