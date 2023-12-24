import { Component } from '@angular/core';

const imageUrl : string = "../../../../assets/image/ilha.png";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = "Welcome to Project Front-end";
  subTitle : string = "Dashboard CFP-PROJECT";
  urlImage = imageUrl;


}
