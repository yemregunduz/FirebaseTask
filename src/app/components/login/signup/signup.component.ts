import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormValidatorService } from 'src/app/services/formValidator/form-validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private formValidatorService:FormValidatorService) { }
  signupForm:FormGroup
  ngOnInit(): void {
    this.createSignupForm()
  }

  createSignupForm(){
    this.signupForm=this.formBuilder.group({
      username:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }
  async signup(){
    if(this.formValidatorService.formValidator(this.signupForm)){
      let signupModel = Object.assign({},this.signupForm.value)
      await this.authService.signup(signupModel)
      
    }
  }
}
