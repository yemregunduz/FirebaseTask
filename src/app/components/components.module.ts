import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    LayoutModule,
    LoginModule,
    ProductModule,
  ],
  exports:[
    LayoutModule,
  ]
})
export class ComponentsModule { }
