import { Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public el:ElementRef) { 

    el.nativeElement.style.textColor="white"
    el.nativeElement.style.backgroundColor="yellow"

  }

}
