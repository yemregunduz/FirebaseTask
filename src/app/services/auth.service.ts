
import {  Injectable, } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthModel } from '../contracts/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firebaseAuth:AngularFireAuth,private router:Router,private toastrService:ToastrService) { }
  async login(authModel:AuthModel){
    await this.firebaseAuth.signInWithEmailAndPassword(authModel.username,authModel.password)
    .then(res=>{
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate(["products"])
    }).catch(err=>{
      console.log(err.message)
      this.toastrService.error(err.message,"Firebase")
    })
  }
  async signup(authModel:AuthModel){
    await this.firebaseAuth.createUserWithEmailAndPassword(authModel.username,authModel.password)
    .then(res=>{
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate(["products"])
    }).catch(err=>{
      this.toastrService.error(err.message,"FireBase")
    })
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem("user")
  }
  isAuthenticated(){
    if(localStorage.getItem("user")){
      return true
    }
    else{
      return false
    }
  }
}
