import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { Data } from './expenseData';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})

export class ExpenseComponent implements OnInit {

  now = new Date();

  data = [
    new Data('b_orange', '2020-1-1', 'local_shipping', 'Windstorm', 'descrição', 3000),
    new Data('b_blue01', '2020-1-1', 'local_gas_station', 'Bombasto', 'descrição', 30),
    new Data('b_darkgreen', '2020-3-3', 'hotel', 'Magneta', 'descrição', 1300),
  ];

  colors = ['b_orange', 'b_blue01', 'b_darkgreen', 'b_darkgray', 'b_green', 'b_red01', 'b_darkblue', 'b_red02', 'b_black02', 'b_purple', 'b_blue02', 'b_aqua', 'b_black01', 'b_gray'];

  config: any = {
    viewMode: 'home',
    menuToggle: false,
    profile: ['standard', 'Perfil padrão'],
    date: {
      months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      selected: {
        day: this.now.getDate(),
        month: this.now.getMonth(),
        year: this.now.getFullYear(),
        week_day: this.now.getDay()
      },
      today: {
        day: this.now.getDate(),
        month: this.now.getMonth(),
        year: this.now.getFullYear(),
        week_day: this.now.getDay()
      }
    }
  };

  constructor(public appDataService: AppDataService) {
    this.appDataService.appData.appSettings.expense = {
      style: { transform: 'translate3d(0px, calc(50vh - 310px), 0px)', width: '905px', height: '620px', }
    };
  }

  ngOnInit() {
    console.log(this.data);
  }

  month(args: any) {
    if (args == 'today') {
      this.config.date.selected.year = this.config.date.today.year;
      this.config.date.selected.month = this.config.date.today.month;
      this.config.date.selected.day = this.config.date.today.day;
    }
    if (args == 'plus') {
      this.config.date.selected.month += 1;
      if (this.config.date.selected.month > 11) {
        this.config.date.selected.year += 1;
        this.config.date.selected.month = 0;
      }
    } else if (args == 'minus') {
      this.config.date.selected.month -= 1;
      if (this.config.date.selected.month < 0) {
        this.config.date.selected.year -= 1;
        this.config.date.selected.month = 11;
      }
    }
    console.log(this.config.date.selected);
  }

  closeApp(key: string) {
    this.appDataService.closeApp(key);
  }

}
