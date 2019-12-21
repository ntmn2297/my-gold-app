import { Component, OnInit } from '@angular/core';
import {loaisanpham} from "../../model/loaisanpham";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap";
import {donvitinh} from "../../model/donvitinh";

@Component({
  selector: 'app-update-category-dialog',
  templateUrl: './update-category-dialog.component.html',
  styleUrls: ['./update-category-dialog.component.scss']
})
export class UpdateCategoryDialogComponent implements OnInit {

  donvitinh: donvitinh[] = [];
  item: loaisanpham;

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  update(){
    let param = {
      "TENLOAISANPHAM": this.item.TENLOAISANPHAM,
      "PHANTRAMLOINHUAN": this.item.PHANTRAMLOINHUAN,
      "MADONVITINH": this.item.MADONVITINH
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put('/loaisanpham/' + this.item.MALOAISANPHAM, JSON.stringify(param), {headers: header}).subscribe((rs: any) => {
      this.bsModalRef.hide();
    })
  }

}
