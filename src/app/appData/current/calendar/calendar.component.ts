import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  popup: string = 'month';
  days: any = [];
  date: Array<any> = [];
  now = new Date();
  today = {
    day: this.now.getDate(),
    month: this.now.getMonth(),
    year: this.now.getFullYear(),
    week_day: this.now.getDay()
  };
  selected = {
    day: this.now.getDate(),
    month: this.now.getMonth(),
    year: this.now.getFullYear(),
    week_day: this.now.getDay()
  };

  weekNameAbbr = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  weekName = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  monthNameAbbr = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  monthName = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  events: any = {};
  data: any = [];

  constructor(
    public appDataService: AppDataService
  ) {
    this.appDataService.appData.appSettings.calendar = {
      style: { transform: 'translate3d(0px, calc(50vh - 228px), 0px)', width: '732px', height: '457px', }
    };
    this.appDataService.setData();
    this.genMonth(this.now.getDate(), this.now.getMonth(), this.now.getFullYear());
  }

  ngOnInit() {
    this.appDataService
      .getAppData({ col: 'calendar', orderBy: 'datetime' })
      .subscribe(data => { this.data = data; console.log(data); });
  }

  month(args: any) {
    if (args == 'today') {
      this.selected.year = this.today.year;
      this.selected.month = this.today.month;
      this.selected.day = this.today.day;
    } else if (args == 'plus') {
      this.selected.month += 1;
      if (this.selected.month > 11) {
        this.selected.year += 1;
        this.selected.month = 0;
      }
    } else if (args == 'minus') {
      this.selected.month -= 1;
      if (this.selected.month < 0) {
        this.selected.year -= 1;
        this.selected.month = 11;
      }
    }
    this.genMonth(this.selected.day, this.selected.month, this.selected.year);
  }

  genMonth(day: number, month: number, year: number) {
    let y = 0;
    const daysMonth = new Date(year, (month + 1), 0).getDate();
    const lastWeekLastMonth = new Date(year, month, 0).getDay();
    const lastDayLastMonth = new Date(year, month, 0).getDate();
    for (let x = (lastDayLastMonth - lastWeekLastMonth); x <= lastDayLastMonth; x++ , y++) { this.days[y] = { dd: x, mm: month - 1, yy: year }; }
    for (let x = 1; x <= daysMonth; x++ , y++) { this.days[y] = { dd: x, mm: month, yy: year }; }
    for (let x = 1; y < 42; x++ , y++) { this.days[y] = { dd: x, mm: month + 1, yy: year }; }
  }

  change(val: any) {
    this.popup = val;
  }

  newEvent() {
    const date = (this.selected.year + '/' + (this.selected.month + 1) + '/' + this.selected.day).toString();
    // this.events[date].push({time:'00:00', title:'', note:''});
  }

  toDate(val: any) {
    const date = val.yy + '-' + (val.mm + 1) + '-' + val.dd;
    this.selected.year = val.yy;
    this.selected.month = val.mm;
    this.selected.day = val.dd;
    if (this.events[date]) { this.date = this.events[date]; }
    else { this.date = null; }
  }

  closeApp(val: string) {
    this.appDataService.closeApp(val);
  }

}
