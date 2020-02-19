import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

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

  goToHomePage(): void {
    this.router.navigate(['/home-page']);
  }

  goToComponents(): void {
    this.router.navigate(['/pc-components']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

}
