import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { donvitinh } from '../model/donvitinh';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.scss']
})
export class UnitPageComponent implements OnInit {

  donvitinh: donvitinh[] = []
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get< donvitinh[]>('/donvitinh').subscribe(rs => {
      this.donvitinh = rs;
    })
  }

}
