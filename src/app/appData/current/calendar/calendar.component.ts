import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  popup: string;
  days: any = [];
  date: Array<any> = [];
  time: Date = new Date();
  selected = { day: null, month: null, year: null };
  weekNameAbbr = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  weekName = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  monthNameAbbr = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  monthName = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'];
  events: any = {};
  data: any = [];

  constructor(
    public appDataService: AppDataService
  ) {
    this.appDataService.appData.appSettings.calendar = {
      style: { transform: 'translate3d(0px, calc(50vh - 228px), 0px)', width: '732px', height: '457px', }
    };
    this.appDataService.setData();
    this.genMonth(this.time.getDate(), this.time.getMonth(), this.time.getFullYear());
  }

  ngOnInit() {
    this.appDataService
      .getAppData({ col: 'calendar', orderBy: 'datetime'})
      .subscribe(data => { this.data = data; });
  }

  genMonth(day: number, month: number, year: number) {
    this.popup = 'month';
    this.toDate({ dd: day, mm: month, yy: year });
    if (month > 11) { month = 0; year += 1; }
    if (month < 0) { month = 11; year -= 1; }
    let y = 0;
    const daysMonth = new Date(year, month + 1, 0).getDate();
    const lastWeekLastMonth = new Date(year, month, 0).getDay();
    const lastDayLastMonth = new Date(year, month, 0).getDate();
    for (let x = (lastDayLastMonth - lastWeekLastMonth); x <= lastDayLastMonth; x++ , y++) {
      this.days[y] = { dd: x, mm: month - 1, yy: year };
    }
    for (let x = 1; x <= daysMonth; x++ , y++) { this.days[y] = { dd: x, mm: month, yy: year }; }
    for (let x = 1; y < 42; x++ , y++) { this.days[y] = { dd: x, mm: month + 1, yy: year }; }
  }

  change(val: any) {
    this.popup = val;
    console.log(val);
  }

  newEvent() {
    const date = (this.selected.year + '/' + (this.selected.month + 1) + '/' + this.selected.day).toString();
    // this.events[date].push({time:'00:00', title:'', note:''});
  }

  toDate(val: any) {
    this.selected = { day: val.dd, month: val.mm, year: val.yy };
    const date = val.yy + '-' + (val.mm + 1) + '-' + val.dd;

    console.log(this.events, date);

    if (this.events[date]) {
      this.date = this.events[date];
    } else {
      this.date = null;
    }
  }

  closeApp(val: string) {
    this.appDataService.closeApp(val);
  }

}
