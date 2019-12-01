import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const numbers = value.match(/\d/g);
    let numberLength = 0;
    if (numbers) { numberLength = numbers.join('').length; }
    if (numberLength <= 11) {
      // tslint:disable-next-line: max-line-length
      return numbers[0] + numbers[1] + numbers[2] + '.' + numbers[3] + numbers[4] + numbers[5] + '.' + numbers[6] + numbers[7] + numbers[8] + '-' + numbers[9] + numbers[10];
    } else {
      // tslint:disable-next-line: max-line-length
      return numbers[1] + numbers[2] + '.' + numbers[3] + numbers[4] + numbers[5] + '.' + numbers[6] + numbers[7] + numbers[8] + '/' + numbers[9] + numbers[10] + numbers[11] + numbers[12] + '-' + numbers[13] + numbers[14];
    }
  }

}
