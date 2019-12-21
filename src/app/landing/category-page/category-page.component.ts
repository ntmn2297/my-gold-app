import { Component, OnInit } from '@angular/core';
import { loaisanpham } from '../model/loaisanpham';
import { HttpClient, HttpParams } from "@angular/common/http";
import { donvitinh } from '../model/donvitinh';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import {UpdateCategoryDialogComponent} from "./update-category-dialog/update-category-dialog.component";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  loaisanpham: loaisanpham[] =[];
  donvitinh: donvitinh[] = [];
  dialogConfig: ModalOptions = {};
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.getLoaisanpham();
    this.getDonvitinh();
  }

  getLoaisanpham(){
    this.http.get< loaisanpham[]>('/loaisanpham').subscribe(rs => {
      this.loaisanpham = rs;
    })
  }

 tendonvitinh(madonvitinh: number): string{
   let tendonvitinh: string;
    this.donvitinh.forEach(rs => {
      if (rs.MADONVITINH == madonvitinh) {
        tendonvitinh = rs.TENDONVITINH;
      }
    });
    return tendonvitinh;
  }

  getDonvitinh(){
    this.http.get< donvitinh[]>('/donvitinh').subscribe(rs => {
      this.donvitinh = rs;
    })
  }

  delete(item: loaisanpham){
    this.http.delete('/loaisanpham/' + item.MALOAISANPHAM).subscribe(rs => {
      this.getLoaisanpham();
    });
  }

  update(item: loaisanpham){
    this.dialogConfig.initialState = {
      donvitinh: this.donvitinh,
      item: item,
    };
    this.modalService.show(UpdateCategoryDialogComponent, this.dialogConfig);
    this.modalService.onHidden.subscribe(rs => {
      this.getLoaisanpham();
    })
  }

  add(){
    this.dialogConfig.initialState = {
      donvitinh: this.donvitinh
    };
    this.modalService.show(AddCategoryDialogComponent, this.dialogConfig);
    this.modalService.onHidden.subscribe(rs => {
      this.getLoaisanpham();
    })
  }


}
