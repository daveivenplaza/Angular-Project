import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSpaces'
})
export class ConvertSpacesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
