import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })

export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<any> {
    if (typeof args[0] === "undefined") {
      return array;
    }
    let direction = args[0][0];
    let column = args.replace('-', '');
    array.sort((a: any, b: any) => {
      let left = Number(new Date(a[column]));
      let right = Number(new Date(b[column]));
      return (direction === "-") ? right - left : left - right;
    });
    return array;
  }
}

/*
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(array, orderBy, asc = true) {
    if (array) {
      if (!orderBy || orderBy.trim() == "") { return array; }
      if (asc) {
        return Array.from(array).sort((item1: any, item2: any) => {
          return this.orderByComparator(item1[orderBy], item2[orderBy]);
        });
      } else {
        return Array.from(array).sort((item1: any, item2: any) => {
          return this.orderByComparator(item2[orderBy], item1[orderBy]);
        });
      }
    }
  }
  orderByComparator(a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
    } else {
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }
    return 0;
  }
}
*/