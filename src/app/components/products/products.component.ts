import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products-service.service';
import { Product } from 'src/app/interfaces/product';

var topButton = document.getElementById("topButton");

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  errorMessage: string = '';

  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit() {
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => this.errorMessage = <any>error
    );
  }

  goToDesktops(): void {
    console.log("Desktops");
    console.log("Products: " + this.products);
  }

  goToLaptops(): void {
    console.log("Laptops");
  }

  goToPhones(): void {
    console.log("Phones");
  }

  goToComponents(): void {
    console.log("Components");
  }

  addToCart(): void {
    console.log("Product was added to cart!");
  }

  openProduct(productName: string): void {
    //this.router.navigate(['/' + productName]);
    this.router.navigate(['/product']);
  }

  goToTopOfThePage(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
