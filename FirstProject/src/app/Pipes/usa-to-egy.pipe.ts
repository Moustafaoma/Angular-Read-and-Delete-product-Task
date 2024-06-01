import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usaToEgy'
})
export class UsaToEgyPipe implements PipeTransform {

  transform(value: number): number {
    return value*50;
  }

}
