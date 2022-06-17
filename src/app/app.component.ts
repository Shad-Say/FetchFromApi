import { Component, OnInit } from '@angular/core';
import { Idata } from './type';
import { ServiceService } from './services/service.service';
import { count, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private serviceInstance: ServiceService) {}
  title = 'firstApp';
  dataSheet: any;
  all = 0;
  partial = 0;
  none = 0;

  ngOnInit() {
    this.serviceInstance.getData().subscribe((data) => {
      this.dataSheet = data;
      for (let entry of this.dataSheet.data) {
        let count = 0;
        let length = 0;

        for (let value of entry.marksInfo) {
          if (value.obtainedMarks === '1') {
            count += 1;
          }
          length += 1;
        }
        if (count === length) {
          this.all += 1;
        } else {
          if (count === 0) {
            this.none += 1;
          } else {
            this.partial += 1;
          }
        }
      }
    });
  }
}
