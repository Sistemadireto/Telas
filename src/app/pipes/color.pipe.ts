import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    switch (args) {
      case 'random':
        const s = 'abcdefghijklmnopqrstuvwxyz';
        result = 'bg-' + s.charAt(Math.floor(Math.random() * s.length)).toLowerCase();
        break;
      default:
        result = value ? 'bg-' + value.charAt(0).toLowerCase() : 'bg-a';
        break;
    }
    return result;
  }

}
