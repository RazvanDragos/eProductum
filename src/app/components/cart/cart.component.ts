import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  makeNavbarResponsive() {
    var x = document.getElementById("navMenu");
    if (x.className === "nav-menu") {
      x.className += " responsive";
    } else {
      x.className = "nav-menu";
    }
  }

  openProduct(productName: string): void {
    //this.router.navigate(['/' + productName]);
    this.router.navigate(['/product']);
  }

  goToComponente(): void {
    this.router.navigate(['/pc-components']);
  }

  goToHomePage(): void {
    this.router.navigate(['/home-page']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

}
