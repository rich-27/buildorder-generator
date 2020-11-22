import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoin'
})
export class StringJoinPipe implements PipeTransform {

  transform(value: string | string[], separator: string = ' | '): string {
    return Array.isArray(value) ? value.filter(s => s?.length > 0).join(separator) : value;
  }
}
