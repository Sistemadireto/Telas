import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  appStore = {};
  searchText: any;
  desc: any = null;

  constructor(
    public toast: ToastrService,
    public appData: AppDataService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.appData.getAppData({ startCol: 'appStore', doc: 'currentApps', col: 'list', orderBy: 'name', }).subscribe(data => {
      this.appStore = data;
    });
  }

  dateConverter(date: any) {
    return date.seconds ? date.toDate() : Date.parse(date);
  }

  install(todo: any, app: any) {
    switch (todo) {
      case 'install':
        this.appData.setSubCollection({ app: 'appList', key: app.id, data: app }).then((a) => {
          this.toast.success(app.title, 'Aplicativo instalado com sucesso');
        });
        break;
      case 'uninstall':
        this.appData.delAppData('appList', app.id).then((a) => {
          this.toast.success(app.title, 'Aplicativo removido');
        });
        this.appData.closeApp(app.name);
        break;
    }
  }

  find(data: any, key: any) {
    return JSON.stringify(data).includes(key);
  }

  goSearch(data: any) {
    console.log(data);
  }

}
