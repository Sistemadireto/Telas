import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  customizeForm: FormGroup;

  bgOptions = this.appDataService.appData.system.preferences.style.bgOptions;

  constructor(
    private fb: FormBuilder,
    public appDataService: AppDataService,
  ) {
  }

  ngOnInit() {
    this.customizeForm = this.fb.group({
      bgControl: [this.bgOptions[this.appDataService.appData.system.preferences.style.background]]
    });

    this.customizeForm.valueChanges.subscribe((value: any) => {
      this.appDataService.setCustomData(value.bgControl.index);
    });
  }

}
