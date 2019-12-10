import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  video: HTMLVideoElement;
  @ViewChild('video', { static: false }) set VideoEl(el: ElementRef) {
    this.video = el.nativeElement;
  }
  input: HTMLInputElement;
  @ViewChild('input', { static: false }) set InputFileEl(el: ElementRef) {
    this.input = el.nativeElement;
  }
  progressSlider: HTMLInputElement;
  @ViewChild('progressSlider', { static: false }) set ProgressSliderEl(el: ElementRef) {
    this.progressSlider = el.nativeElement;
  }
  volumeSlider: HTMLInputElement;
  @ViewChild('volumeSlider', { static: false }) set VolumeSliderEl(el: ElementRef) {
    this.volumeSlider = el.nativeElement;
  }
  myFileList: any = [];
  filesSelected = false;
  videoSource: any = '';
  uploadList: any = [];
  shuffle = false;

  searchText: any;

  data: any = [];

  uploadProgress$: any;

  constructor(
    public appDataService: AppDataService,
  ) {
    this.appDataService.appData.appSettings.mediaPlayer = {
      style: { transform: 'translate3d(0px, calc(50vh - 250px), 0px)', width: '980px', height: '500px', }
    };
    this.appDataService.setData();
  }

  ngOnInit() {
    this.appDataService
      .getAppData({ col: 'music', orderBy: 'title' })
      .subscribe(data => { this.data = data; });
  }

  onFileChange(data: any) {

  }

  closeApp(val: string) {
    this.appDataService.closeApp(val);
  }

  delFile(key: any) {
    this.appDataService.delAppData('music', key);
  }

  startPlay(val: any) {
    this.videoSource = 'https://telasfiles.blob.core.windows.net/telas360/' + val;
  }

  timeConvert(time: number) {
    return (time ? (Math.floor(time / 60).toString().substr(-2)) : '0') + ':' + (time ? (('0' + Math.floor(time % 60)).substr(-2)) : '00');
  }

  player(event: any) {
    if (this.video.duration) {
      switch (event) {
        case 'toggle': this.video.paused ? this.video.play() : this.video.pause(); break;
        case 'stop': this.video.pause(); break;
        case 'backward': this.video.currentTime -= 10; break;
        case 'forward': this.video.currentTime += 30; break;
      }
    }
  }

  formatBytes(a: number, b: number) {
    if (0 === a) { return '0 Bytes'; }
    const c = 1024;
    const d = b || 2;
    const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
  }

  fileChange(event: { target: { files: any[]; }; }) {
    if (event.target.files && event.target.files[0]) {
      let x: number; for (x = 0; x < event.target.files.length; x++) {
        const file = event.target.files[x];
        if (this.uploadList.indexOf(file.name) < 0) {
          [].push(file); this.uploadList.push(file.name);
        }
      }
    }
  }

  private IDGenerator(len: any, bits: any) {
    bits = bits || 36;
    let outStr = '';
    let newStr: string;
    while (outStr.length < len) {
      newStr = Math.random().toString(bits).slice(2);
      outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr.toUpperCase();
  }

}
