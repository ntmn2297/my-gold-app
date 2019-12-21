import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { donvitinh } from '../model/donvitinh';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import { AddDialogComponent } from 'src/app/landing/unit-page/add-dialog/add-dialog.component';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.scss']
})
export class UnitPageComponent implements OnInit {

  donvitinh: donvitinh[] = [];
  dialogConfig: ModalOptions = {};
  modal: BsModalRef;
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.getDonvitinh();
  }

  getDonvitinh(){
    this.http.get< donvitinh[]>('/donvitinh').subscribe(rs => {
      this.donvitinh = rs;
    })
  }

  delete(item: donvitinh){
    this.http.delete('/donvitinh/' + item.MADONVITINH).subscribe(rs => {
      this.getDonvitinh();
    });
  }

  add(){
    this.modalService.show(AddDialogComponent);
    this.modalService.onHidden.subscribe(rs => {
      this.getDonvitinh();
    })
  }

}
