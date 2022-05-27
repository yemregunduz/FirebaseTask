import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormValidatorService } from 'src/app/services/formValidator/form-validator.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private productService:ProductService,
    private formValidatorService:FormValidatorService) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }
  productAddForm:FormGroup
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",[Validators.required,Validators.minLength(2),Validators.maxLength(150)]],
      stock:["",[Validators.required,Validators.min(0)]],
      unitPrice:["",[Validators.required,Validators.min(0)]],
      season:[,[Validators.required,Validators.min(2016)]]
    })
  }
  add(){
    if(this.formValidatorService.formValidator(this.productAddForm)){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).then(response=>{
        this.productAddForm.reset()
      }
      ).catch(error=>{
        console.log(error)
      })
    }
  }
}
