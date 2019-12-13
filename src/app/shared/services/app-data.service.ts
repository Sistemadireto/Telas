import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface AppData {
  user: any;
  appList: Array<any>;
  appsOpened: Array<any>;
  appSettings: {
    clientes: any;
    calendar: any;
    mediaPlayer: any;
    system: any;
    ativuz: any;
    os: any;
    stockmanager: any;
    fotos: any;
    expense: any;
  };
  system: {
    preferences: {
      style: {
        background: number;
        bgOptions: any;
      }
    }
  };
}

@Injectable({
  providedIn: 'root'
})

export class AppDataService {

  appData: AppData = {
    user: JSON.parse(localStorage.getItem('userData')),
    appList: [],
    appsOpened: ['dcb'],
    appSettings: {
      clientes: {},
      calendar: {},
      mediaPlayer: {},
      system: {},
      ativuz: {},
      os: {},
      stockmanager: {},
      fotos: {},
      expense: {}
    },
    system: {
      preferences: {
        style: {
          background: 0,
          bgOptions: [
            { index: 0, id: 'bg_default', name: 'Colorfull' },
            { index: 1, id: 'bg_green', name: 'Deep Sea' },
            { index: 2, id: 'bg_lake', name: 'Lake' },
            { index: 3, id: 'bg_afternoon', name: 'Afternoon' },
            { index: 4, id: 'bg_space', name: 'Space' }
          ]
        }
      }
    }
  };

  constructor(
    public afs: AngularFirestore,
    public router: Router
  ) {
    this.appData.user = JSON.parse(localStorage.getItem('userData'));
    this.appData = this.getLocalData();
  }

  setCustomData(value: any) {
    this.appData.system.preferences.style.background = value;
    this.setData();
  }

  openApp(val: string) {
    const index = this.appData.appsOpened.indexOf(val);
    if (index >= 0) {
      this.appData.appsOpened.splice(index, 1);
      this.appData.appsOpened.push(val);
    } else {
      this.appData.appsOpened.push(val);
    }
    this.setData();
  }

  closeApp(val: string) {
    const index = this.appData.appsOpened.indexOf(val);
    if (index >= 0) {
      this.appData.appsOpened.splice(index, 1);
      const last = this.appData.appsOpened.reverse();
      last[0] ? this.router.navigate(['dashboard', 'apps', last[0]]) : this.router.navigate(['dashboard', 'apps']);
      this.appData.appsOpened.reverse();
      this.setData();
    }
  }

  setData() {
    localStorage.setItem('appData', JSON.stringify(this.appData));
  }

  getData() {
    localStorage.getItem('appData');
  }

  public getAppData({ col, orderBy, startCol, doc }: { doc?: any, col: any; orderBy: any; startCol?: any; }) {

    const start = startCol && doc ? `${startCol}/${doc}/${col}` : `userData/${JSON.parse(localStorage.getItem('userData')).uid}/${col}`;

    return this.afs.collection(start,
      ref => ref.orderBy(orderBy) // .limit(limit)
    ).snapshotChanges().pipe(map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data(); const id = change.payload.doc.id; return { id, ...data };
      });
    }));
  }

  delAppData(app: string, key: string) {
    return this.afs.collection(`userData/${this.appData.user.uid}/${app}`).doc(key).delete();
  }

  setAppData(app: string, data: any) {
    return this.afs.collection(`userData/${this.appData.user.uid}/${app}`).add(data);
  }

  updateAppData({ app, key, data }: { app: any; key: any; data: any; }) {
    return this.afs.collection(`userData/${this.appData.user.uid}/${app}`).doc(key).update(data);
  }

  setSubCollection({ app, key, data }: { app: string, key: string, data: any }) {
    return this.afs.collection(`userData/${this.appData.user.uid}/${app}/`).doc(key).set(data, { merge: true });
  }

  getLocalData() {
    return JSON.parse(localStorage.getItem('appData')) || this.appData;
  }
}
