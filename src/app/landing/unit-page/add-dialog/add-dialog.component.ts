import { Component, OnInit } from '@angular/core';
import { donvitinh } from 'src/app/landing/model/donvitinh';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  item: donvitinh = {
    MADONVITINH: null,
    TENDONVITINH: ''
  };
  constructor(private bsModalRef: BsModalRef,
    private modalService: BsModalService, private http: HttpClient, private alerts: AlertsService) { }

  ngOnInit() {
  }

  add(){
    let param = {
      "TENDONVITINH": this.item.TENDONVITINH
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/donvitinh', JSON.stringify(param), {headers: header}).subscribe((rs: any) => {
    })
  }
}
