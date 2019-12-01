import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciais'
})
export class IniciaisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    value.split(' ').forEach((element: { charAt: (arg0: number) => string; }) => { result += element.charAt(0); });
    return result.substring(0, 3);
  }

}
