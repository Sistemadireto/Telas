import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-stockmanager',
  templateUrl: './stockmanager.component.html',
  styleUrls: ['./stockmanager.component.scss']
})
export class StockmanagerComponent implements OnInit {

  constructor(public appDataService: AppDataService) {
    this.appDataService.appData.appSettings.stockmanager = {
      style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
    };
  }

  ngOnInit() {
  }

  closeApp(key: string) {
    this.appDataService.closeApp(key);
  }

}
