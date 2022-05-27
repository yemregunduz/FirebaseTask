import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormValidatorService } from 'src/app/services/formValidator/form-validator.service';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService,
    private formValidatorService:FormValidatorService) { }
  loginForm:FormGroup

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      username:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }
  async login(){
    if(this.formValidatorService.formValidator(this.loginForm)){
      let loginModel= Object.assign({},this.loginForm.value)
      await this.authService.login(loginModel)
    }
  }

}
