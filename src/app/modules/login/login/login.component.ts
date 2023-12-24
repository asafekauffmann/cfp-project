import { Component } from '@angular/core';


const iconLoginWelcome: string  = "../../../assets/logo/log01.png";
const imageLoginWelcome: string = "../../../assets/image/Pipa.png";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  urlImageIcon = iconLoginWelcome;
  urlImage = imageLoginWelcome;


}
