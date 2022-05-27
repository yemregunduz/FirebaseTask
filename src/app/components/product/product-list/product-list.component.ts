import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductList } from 'src/app/contracts/productList';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ProductService } from 'src/app/services/product.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService,public dialog:MatDialog) { }
  dataSource :MatTableDataSource<ProductList>
  @ViewChild(MatPaginator) matPaginator:MatPaginator
  displayedColumns = [
    {columnName:"id",show:true},
    {columnName:"name",show:true},
    {columnName:"season",show:true},
    {columnName:"stock",show:true},
    {columnName:"unitPrice",show:true},
    {columnName:"delete",show:true}
  ]
  ngOnInit(): void {
    this.getAllProducts();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAllProducts(){
    this.productService.getAll().subscribe(data => {
      const products = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          stock: e.payload.doc.data()['stock'],
          season:e.payload.doc.data()['season'],
          unitPrice: e.payload.doc.data()['unitPrice'],
        };
      })
      this.dataSource  = new MatTableDataSource<ProductList>(products)
      this.setPaginator(products.length)

    });
  }
  onChange(event:any){
    if(event.value.match("All")){
      this.getAllProducts();
    }
    else{
      this.dataSource.filter = event.value.trim().toLowerCase();
    }
  }
  getDisplayedColumns():string[] {
    return this.displayedColumns.filter(c=>c.show).map(c=>c.columnName);
  }
  showAndHideColumn(column:any){
    if(column){
      column.show=!column.show
    }
  }
  setPaginator(productsLength:number){
    this.matPaginator.length = productsLength
    this.dataSource.paginator = this.matPaginator
  }
  openDeleteDialog(id:string){
    this.dialog.open(DeleteDialogComponent,{width:'20%',data:id});
  }
  openUpdateDialog(productModel:any){

    this.dialog.open(UpdateDialogComponent,{width:'25%',data:productModel});
  }
}
