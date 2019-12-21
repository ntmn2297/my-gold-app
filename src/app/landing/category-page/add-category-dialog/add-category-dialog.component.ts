import { Component, OnInit } from '@angular/core';
import { donvitinh } from '../../model/donvitinh';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {loaisanpham} from "../../model/loaisanpham";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  donvitinh: donvitinh[] = [];
  item: loaisanpham = {
    MALOAISANPHAM: null,
    TENLOAISANPHAM: '',
    PHANTRAMLOINHUAN: null,
    MADONVITINH: null
  };

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  add(){
    let param = {
      "MALOAISANPHAM": this.item.MALOAISANPHAM,
      "TENLOAISANPHAM": this.item.TENLOAISANPHAM,
      "PHANTRAMLOINHUAN": this.item.PHANTRAMLOINHUAN,
      "MADONVITINH": this.item.MADONVITINH
    };
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/loaisanpham', JSON.stringify(param), {headers: header}).subscribe((rs: any) => {
      this.bsModalRef.hide();
    })
  }

}
