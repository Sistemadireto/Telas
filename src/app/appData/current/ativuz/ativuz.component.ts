import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ativuz',
  templateUrl: './ativuz.component.html',
  styleUrls: ['./ativuz.component.scss']
})
export class AtivuzComponent implements OnInit {

  form: any;
  data: any;
  filename: any;

  constructor(
    public toast: ToastrService,
    public appDataService: AppDataService
  ) {
    this.appDataService.appData.appSettings.ativuz = {
      style: { transform: 'translate3d(0px, calc(50vh - 228px), 0px)', width: '732px', height: '457px' }
    };
  }

  ngOnInit() {
    this.appDataService.getAppData({ col: 'ativuz', orderBy: 'name' }).subscribe(data => { this.data = data; });
  }

  send(form: any) {
    const userName = form.value.name;
    form.value.file = this.filename;
    this.appDataService.setAppData('ativuz', form.value).then(() => {
      this.toast.success(userName, 'Novo(a) cliente incluído(a)');
    });
  }

  onFileChange(file: any) {
    this.filename = file.target.files[0].name;
  }

  closeApp(key: string) {
    this.appDataService.closeApp(key);
  }

}
