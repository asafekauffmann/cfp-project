import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const iconLoginWelcome: string  = "../../../assets/logo/log01.png";
const imageLoginWelcome: string = "../../../assets/image/Pipa.png";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  urlImageIcon = iconLoginWelcome;
  urlImage = imageLoginWelcome;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit() {

    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if (username === "user" && password === "1234") {
        this.router.navigateByUrl('/home')
        console.log('Auth log In succeess!');
        alert("Log In success")

      } else {
        console.log('Falha na autenticação. Verifique suas credenciais.');
        alert("User or Password incorrert")
      }
    } else {
      alert("error")
    }
  }


}
