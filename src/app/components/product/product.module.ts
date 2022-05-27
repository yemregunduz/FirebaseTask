import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatTable, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,MatButtonModule,MatFormFieldModule,MatCardModule,ReactiveFormsModule,
    MatSelectModule,MatTableModule,MatPaginatorModule,MatDialogModule,MatIconModule,MatMenuModule,MatCheckboxModule,
    AngularSplitModule,
    RouterModule.forChild([
      {path:"",component:ProductComponent}
    ])
  ]
})
export class ProductModule { }
