import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

 /*  @ViewChild */
  pageName:string = "Products"
 /*  dataSource: DataTableDataSource; */

  constructor() { }

  ngOnInit(): void {
    /* this.dataSource = new DataTableDataSource(this.paginator, this.sort); */
  }

}
