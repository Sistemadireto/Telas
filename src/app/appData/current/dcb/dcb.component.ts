import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

const seconds = interval(1000);

@Component({
  selector: 'app-dcb',
  templateUrl: './dcb.component.html',
  styleUrls: ['./dcb.component.scss']
})
export class DcbComponent implements OnInit {

  timePrint: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  time: Date;

  constructor() {
    seconds.pipe(timeout(1100)).subscribe(value => {
      this.time = new Date();

      const ss = this.time.getSeconds();
      const mm = this.time.getMinutes();
      const hh = this.time.getHours();

      this.timePrint = [
        (hh % 64) < 32 ? 0 : 1,
        (hh % 32) < 16 ? 0 : 1,
        (hh % 16) < 8 ? 0 : 1,
        (hh % 8) < 4 ? 0 : 1,
        (hh % 4) < 2 ? 0 : 1,
        (hh % 2),

        (mm % 64) < 32 ? 0 : 1,
        (mm % 32) < 16 ? 0 : 1,
        (mm % 16) < 8 ? 0 : 1,
        (mm % 8) < 4 ? 0 : 1,
        (mm % 4) < 2 ? 0 : 1,
        (mm % 2),

        (ss % 64) < 32 ? 0 : 1,
        (ss % 32) < 16 ? 0 : 1,
        (ss % 16) < 8 ? 0 : 1,
        (ss % 8) < 4 ? 0 : 1,
        (ss % 4) < 2 ? 0 : 1,
        (ss % 2),
      ];
    });
  }

  ngOnInit() { }

}
