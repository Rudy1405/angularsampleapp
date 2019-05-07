import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tophone'
})
export class TophonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
