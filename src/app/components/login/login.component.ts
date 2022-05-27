import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private authService:AuthService) { }
  authForm:FormGroup
  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.authForm=this.formBuilder.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
  async login(){
    if(this.authForm.valid){
      let loginModel= Object.assign({},this.authForm.value)
      await this.authService.login(loginModel)
    }
  }
  async signup(){
    if(this.authForm.valid){
      let signupModel = Object.assign({},this.authForm.value)
      await this.authService.signup(signupModel)
      
    }
  }

}
