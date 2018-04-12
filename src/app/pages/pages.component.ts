import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http'; 
import { NbMenuItem,NbMenuService } from '@nebular/theme';
import 'rxjs/add/operator/map'
//import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
}) 

export class PagesComponent   {   
  menu : NbMenuItem[]=[];
  constructor(private _http: Http,private _NbMenuService: NbMenuService) {}
  ngOnInit() {
    this.datass();
  }
  datass() { 
      this._http.post('http://localhost:8080/mavenproject1/rest/payment/pay?key=14',null)
      .map((data : Response) =>{
        return data.json() as NbMenuItem[];
      }).toPromise().then(x => { 
        this.menu = x;
        console.log(x);
      }) 
  }
}
