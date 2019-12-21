import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import { nhacungcap } from '../model/nhacungcap';
import { AddSupplierDialogComponent } from './add-supplier-dialog/add-supplier-dialog.component';


@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styleUrls: ['./supplier-page.component.scss']
})
export class SupplierPageComponent implements OnInit {

  nhacungcap: nhacungcap[] = [];
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.getNhacungcap();
  }

  getNhacungcap(){
    this.http.get< nhacungcap[]>('/nhacungcap').subscribe(rs => {
      this.nhacungcap = rs;
    })
  }

  delete(item: nhacungcap){
    this.http.delete('/nhacungcap/' + item.MANHACUNGCAP).subscribe(rs => {
      this.getNhacungcap();
    });
  }

  add(){
    this.modalService.show(AddSupplierDialogComponent);
  }


}
