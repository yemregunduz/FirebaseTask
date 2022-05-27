import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  
  sizes = {
      topLeftSize : 50,
      topRightSize :50,
      bottomLeftSize : 50,
      bottomRightSize : 50,
      fullLeftSide:70,
      fullRightSide:30
  }
  constructor() { }

  dragEndLeft(event) {
    console.log(event.sizes)
      this.sizes.topLeftSize = event.sizes[0]
      this.sizes.bottomLeftSize = event.sizes[1]
  }
  dragEndRight(event){
      this.sizes.topRightSize = event.sizes[0]
      this.sizes.bottomRightSize = event.sizes[1]
  }
  dragFull(event){
    this.sizes.fullLeftSide = event.sizes[0]
    this.sizes.fullRightSide = event.sizes[1]
  }
    
}

  
   


