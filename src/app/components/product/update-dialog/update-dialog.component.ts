import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/contracts/productModel';
import { FormValidatorService } from 'src/app/services/formValidator/form-validator.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: ProductModel,private productService:ProductService,private formValidatorService:FormValidatorService) { }
  productUpdateForm:FormGroup
  ngOnInit(): void {
    this.createProductUpdateForm()
  }
  update(){
    if(this.formValidatorService.formValidator(this.productUpdateForm)){
      let productModel = Object.assign({},this.productUpdateForm.value)
      this.productService.update(productModel)
    }
  }
  createProductUpdateForm(){
    this.productUpdateForm = this.formBuilder.group({
      id:[this.data.id,Validators.required],
      name:[this.data.name,[Validators.required,Validators.minLength(2),Validators.maxLength(150)]],
      stock:[this.data.stock,[Validators.required,Validators.min(0)]],
      unitPrice:[this.data.unitPrice,[Validators.required,Validators.min(0)]],
      season:[this.data.season,[Validators.required,Validators.min(2016)]]
    })
  }
}
