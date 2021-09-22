import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords'
})
export class SliceWordsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substr(0,10);
  }

}
