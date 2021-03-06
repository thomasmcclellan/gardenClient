import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { DatabaseService } from '../services/database.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.findProducts();
  }

  findProducts():void{
    this.dbService.getProducts().subscribe(Product => this.products = Product)
  }

  delete(id){
    if (localStorage.getItem('token')){
      this.dbService.delete(id).subscribe(
        id => this.findProducts()
        )
    }else {
      alert(' You do not have the authority to delete this item ')
    }
  }

}
