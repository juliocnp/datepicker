import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  tratarData1(data: Date) {
    if (data) {
      console.log("Data 1: " + data.toDateString());
    }
  }

  tratarData2(data: Date) {
    if (data) {
      console.log("Data 2: " + data.toDateString());
    }
  }
}
