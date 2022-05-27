import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { ProductModel } from '../contracts/productModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public fireService:AngularFirestore) { }

  add(productModel:ProductModel){
    return this.fireService.collection('Product').add(productModel)
  }
  getAll(){
    return this.fireService.collection('Product').snapshotChanges()
  }
  delete(id:string){
    this.fireService.doc('Product/' + id).delete();
  }
  update(productModel:ProductModel)
  {
    this.fireService.doc('Product/' + productModel.id).update(productModel);
  }

}
