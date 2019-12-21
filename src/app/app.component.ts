import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {CompleterData, CompleterService} from "ng2-completer";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'temp-angular-app';
  bsModalRef: BsModalRef;
  isShowModal: boolean = false ;
  searchStr: string;
  dataService: CompleterData;

  constructor(private modalService: BsModalService,
     private http: HttpClient, private completerService: CompleterService, private translate: TranslateService) {
    this.dataService = this.completerService.remote('/api/product/list', 'name', 'name');
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    window.addEventListener('beforeunload', (event) => {
      localStorage.clear();
    })
  }

  ngOnInit() {

  }

  login(){
    this.modalService.show(LoginDialogComponent, {class: 'modal-dialog-centered'});
    (document.querySelector('.modal-content') as HTMLElement).style.border = 'none';
    this.isShowModal = true;
  }

}

