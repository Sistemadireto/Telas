import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { BlobService, UploadParams } from 'angular-azure-blob-service';
import { ToastrService } from 'ngx-toastr';

interface DocNewData {
  name: string;
  cpf: number;
  receitas: string[];
}

const Config: UploadParams = {
  // tslint:disable-next-line: max-line-length
  sas: '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-07-02T09:34:36Z&st=2019-07-02T01:34:36Z&spr=https&sig=NWPwoIYpKoNH2InxPmY7LDLz43LhFgRkqXKNvm%2BF99w%3D',
  storageAccount: 'telasfiles',
  containerName: 'telas360'
};

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  searchText = '';
  pageNum = 0;
  data: any = [];
  searchBox = [false];
  config = [false];
  newData: any = { viewMode: null };
  docnewData: DocNewData = { name: null, cpf: null, receitas: [] };
  novaReceita: any;
  showRecipeData: any;

  azureConfig: any;
  percent = null;

  constructor(
    public toast: ToastrService,
    public afs: AngularFirestore,
    public appData: AppDataService,
    public blob: BlobService
  ) {
    this.appData.appData.appSettings.clientes = {
      style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
    };
    this.appData.setData();
  }

  ngOnInit() {
    this.appData.getAppData({ col: 'clientes', orderBy: 'name' }).subscribe(data => { this.data = data; });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.novaReceita = event.target.files[0];
    }
  }

  private uploadFile(currentFile: any, data: any) {
    const baseUrl = this.blob.generateBlobUrl(Config, currentFile.name);
    this.azureConfig = {
      baseUrl,
      sasToken: Config.sas,
      blockSize: 1024 * 64, // OPTIONAL, default value is 1024 * 32
      file: currentFile,
      complete: () => {
        this.toast.success(this.newData.clientData.name, 'Nova receita incluída');
        this.appData.setSubCollection(data).then(() => {
          this.newData.viewMode = 'details';
        });
      },
      error: (err: any) => {
        this.newData.viewMode = 'details';
        this.toast.error(err, 'Error');
        // console.log('Error:', err);
      },
      progress: (percent: any) => {
        this.percent = percent;
      }
    };
    this.blob.upload(this.azureConfig);
  }

  addClient(form: NgForm) {
    if (form.valid === true) {
      this.newData = { viewMode: null };
      const userName = form.value.name;
      this.appData.setAppData('clientes', form.value).then(() => {
        this.toast.success(userName, 'Novo(a) cliente incluído(a)');
      });
    }
  }
  delClient(data: any) {
    this.newData = { viewMode: null };
    const userName = data.name;
    this.appData.delAppData('clientes', data.id).then(() => {
      this.toast.success(userName, 'Cliente removido(a)');
    });
  }
  editClient(form: NgForm) {
    if (form.valid === true) {
      const key = this.newData.clientData.id;
      const data = form.value;
      this.appData.updateAppData({ app: 'clientes', key, data }).then(() => {
        this.toast.success(data.name, 'Alterações salvas');
      });
    }
  }

  addRecipe() {
    this.newData.viewMode = 'addRecipe';
  }
  newRecipe(form: NgForm) {
    if (form.valid === true) {
      this.newData.viewMode = 'sending';
      const key = this.newData.clientData.id;
      const data: DocNewData = this.newData.clientData;
      if (!data.receitas) { data.receitas = []; }
      data.receitas.push(form.value);
      form.value.file = this.novaReceita.name;
      this.uploadFile(this.novaReceita, { app: 'clientes', key, data });
    }
  }

  show(data: any) {
    this.newData = { viewMode: 'details', clientData: data };
  }

  showRecipe(key: any) {
    this.showRecipeData = 'https://telasfiles.blob.core.windows.net/telas360/' + key;
  }

  dateConverter(date: any) {
    return date.seconds ? date.toDate() : Date.parse(date);
  }

  goSearch() { }

  closeApp(key: string) {
    this.appData.closeApp(key);
  }


}

