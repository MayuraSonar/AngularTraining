import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective  {

  constructor(private eleref: ElementRef) {
    this.eleref.nativeElement.style.background = 'blue';


  }

  changeBackGroundColor(changecolor:string)
  {
    this.eleref.nativeElement.style.background=changecolor;
  }



}
