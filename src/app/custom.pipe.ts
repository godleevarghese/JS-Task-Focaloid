import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Multiplier'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, mul : number): unknown {
    return mul;
  }

}
