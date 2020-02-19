import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var topButton = document.getElementById("topButton");

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDesktops(): void {
    console.log("Desktops");
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
