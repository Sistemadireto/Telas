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
    new Data('b_darkgray', '2020-3-3', 'local_dining', 'Magneta', 'descrição', 300),
    new Data('b_green', '2020-5-5', 'directions', 'Magneta', 'descrição', 3200),
    new Data('b_red01', '2020-6-6', 'local_hospital', 'Tornado', 'descrição', 300),
    new Data('b_aqua', '2020-1-12', 'local_dining', 'Magneta', 'descrição', 10300),
    new Data('b_black01', '2020-1-13', 'directions', 'Magneta', 'descrição', 100300),
    new Data('b_gray', '2020-1-14', 'local_hospital', 'Tornado', 'descrição', 130),
    new Data('b_orange', '2020-1-15', 'traffic', 'Tornado', 'descrição', 13),
    new Data('b_blue01', '2019-1-16', 'person_pin', 'Tornado', 'descrição', 3),
    new Data('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
    new Data('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
    new Data('b_darkblue', '2020-6-7', 'traffic', 'Tornado', 'descrição', 302),
    new Data('b_red02', '2020-6-6', 'person_pin', 'Tornado', 'descrição', 500),
    new Data('b_black02', '2020-7-7', 'local_shipping', 'Windstorm', 'descrição', 800),
    new Data('b_purple', '2020-5-5', 'local_gas_station', 'Bombasto', 'descrição', 300),
    new Data('b_blue02', '2020-1-11', 'hotel', 'Magneta', 'descrição', 8700),
    new Data('b_aqua', '2020-1-12', 'local_dining', 'Magneta', 'descrição', 10300),
    new Data('b_black01', '2020-1-13', 'directions', 'Magneta', 'descrição', 100300),
    new Data('b_gray', '2020-1-14', 'local_hospital', 'Tornado', 'descrição', 130),
    new Data('b_orange', '2020-1-15', 'traffic', 'Tornado', 'descrição', 13),
    new Data('b_blue01', '2019-1-16', 'person_pin', 'Tornado', 'descrição', 3),
    new Data('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
    new Data('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
    new Data('b_orange', '2019-5-5', 'directions', 'Magneta', 'descrição', 300),
    new Data('b_blue01', '2019-5-5', 'local_hospital', 'Tornado', 'descrição', 300),
    new Data('b_darkgreen', '2019-1-3', 'traffic', 'Tornado', 'descrição', 300),
    new Data('b_darkgray', '2019-1-4', 'person_pin', 'Tornado', 'descrição', 300),
    new Data('b_darkgreen', '2019-1-17', 'local_shipping', 'Windstorm', 'descrição', 300),
    new Data('b_darkgray', '2019-1-18', 'local_gas_station', 'Bombasto', 'descrição', 300),
    new Data('b_green', '2019-1-19', 'hotel', 'Magneta', 'descrição', 300),
    new Data('b_red01', '2019-3-3', 'local_dining', 'Magneta', 'descrição', 300),
    new Data('b_darkblue', '2019-4-4', 'directions', 'Magneta', 'descrição', 300),
    new Data('b_red02', '2019-4-4', 'local_hospital', 'Tornado', 'descrição', 300),
    new Data('b_black02', '2019-4-4', 'traffic', 'Tornado', 'descrição', 300),
    new Data('b_purple', '2019-3-3', 'person_pin', 'Tornado', 'descrição', 300),
    new Data('b_blue02', '2019-3-3', 'local_shipping', 'Windstorm', 'descrição', 300),
    new Data('b_aqua', '2019-3-3', 'local_gas_station', 'Bombasto', 'descrição', 300),
    new Data('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
    new Data('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
    new Data('b_orange', '2019-5-5', 'directions', 'Magneta', 'descrição', 300),
    new Data('b_blue01', '2019-5-5', 'local_hospital', 'Tornado', 'descrição', 300),
    new Data('b_darkgreen', '2019-1-3', 'traffic', 'Tornado', 'descrição', 300),
    new Data('b_darkgray', '2019-1-4', 'person_pin', 'Tornado', 'descrição', 300)
  ];

  colors = ['b_orange', 'b_blue01', 'b_darkgreen', 'b_darkgray', 'b_green', 'b_red01', 'b_darkblue', 'b_red02', 'b_black02', 'b_purple', 'b_blue02', 'b_aqua', 'b_black01', 'b_gray'];

  config: any = {
    viewMode: 'home',
    menuToggle: false,
    profile: ['standard', 'Perfil padrão'],
    date: {
      months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      week: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
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

  ngOnInit() { }

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
