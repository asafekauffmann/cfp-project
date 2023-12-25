import { Component } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent {

  pageName: string = "Home"

  constructor() { }

  ngOnInit() { }

}
