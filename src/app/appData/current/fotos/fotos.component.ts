import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  constructor(public appDataService: AppDataService) {
    this.appDataService.appData.appSettings.fotos = {
      style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
    };
  }

  ngOnInit() {
  }

  closeApp(key: string) {
    this.appDataService.closeApp(key);
  }

}
