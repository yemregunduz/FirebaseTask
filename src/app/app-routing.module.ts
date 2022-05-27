import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:'', canActivate:[LoginGuard], component:LayoutComponent,children:[
    {path:'products', loadChildren:()=> import("./components/product/product.module")
    .then(m=>m.ProductModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
