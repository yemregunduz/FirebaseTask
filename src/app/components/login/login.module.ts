import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { SignupComponent } from './signup/signup.component';
import { LoginContentComponent } from './login-content/login-content.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginContentComponent,
    
  ],
  imports: [
    CommonModule,
    MatInputModule,MatButtonModule,MatFormFieldModule,MatCardModule,ReactiveFormsModule,MatTabsModule,MatIconModule,
    RouterModule.forChild([
      {path:"",component:LoginComponent}
    ])
  ]
})
export class LoginModule { }
