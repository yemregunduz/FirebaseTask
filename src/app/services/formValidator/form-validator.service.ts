import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor(private toastrService:ToastrService){

  }
  formValidator(formGroup:FormGroup):boolean{
    if(formGroup.valid){
      return true;
    }
    else{
      formGroup.markAllAsTouched()
      this.toastrService.error("Tüm bilgileri eksiksiz giriniz.","Doğrulama hatası!")
      
      return false;
    }
  }
}
