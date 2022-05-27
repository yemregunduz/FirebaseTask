import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private productService:ProductService, @Inject(MAT_DIALOG_DATA) public id:string) { }

  ngOnInit(): void {

  }
  delete(){
    console.log(this.id)
    this.productService.delete(this.id);
  }

}
