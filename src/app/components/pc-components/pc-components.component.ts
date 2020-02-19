import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {

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

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

}
