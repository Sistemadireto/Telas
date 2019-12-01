import { Component, OnInit, ElementRef } from '@angular/core';
import { AppDataService } from './shared/services/app-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  appData = this.appDataService.appData;
  appDataSubject: Subject<any> = new Subject<any>();

  constructor(
    public appDataService: AppDataService,
    public elementRef: ElementRef
  ) {
    let spin = elementRef.nativeElement.parentNode.children[0];
    spin.classList.add('TT');
    setTimeout(function () { spin.remove(); }, 2600);

    this.appDataSubject.subscribe((value) => { this.appData = value; });
  }

  ngOnInit() { }

}
