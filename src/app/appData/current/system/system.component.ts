import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

import { AdDirective } from '../../../ad.directive';
import { AdItem } from '../../../ad-item';
import { StartComponent } from './start/start.component';
import { NotifyComponent } from './notify/notify.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomizeComponent } from './customize/customize.component';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  @Input() ads: AdItem[];
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    public appDataService: AppDataService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.appDataService.appData.appSettings.system = {
      style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
    };

    this.appDataService.setData();

    this.ads = [
      new AdItem(StartComponent),
      new AdItem(NotifyComponent),
      new AdItem(ProfileComponent),
      new AdItem(CustomizeComponent),
    ];
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit() {
    this.loadComponent(0);
  }

  closeApp(key: string) {
    this.appDataService.closeApp(key);
  }

  loadComponent(index: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads[index].component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
    this.appDataService.setData();
  }

}
